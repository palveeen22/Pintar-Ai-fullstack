import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { readPayloadJose } from "../helpers/lib/jwt";

export const middleware = async (request: NextRequest) => {
	if (
		!request.url.includes("/api") &&
		!request.url.includes("_next/static") &&
		!request.url.includes("_next/image") &&
		!request.url.includes("favicon.ico")
	) {
		console.log(request.method, request.url);
	}

	if (
		(request.url.includes("/api/projects") && request.method === "POST") ||
		request.url.includes("/api/welcome-investor") ||
		request.url.includes("/api/welcome-researcher") ||
		request.url.includes("/api/pdf")
	) {
		console.log("API", request.method, request.url);
		const token = cookies().get("token");
		if (!token) {
			return NextResponse.json({
				statusCode: 401,
				error: "Unauthorized",
			});
		}

		const tokenData = await readPayloadJose<{
			id: string;
			email: string;
			firstname: string;
			lastname: string;
			profileImage: string;
			education: string;
			research: string;
			phone_number: string;
			background: string;
			gender: string;
			jabatan_akademik: string;
			location: string;
			industry_type: string;
			institution: string;
			budget: string;
		}>(token.value);
		// console.log(tokenData, "<<<<<< TOKEN DATA ");

		const requestHeaders = new Headers(request.headers);

		// USER LOGIN INFO
		requestHeaders.set("x-user-id", tokenData.id); // DATA ORANG YANG LAGI LOGIN
		requestHeaders.set("x-user-email", tokenData.email);
		requestHeaders.set("x-user-firstname", tokenData.firstname);
		requestHeaders.set("x-user-lastname", tokenData.lastname);
		// Lanjutin massseeee !!!!

		requestHeaders.set("x-custom-value", "Ini untuk mencoba data tambahan");

		return NextResponse.next({
			headers: requestHeaders,
		});
	}

	return NextResponse.next();
};
