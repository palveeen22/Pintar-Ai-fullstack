import { prisma } from "../../../../helpers/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import { z } from "zod";

// Define the Zod schema for validation
const investorSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  profileImage: z.string().min(1),
  institution: z.string().min(1),
  industry_type: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const requestData = await req.json();

    // Validate data with Zod schema
    const result = investorSchema.safeParse(requestData);

    if (!result.success) {
      return new NextResponse(JSON.stringify({
        status: "error",
        message: "Validation failed",
        errors: result.error.issues,
      }), { status: 400 });
    }

    // Destructure validated data
    const { firstname, lastname, email, password, profileImage, institution, industry_type } = result.data;

    const hashed_password = await hash(password, 10);

    const investor = await prisma.investor.create({
      data: {
        firstname,
        lastname,
        email: email.toLowerCase(),
        password: hashed_password,
        profileImage,
        institution,
        industry_type,
      },
    });

    // Set up email sending with nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pintarscholar@gmail.com',
        pass: 'ptfk nwfa znfd oajn',
      },
    });

    const mailOptions = {
      from: {
        name: "Pintar Scholar",
        address: 'pintarscholar@gmail.com',
      },
      to: investor.email,
      subject: 'Selamat, registrasi berhasil!',
      text: 'Terima kasih telah mendaftar di situs kami.',
    };

    await transporter.sendMail(mailOptions);

    // Send response
    return NextResponse.json({
      investor: {
        firstname: investor.firstname,
        lastname: investor.lastname,
        profileImage: investor.profileImage,
        email: investor.email,
        institution: investor.institution,
        industry_type: investor.industry_type,
      }
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
