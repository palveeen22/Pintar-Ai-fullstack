"use server";
// Import cookies dari next/headers
import { cookies } from "next/headers";
// Import redirect dari next/navigation
import { redirect } from "next/navigation";

export const handleLogout = () => {
	// Menghapus cookie token jika ada
	cookies().get("token") && cookies().delete("token");

	// Redirect ke halaman login
	redirect("/");
};

export const handleGetToken = () => {
	// Menghapus cookie token jika ada
	const data = cookies().get("token");
	// console.log(data, "KOKOKOKOKO");
};
