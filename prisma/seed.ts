const { PrismaClient } = require("@prisma/client");
// import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// import { hashText } from "../../helpers/utils/hash";
// import * as bcryptjs from "bcryptjs";
const { hash } = require("bcryptjs");

// npx prisma migrate reset --force

async function main() {
	const pass1 = await hash("dzul123", 10);
	const pass2 = await hash("vincent123", 10);
	const pass3 = await hash("alvin123", 10);

	// const Jurnal = {
	//   // Data untuk portofolio Jurnal
	//   // ...
	//   abstract: "Abstract of the journal",
	//   title: "Petanian Skala Mikro di Indonesia",
	//   description: "Pertanian Skala Mikro di Indonesia",
	// };
 
	const Jurnal0 = {
		// Data untuk portofolio Jurnal
		// ...
		abstract: "Abstract of the journal",
		title: "Petanian Skala Mikro di Indonesia",
		journal_file: "https://drive.google.com/file/d/1mHWOVEd0QJcyJ1qs2lVt_EWwNYxbGPQn/view?usp=sharing",
		keywords: "agriculture",
		researcherId: 1,
	};

	const Jurnal1 = {
		// Data untuk portofolio Jurnal
		// ...
		abstract: "Pengaruh iklim terhadap produktivitas pertanian",
		title: "Iklim: Faktor Utama Produktivitas Pertanian",
		journal_file: "https://drive.google.com/file/d/1mHWOVEd0QJcyJ1qs2lVt_EWwNYxbGPQn/view?usp=sharing",
		researcherId: 1,
		keywords: "agriculture",
	};

	const Jurnal2 = {
		// Data untuk portofolio Jurnal
		// ...
		abstract: "Peranan teknologi dalam meningkatkan produktivitas pertanian",
		title: "Teknologi: Kunci Produktivitas Pertanian",
		journal_file: "https://drive.google.com/file/d/1mHWOVEd0QJcyJ1qs2lVt_EWwNYxbGPQn/view?usp=sharing",
		researcherId: 1,
		keywords: "agriculture",
	};

	const Jurnal3 = {
		// Data untuk portofolio Jurnal
		// ...
		abstract: "Pengaruh pakan terhadap produktivitas ternak",
		title: "Pakan: Kunci Produktivitas Ternak",
		journal_file: "https://drive.google.com/file/d/1mHWOVEd0QJcyJ1qs2lVt_EWwNYxbGPQn/view?usp=sharing",
		researcherId: 1,
		keywords: "agriculture",
	};

	

	const Jurnal4 = {
		// Data untuk portofolio Jurnal
		// ...
		abstract: "Emisi gas buang kapal dan tumpahan minyak menjadi tantangan lingkungan yang dihadapi industri perkapalan.",
		title: "Melayari Laut Biru: Mencari Solusi Keberlanjutan Perkapalan",
		journal_file: "https://drive.google.com/file/d/1mHWOVEd0QJcyJ1qs2lVt_EWwNYxbGPQn/view?usp=sharing",
		researcherId: 2,
		keywords: "engineering",
	};

	const Jurnal5 = {
		// Data untuk portofolio Jurnal
		// ...
		abstract: "Peningkatan penggunaan robot dan sistem otomatis meningkatkan efisiensi dan kecepatan pembongkaran muatan di pelabuhan.",
		title: "Pelabuhan Masa Depan: Sentuhan Teknologi, Sentuhan Kemanusiaan",
		journal_file: "https://drive.google.com/file/d/1mHWOVEd0QJcyJ1qs2lVt_EWwNYxbGPQn/view?usp=sharing",
		researcherId: 2,
		keywords: "engineering",
	};

	const Jurnal6 = {
		// Data untuk portofolio Jurnal
		// ...
		abstract: "Teknologi digital dapat digunakan untuk meningkatkan efisiensi dan efektivitas pembelajaran, seperti pembelajaran jarak jauh, virtual reality, dan augmented reality.",
		title: "Teknologi Digital: Solusi untuk Pembelajaran Masa Depan",
		journal_file: "https://drive.google.com/file/d/1mHWOVEd0QJcyJ1qs2lVt_EWwNYxbGPQn/view?usp=sharing",
		researcherId: 1,
		keywords: "engineering",
	};

	const Jurnal7 = {
		// Data untuk portofolio Jurnal
		// ...
		abstract: "Teknologi informasi dan komunikasi (TIK) telah menjadi bagian penting dalam kehidupan masyarakat, termasuk dalam dunia pendidikan. TIK dapat digunakan untuk meningkatkan kualitas pembelajaran, baik dari segi materi, metode, maupun evaluasi.",
		title: "Pengaruh Penggunaan Teknologi Informasi dan Komunikasi (TIK) terhadap Hasil Belajar Siswa",
		journal_file: "https://drive.google.com/file/d/1mHWOVEd0QJcyJ1qs2lVt_EWwNYxbGPQn/view?usp=sharing",
		researcherId: 1,
		keywords: "education",
	};

	const Jurnal8 = {
		// Data untuk portofolio Jurnal
		// ...
		abstract: "Fungsi kognitif merupakan kemampuan mental yang diperlukan untuk berpikir, belajar, dan mengingat. Fungsi kognitif dapat menurun seiring bertambahnya usia. Buah dan sayur merupakan sumber nutrisi penting yang dapat membantu menjaga kesehatan otak, termasuk fungsi kognitif.",
		title: "Pengaruh Konsumsi Buah dan Sayur terhadap Fungsi Kognitif pada Lansia",
		journal_file: "https://drive.google.com/file/d/1mHWOVEd0QJcyJ1qs2lVt_EWwNYxbGPQn/view?usp=sharing",
		researcherId: 1,
		keywords: "health",
	};

	const Jurnal9 = {
		// Data untuk portofolio Jurnal
		// ...
		abstract: "Perubahan iklim merupakan salah satu masalah lingkungan yang paling mendesak saat ini. Perubahan iklim dapat menyebabkan berbagai dampak negatif terhadap keanekaragaman hayati",
		title: "Pengaruh Perubahan Iklim terhadap Keanekaragaman Hayati",
		journal_file: "https://drive.google.com/file/d/1mHWOVEd0QJcyJ1qs2lVt_EWwNYxbGPQn/view?usp=sharing",
		researcherId: 1,
		keywords: "enviroment",
	};




	const Project0 = {
		// Data untuk portofolio Jurnal
		// ...
		project_name: "Meningkatkan Efisiensi Mesin",
		description_project: "Bagaiman caranya meningkatkan efisiensi mesin",
		project_image: "https://i.pinimg.com/564x/3d/b5/45/3db545fbc89144d41b8749e22af12d01.jpg",
		project_status: false,
		starting_date: new Date(),
		expected_finish_date: new Date(),
		project_budget: 10000000,
		keywords: "engineering",
		// investorId: 1,
		createdAt: new Date(),
		updatedAt: new Date(),
	};

	const Project1 = {
		// Data untuk portofolio Jurnal
		// ...
		project_name: "Pengembangan Aplikasi Pemantauan Tanaman",
		description_project: "Pengembangan aplikasi pemantauan tanaman yang dapat membantu petani untuk memantau kondisi tanaman secara real-time",
		project_image: "https://i.pinimg.com/564x/12/26/1a/12261af7aad2da6c91bae56db7031c66.jpg",
		project_status: false,
		starting_date: new Date(),
		expected_finish_date: new Date(),
		project_budget: 1000000,
		keywords: "agriculture",
		// investorId: 2,
		createdAt: new Date(),
		updatedAt: new Date(),
	};

	const Project2 = {
		// Data untuk portofolio Jurnal
		// ...
		project_name: "Pengembangan Sistem Informasi Manajemen Pertanian",
		description_project: "Pengembangan sistem informasi manajemen pertanian yang dapat membantu petani untuk mengelola usaha tani mereka secara lebih efisien",
		project_image: "https://i.pinimg.com/564x/36/95/cc/3695ccaaa3120883eab3988dda8dd50c.jpg",
		project_status: false,
		starting_date: new Date(),
		expected_finish_date: new Date(),
		project_budget: 10000000,
		keywords: "agriculture",
		// investorId: 2,
		createdAt: new Date(),
		updatedAt: new Date(),
	};

	const Project3 = {
		// Data untuk portofolio Jurnal
		// ...
		project_name: "Pengembangan Varietas Padi Tahan Kekeringan",
		description_project: "Pengembangan varietas padi tahan kekeringan yang dapat meningkatkan produktivitas padi di daerah kering",
		project_image: "https://i.pinimg.com/564x/c7/94/8a/c7948a813f05e64302d0ccb8a1a25c7b.jpg",
		project_status: false,
		starting_date: new Date(),
		expected_finish_date: new Date(),
		project_budget: 10000000,
		keywords: "agriculture",
		// investorId: 2,
		createdAt: new Date(),
		updatedAt: new Date(),
	};

	const Payment1 = {
		// Data untuk Comment
		// ...
		price: 500000,
		createdAt: new Date(),
		updatedAt: new Date(),
		// Investor: "alvin",
		// investorId: 1,
		status: false,
		invoice: "Ini adalah invoice",
	};

	const Payment2 = {
		// Data untuk Comment
		// ...
		price: 500000,
		createdAt: new Date(),
		updatedAt: new Date(),
		// Investor: "alvin",
		// investorId: 2,
		status: false,
		invoice: "Ini adalah invoice",
	};

	// Seeding satu researcher
	const dzul = await prisma.researcher.upsert({
		where: { email: "dzul@mail.com" },
		update: {},
		create: {
			firstname: "Dzuuul",
			lastname: "Sucipto",
			isPremium: false,
			education: "S3",
			profileImage: "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/10/roadtonarutopv_screenshot.png?resize=696%2C392&ssl=1",
			email: "dzul@mail.com",
			password: pass1,
			background: "agriculture",
			gender: "Male",
			jabatan_akademik: "Dosen",
			portofolio: { create: [Jurnal0, Jurnal1, Jurnal2, Jurnal3] },
			location: "Jakarta",
			createdAt: new Date(),
			updatedAt: new Date(),// Project: { create: [Project1, Project2, Project3] }, sebelumnya
		},
	});
	const vincent = await prisma.researcher.upsert({
		where: { email: "vincent@mail.com" },
		update: {},
		create: {
			firstname: "Vincent",
			lastname: "Widodo",
			isPremium: true,
			education: "S2",
			profileImage: "https://static.wikia.nocookie.net/naruto/images/7/70/Boruto_Boruto_Movie.png/revision/latest/thumbnail/width/360/height/360?cb=20150526164416&path-prefix=id",
			email: "vincent@mail.com",
			password: pass2,
			background: "engineering",
			gender: "Male",
			jabatan_akademik: "Dosen",
			portofolio: { create: [Jurnal4, Jurnal5] },
			location: "Madura",
			createdAt: new Date(),
			updatedAt: new Date(),// Project: { create: [Project0] }, sebelumnya
		},
	});

	const bambang = await prisma.researcher.upsert({
		where: { email: "bambang@mail.com" },
		update: {},
		create: {
			firstname: "Bambang",
			lastname: "Suherman",
			isPremium: true,
			education: "S3",
			profileImage: "https://static.wikia.nocookie.net/naruto/images/7/70/Boruto_Boruto_Movie.png/revision/latest/thumbnail/width/360/height/360?cb=20150526164416&path-prefix=id",
			email: "bambang@mail.com",
			password: pass2,
			background: "health",
			gender: "Male",
			jabatan_akademik: "Dosen",
			portofolio: { create: [Jurnal8] },
			location: "Ternate",
			createdAt: new Date(),
			updatedAt: new Date(),// Project: { create: [Project0] }, sebelumnya
		},
	});

	const samsudin = await prisma.researcher.upsert({
		where: { email: "samsudin@mail.com" },
		update: {},
		create: {
			firstname: "Samsudin",
			lastname: "Andara",
			isPremium: true,
			education: "S2",
			profileImage: "https://static.wikia.nocookie.net/naruto/images/7/70/Boruto_Boruto_Movie.png/revision/latest/thumbnail/width/360/height/360?cb=20150526164416&path-prefix=id",
			email: "samsudin@mail.com",
			password: pass2,
			background: "education",
			gender: "Male",
			jabatan_akademik: "Dosen",
			portofolio: { create: [Jurnal7] },
			location: "Ternate",
			createdAt: new Date(),
			updatedAt: new Date(),// Project: { create: [Project0] }, sebelumnya
		},
	});

	const samsuri = await prisma.researcher.upsert({
		where: { email: "samsuri@mail.com" },
		update: {},
		create: {
			firstname: "Samsuri",
			lastname: "Andara",
			isPremium: true,
			education: "S2",
			profileImage: "https://static.wikia.nocookie.net/naruto/images/7/70/Boruto_Boruto_Movie.png/revision/latest/thumbnail/width/360/height/360?cb=20150526164416&path-prefix=id",
			email: "samsuri@mail.com",
			password: pass2,
			background: "enviroment",
			gender: "Male",
			jabatan_akademik: "Dosen",
			portofolio: { create: [Jurnal9] },
			location: "Ternate",
			createdAt: new Date(),
			updatedAt: new Date(),// Project: { create: [Project0] }, sebelumnya
		},
	});

	// Untuk Investor
	const alvin = await prisma.investor.upsert({
		where: { email: "alvin@mail.com" },
		update: {},
		create: {
			email: "alvin@mail.com",
			password: pass3,
			firstname: "Alvin",
			lastname: "Gunawan",
			profileImage: "https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_3_V2.png/revision/latest?cb=20170627161720&path-prefix=id",
			institution: "Pribadi",
			industry_type: "Manufaktur",
			createdAt: new Date(),
			updatedAt: new Date(),
			Project: { create: [Project0] }, //Project: { create: Project0 },
			payment: { create: Payment1 },
		},
	});

	const adlin = await prisma.investor.upsert({
		where: { email: "adlin@mail.com" },
		update: {},
		create: {
			email: "adlin@mail.com",
			password: pass3,
			firstname: "adlin",
			lastname: "uye",
			profileImage: "https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_3_V2.png/revision/latest?cb=20170627161720&path-prefix=id",
			institution: "Pribadi",
			industry_type: "agriculture",
			createdAt: new Date(),
			updatedAt: new Date(),
			Project: { create: [Project1, Project2, Project3] }, // Project: { create: [Project1, Project2, Project3] }, sebelumnya
			payment: { create: Payment2 },
		},
	});

	

}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
