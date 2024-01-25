import { openai } from "@/config/openAi.config";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

export async function POST(req: Request, res: Response) {
	const dataKembalianDariPostman = await req.formData();
	const question = dataKembalianDariPostman.get("question");

	console.log("q>>>", question);

	try {
		// const question = req.body.question;
		const ai = await openai.chat.completions.create({
			model: "gpt-3.5-turbo", //4
			messages: [
				{
					role: "user",
					content: `${question}`,
				},
			],
		});

		// Assuming 'data' contains the response string
		const data = ai.choices[0].message.content as string;

		// Splitting the data to isolate the title and description
		// const splitResponse = data.split(" Deskripsi: ");
		// const title = splitResponse[0];

		// Pisahkan teks berdasarkan "Judul:" dan "Deskripsi:"
		const separatorIndex = data.indexOf("Deskripsi:");
		const judul = data.slice(6, separatorIndex).trim(); // 6 adalah panjang dari "Judul:"
		const deskripsi = data.slice(separatorIndex + 10).trim(); // 10 adalah panjang dari "Deskripsi:"

		// const hasilBanget = {
		// 	splitResponse,
		// 	title,
		// 	description,
		// };

		// console.log(hasilBanget);

		// console.log(answer);

		// const title = data[1];
		// const abstract = data[2];
		// imideatly create to db prisma

		// // Prisma create query
		// await prisma.jurnal.create({
		// 	data: {
		// 		researcherId: Number(userId),
		// 		title,
		// 		abstract,
		// 	},
		// });

		// return data;
		// console.log(title);

		console.log("Judul:", judul);
		console.log("Deskripsi:", deskripsi);

		return NextResponse.json({ judul, deskripsi });
	} catch (err) {
		console.log(err);
	}
}
