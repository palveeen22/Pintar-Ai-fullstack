"use server";

// import { getUserByEmail } from "@/db/models/user";
// import { compareTextWithHash } from "@/db/utils/hash";
import { compareTextWithHash } from "../../../../helpers/utils/hash";
import { createToken } from "../../../../helpers/lib/jwt";

import { redirect } from "next/navigation";

import { z } from "zod";

import { cookies } from "next/headers";
import { prisma } from "../../../../helpers/lib/prisma";

export const doLogin = async (formData: FormData) => {
	const loginInputSchema = z.object({
		email: z.string().email(),
		password: z.string(),
	});

	// Mengambil data dari form
	const email = formData.get("email");
	const password = formData.get("password");

	// Memvalidasi data input dengan zod
	const parsedData = loginInputSchema.safeParse({
		email,
		password,
	});

	if (!parsedData.success) {
		// !! Ingat, jangan di-throw kecuali ingin menghandle error di sisi client via error.tsx !
		const errPath = parsedData.error.issues[0].path[0];
		const errMessage = parsedData.error.issues[0].message;
		const errFinalMessage = `${errPath} - ${errMessage}`;

		// Mengembalikan error via redirect
		return redirect(`http://localhost:3000/login?error=${errFinalMessage}`);
	}

	// Memvalidasi data terhadap database
	const getUserByEmail = async (email: string) => {
		const user = await prisma.investor.findUnique({
			where: { email },
		});
		return user;
	};

	const user = await getUserByEmail(parsedData.data.email);

	if (!user || !compareTextWithHash(parsedData.data.password, user.password)) {
		return redirect(`http://localhost:3000/login?error=Invalid%20credentials`);
	}

	// Membuat Payload dan Token
	const payload = {
		id: user.id,
		email: user.email,
		firstname: user.firstname,
		lastname: user.lastname,
	};
	// console.log(payload, "INI PAYLOAD BOSSSSS");

	const token = createToken(payload);

	// Menyimpan token dengan menggunakan cookies
	cookies().set("token", token, {
		httpOnly: true,
		secure: false,
		expires: new Date(Date.now() + 5000 * 60 * 60), // 1 hour
		sameSite: "strict",
	});

	// Melakukan redirect ke halaman "/dashboard/jokes"
	return redirect(`http://localhost:3000/welcome-investor`);
};
