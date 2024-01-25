"use server"

import { prisma } from "../../../../../../helpers/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type TProps = {
	params: { email: string };
};

export async function GET(req: NextRequest, { params }: TProps) {
	try {
		// console.log(params.email, "<<<<<<<<< AKWOAKWOKAOW");
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
			to: params.email,
			subject: "Project are here!",
			text: "Hello Researchers! anda mendapatkan undangan unutk join project.",
		};

		const sendMail = await transporter.sendMail(mailOptions);
		
		// const researcher = await prisma.researcher.findFirst({
		// 	where: { email: params.slug },
		// });
            
        return NextResponse.json(sendMail);
	} catch (error) {
		console.log(error, "Prisma Error");
	}
}