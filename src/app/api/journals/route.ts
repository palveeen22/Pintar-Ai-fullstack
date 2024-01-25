import { prisma } from "../../../../helpers/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: Request) {
// 	try {
// 		const { abstract, title , researcherId} = (await req.json()) as {
// 			abstract: string;
// 			title: string;
// 			researcherId: number
// 		};

// 		// const journal = await prisma.jurnal.create({
// 		// 	data: {
// 		// 		abstract,
// 		// 		title,
// 		// 	},
// 		// });

// 		const journal = await prisma.jurnal.create({
// 			data: {
// 				abstract,
// 				title,
// 				researcherId
// 			},
// 		});

// 		return NextResponse.json({
// 			journal: {
// 				abstract: journal.abstract,
// 				title: journal.title,
// 			},
// 		});
// 	} catch (error: any) {
// 		return new NextResponse(
// 			JSON.stringify({
// 				status: "error",
// 				message: error.message,
// 			}),
// 			{ status: 500 }
// 		);
// 	}
// }

// GET ALL JOURNALS
export async function GET(req: NextRequest) {
	const projects = await prisma.jurnal.findMany({
		include: {
			portofolio: true,
		},
	});
	return NextResponse.json(projects);
}
