import schema from "../schema";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

type TProps = {
	params: { id: string };
};

// GET user by id
export async function GET(req: NextRequest, { params }: TProps) {
	const user = await prisma.researcher.findUnique({
		where: { id: parseInt(params.id) },
		include: {
			portofolio: true,
		},
	});

	if (!user) {
		return NextResponse.json({ error: "User not found" }, { status: 404 });
	}

	return NextResponse.json(user);
}

// PUT by Id
export async function PUT(req: NextRequest, { params }: TProps) {
	const body = await req.json();
	const validation = schema.safeParse(body);

	if (!validation.success) {
		return NextResponse.json(validation.error.errors, { status: 400 });
	}

	const user = await prisma.researcher.findUnique({
		where: { id: parseInt(params.id) },
	});

	if (!user) {
		return NextResponse.json(
			{ error: "Researcher not found." },
			{ status: 404 }
		);
	}

	const updatedUser = await prisma.researcher.update({
		where: { id: user.id },
		data: {
			firstname: body.firstname,
			lastname: body.lastname,
			password: body.password,
			education: body.education,
			institution: body.institution,
			profileImage: body.profileImage,
			email: body.email,
			background: body.background,
			gender: body.gender,
			role: body.role,
			location: body.location,
		},
	});

	return NextResponse.json(updatedUser);
}

// DELETE by id
export async function DELETE(req: NextRequest, { params }: TProps) {
	const user = await prisma.researcher.findUnique({
		where: { id: parseInt(params.id) },
	});

	if (!user) {
		return NextResponse.json({ error: "User not found." }, { status: 404 });
	}

	await PrismaClient.researcher.delete({
		where: { id: user.id },
	});

	return NextResponse.json({});
}
