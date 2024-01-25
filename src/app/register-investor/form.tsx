"use client";

import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

export const RegisterForm = () => {
	const [loading, setLoading] = useState(false);
	const [formValues, setFormValues] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		profileImage: "",
		institution: "",
		industry_type: "",
	});
	const [error, setError] = useState("");

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setFormValues({
			firstname: "",
			lastname: "",
			email: "",
			password: "",
			profileImage: "",
			institution: "",
			industry_type: "",
		});

		try {
			const res = await fetch("/api/register-investor", {
				method: "POST",
				body: JSON.stringify(formValues),
				headers: {
					"Content-Type": "application/json",
				},
			});

			setLoading(false);
			if (!res.ok) {
				setError((await res.json()).message);
				return;
			}

			signIn("/");
			// redirect("/")
		} catch (error: any) {
			setLoading(false);
			setError(error);
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		const newValue = name === "budget" ? parseInt(value, 10) : value;
		setFormValues({ ...formValues, [name]: newValue });
	};

	const input_style = "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

	return (
		<form onSubmit={onSubmit}>
			<h1 className="m-5 text-3xl text-center">Welcome Project Owner Everything you need is here..</h1>
			{error && <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>}
			<div className="mb-6">
				<input required type="text" name="firstname" value={formValues.firstname} onChange={handleChange} placeholder="Firstname" className={`${input_style}`} />
			</div>
			<div className="mb-6">
				<input required type="text" name="lastname" value={formValues.lastname} onChange={handleChange} placeholder="Lastname" className={`${input_style}`} />
			</div>
			<div className="mb-6">
				<input required type="email" name="email" value={formValues.email} onChange={handleChange} placeholder="Email address" className={`${input_style}`} />
			</div>
			<div className="mb-6">
				<input required type="password" name="password" value={formValues.password} onChange={handleChange} placeholder="Password" className={`${input_style}`} />
			</div>
			<div className="mb-6">
				<input required type="text" name="profileImage" value={formValues.profileImage} onChange={handleChange} placeholder="Profile Image" className={`${input_style}`} />
			</div>
			<div className="mb-6">
				<input required type="text" name="institution" value={formValues.institution} onChange={handleChange} placeholder="Institution" className={`${input_style}`} />
			</div>
			<div className="mb-6">
				<input required type="text" name="industry_type" value={formValues.industry_type} onChange={handleChange} placeholder="Industry Type" className={`${input_style}`} />
			</div>
			<button type="submit" style={{ backgroundColor: `${loading ? "#ccc" : "#3446eb"}` }} className="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" disabled={loading}>
				{loading ? "loading..." : "Sign Up"}
			</button>
			<div className="my-4 flex justify-center gap-2">
				<p className="text-base font-light font-mono text-[#FF6100]">Already have an Account?</p>
				<Link href="/login-investor">
					<p className="underline text-base font-mono text-[#242628] cursor-pointer">Sign in</p>
				</Link>
			</div>
		</form>
	);
};
