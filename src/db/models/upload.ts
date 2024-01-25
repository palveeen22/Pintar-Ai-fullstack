import { openai } from "@/config/openAi.config";
import { prisma } from "../../../helpers/lib/prisma";
// import storage from '../config/firebase'
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { PdfReader } from "pdfreader";

export class Upload {
	static async extractPDF(file: File, userId: string) {
		// console.log(userId, "<<<<");
		try {
			const fileArrBuff = await file.arrayBuffer();
			const fileBuff = Buffer.from(fileArrBuff);
			// const title: string[] = [];
			const result: string[] = [];

			const pdfreader = new PdfReader({});

			pdfreader.parseBuffer(fileBuff, (err: any, item: any) => {
				if (err) {
					console.error("error:", err);
				} else if (item && item.text) {
					if (item.text.includes("ABSTRACT")) {
						// Mulai memasukkan ke dalam array result ketika menemukan "Abstract"
						result.push(item.text);
						// } else if (item.text) {
						// 	title.push(item.text);
					} else if (result.length > 0) {
						// Masukkan semua teks berikutnya ke dalam array result
						result[result.length - 1] += ` ${item.text}`;
					}
				} else if (!item) {
					let resultGabungan = "";

					const pemisahKataKunci = result.toString().split("Kata kunci:")[0];
					const pemisahKeywords = result.toString().split("Keywords:")[0];

					if (
						!pemisahKataKunci.toLocaleLowerCase().includes("kata kunci:") &&
						!pemisahKataKunci.toLocaleLowerCase().includes("keywords:")
					) {
						resultGabungan += pemisahKataKunci;
					}

					if (
						!pemisahKeywords.toLocaleLowerCase().includes("kata kunci:") &&
						!pemisahKeywords.toLocaleLowerCase().includes("keywords:")
					) {
						resultGabungan += pemisahKeywords;
					}

					console.log(resultGabungan);
					// console.log(title.toString().split("Analisis"));

					// const resultGabungan = pemisahKataKunci + pemisahKeywords;

					return this.sumPDF(resultGabungan, userId);
				}
			});

			return result;
		} catch (err) {
			console.log(err);
		}
	}

	static async sumPDF(val: string, userId: string) {
		try {
			const ai = await openai.chat.completions.create({
				model: "gpt-4",
				messages: [
					{
						role: "user",
						content: `Please summarize the attached texts and identify which of the following keywords - Education, Engineering, Health, Agriculture, Environment - it relates to. Also, provide a short title for the summary. Include only the keyword and the short title in your response, thats all. ${val}`,
					},
				],
			});

			// // const data = ai.choices[0].message.content as string;
			// const data = (ai.choices[0].message.content as string).split(" - ");

			// const abstract: string = val;
			// // const keyword = data[0];
			// const keyword = data[0];

			// // const keyword = data[1]?.split('Keywords: ')[1]
			// const title = data[1]
			// // const title =data[3]?.split('Title: ')[1]

			// console.log(keyword);
			// console.log(title);

			const data = (ai.choices[0].message.content as string).split("\n");
			const abstract: string = val;

			// Membersihkan karakter newline
			const cleanedData = data.map((item) => item.trim());

			// Jika keyword adalah elemen pertama, Anda dapat mengaksesnya dengan index 0
			const keyword = cleanedData[0];

			// Jika judul adalah elemen kedua, Anda dapat mengaksesnya dengan index 1
			const title = cleanedData[1].replace(/"/g, "");

			const file = "https://drive.google.com/file/d/1mHWOVEd0QJcyJ1qs2lVt_EWwNYxbGPQn/view?usp=sharing"
			console.log("Keyword:", keyword);
			console.log("Title:", title);

			// const result = data.split("Keyword:")[0];

			// // // Prisma create query
			await prisma.jurnal.create({
				data: {
					title: title,
					keywords: keyword,
					abstract: abstract,
					journal_file: file,
					researcherId: Number(userId),
				},
			});

			return data;
		} catch (err) {
			console.error(err);
		}
	}
}

// static async upPDF(file: File, userId: string) {
// 	try {
// 		const collection = await this.connection();

// 		const storageRef = ref(storage, file.name);
// 		const upload = uploadBytes(storageRef, file);

// 		const data = await upload.then(async (snapshot) => {
// 			return getDownloadURL(snapshot.ref).then((dataUrl) => {
// 				return dataUrl;
// 			});
// 		});

// 		await collection.findOneAndUpdate(
// 			{ _id: new ObjectId(userId) },
// 			{
// 				$set: {
// 					cvLink: data,
// 				},
// 			}
// 		);

// 		return data;
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

// static async upImg(file: File, userId: string) {
// 	try {
// 		const collection = await this.connection();

// 		const storageRef = ref(storage, userId);
// 		const upload = uploadBytes(storageRef, file);

// 		const data = await upload.then(async (snapshot) => {
// 			return getDownloadURL(snapshot.ref).then((dataUrl) => {
// 				return dataUrl;
// 			});
// 		});

// 		await collection.findOneAndUpdate(
// 			{ _id: new ObjectId(userId) },
// 			{
// 				$set: {
// 					picture: data,
// 				},
// 			}
// 		);

// 		return data;
// 	} catch (err) {
// 		console.log(err);
// 	}
// }
