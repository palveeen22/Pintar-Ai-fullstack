import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
// import prisma from "@/prisma/client";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import * as bcryptjs from "bcryptjs";

// // GET ALL USERS
// export async function GET(req: NextRequest) {
// 	const researchers = await prisma.researcher.findMany();
// 	return NextResponse.json(researchers);
// }

// ADD USER
export async function POST(req: NextRequest) {
	const body = await req.json();
	const validation = schema.safeParse(body);

	if (!validation.success) {
		return NextResponse.json(validation.error.errors, { status: 400 });
	}

	const researcher = await prisma.researcher.findUnique({
		where: { email: body.email },
	});

	if (researcher) {
		return NextResponse.json({ error: "Researchers already exists" }, { status: 400 });
	}

	const hashedPassword = await bcryptjs.hash(body.password, 10);
	const userNew = await prisma.researcher.create({
		data: {
			firstname: body.firstname,
			lastname: body.lastname,
			education: body.education,
			profileImage: body.profileImage,
			email: body.email,
			password: hashedPassword,
			phone_number: body.phone_number,
			background: body.background,
			gender: body.gender,
			jabatan_akademik: body.jabatan_akademik,
			location: body.location,
			investasi: body.investasi,
		},
	});

	const { password, ...rest } = userNew;

	return NextResponse.json(rest, { status: 201 });
}

// GET ALL RESEARCHERS
export async function GET(req: NextRequest) {
	const projects = await prisma.researcher.findMany({
		include: {
			portofolio: true,
		},
	});
	return NextResponse.json(projects);
}
