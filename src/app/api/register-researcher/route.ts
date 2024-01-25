import { prisma } from "../../../../helpers/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// Define the Zod schema for validation
const researcherSchema = z.object({
	firstname: z.string().min(1),
	lastname: z.string().min(1),
	isPremium: z.boolean(),
	email: z.string().email(),
	password: z.string().min(5),
	education: z.string().min(1),
	profileImage: z.string(),
	background: z.string(),
	gender: z.string().min(1),
	location: z.string().min(1),
	jabatan_akademik: z.string().min(1),
	investasi: z.string().default("0"),
});

export async function POST(req: Request) {
	try {
		const requestData = await req.json();
		console.log(requestData, "<<<< req data");
		

		// Validate data with Zod schema
		const result = researcherSchema.safeParse(requestData);

		if (!result.success) {
			return new NextResponse(
				JSON.stringify({
					status: "error",
					message: "Validation failed",
					errors: result.error.issues,
				}),
				{ status: 400 }
			);
		}

		// Destructure validated data
		const { firstname, lastname, isPremium, password, education, profileImage, email, background, gender, location, jabatan_akademik } = result.data;

		const hashed_password = await hash(password, 10);

		const researcher = await prisma.researcher.create({
			data: {
				firstname,
				lastname,
				isPremium,
				password: hashed_password,
				education,
				profileImage,
				jabatan_akademik,
				email,
				background,
				gender,
				location,
			},
		});
		console.log(researcher, "<<<< ");

		// Set up email sending with nodemailer
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "pintarscholar@gmail.com",
				pass: "ptfk nwfa znfd oajn",
			},
		});

		const mailOptions = {
			from: {
				name: "Pintar Scholar",
				address: "pintarscholar@gmail.com",
			},
			to: researcher.email,
			subject: "Selamat, registrasi berhasil!",
			text: "Terima kasih telah mendaftar di situs kami.",
		};

		await transporter.sendMail(mailOptions);

		// Send response
		return NextResponse.json({
			researcher: {
				firstname: researcher.firstname,
				lastname: researcher.lastname,
				isPremium: researcher.isPremium,
				education: researcher.education,
				profileImage: researcher.profileImage,
				email: researcher.email,
				background: researcher.background,
				gender: researcher.gender,
				location: researcher.location,
			},
		});
	} catch (error: any) {
		return new NextResponse(
			JSON.stringify({
				status: "error",
				message: error.message,
			}),
			{ status: 500 }
		);
	}
}
