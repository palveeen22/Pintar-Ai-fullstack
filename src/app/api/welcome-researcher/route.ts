import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../helpers/lib/prisma";


// GET ALL JOURNALS BY LOGIN
export async function GET(req: NextRequest) {
	// console.log("masuk di get /api/projects");
	// console.log(req.headers.get("x-user-id"), "<<<< user id nih di get");
	const idUserLogin = req.headers.get("x-user-id");
	console.log(idUserLogin, "WKOAKWOKAOWKAW");

	const journals = await prisma.jurnal.findMany({
		where: {
			researcherId: Number(idUserLogin),
		},
		include: {
			portofolio: true
		}
	});
	console.log(journals, "<<<<<<< JOURNALS");

	return NextResponse.json(journals);
}

