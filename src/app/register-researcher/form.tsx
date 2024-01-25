"use client";

import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import { redirect } from "next/navigation";

import Link from "next/link";

import { SingleImageDropzone } from "../components/singe-image-dropzone";
import { useEdgeStore } from "@/lib/edgestore";

export const RegisterForm = () => {
	// Edge store state
	const [file, setFile] = useState<File>();
	const [progress, setProgress] = useState(0);

	// const [urls, setUrls] = useState<{
	// 	url: string;
	// 	thumbnailUrl: string | null;
	// }>();

	const [urls, setUrls] = useState<{
		url: string;
	}>();

	const [loading, setLoading] = useState(false);
	const [formValues, setFormValues] = useState({
		firstname: "",
		lastname: "",
		isPremium: false,
		email: "",
		password: "",
		profileImage: "",
		background: "",
		gender: "",
		location: "",
		jabatan_akademik: "",
		education: "",
	});
	const [error, setError] = useState("");

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const payload = {
			...formValues,
			isPremium: false,
		}
		console.log(payload, "<<<< payloaddd");
		

		try {
			const res = await fetch("/api/register-researcher", {
				method: "POST",
				body: JSON.stringify(payload),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const responseJSON = await res.json();
			console.log(responseJSON, "<<<<<<<<<<<<<< JSON");

			setFormValues({
				firstname: "",
				lastname: "",
				isPremium: false,
				email: "",
				password: "",
				profileImage: "",
				background: "",
				gender: "",
				location: "",
				jabatan_akademik: "",
				education: "",
			});

			// setLoading(false);
			// if (!res.ok) {
			// 	setError((await res.json()).message);
			// 	return;
			// }

			// signIn("/");
		} catch (error: any) {
			// setLoading(false);
			setError(error);
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = event.target;
		// setFormValues({ ...formValues, [name]: value });


		if (name === "education") {
			setFormValues({ ...formValues, education: value, gender: value });
		} else {
			setFormValues({ ...formValues, [name]: value });
		}
	};

	// Edge store setup
	const { edgestore } = useEdgeStore();

	const input_style = "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

	// ... (previous code)
	// ... (previous code)

	return (
		<form onSubmit={onSubmit}>
			<h1 className="m-5 text-3xl text-center">Welcome Researcher Everything you need is here..</h1>
			{error && <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>}
			<div className="mb-6">
				<label htmlFor="firstname" className="text-sm font-normal text-gray-700">
					Firstname
				</label>
				<input required type="text" name="firstname" value={formValues.firstname} onChange={handleChange} placeholder="Firstname" className={`${input_style}`} />
			</div>
			<div className="mb-6">
				<label htmlFor="lastname" className="text-sm font-normal text-gray-700">
					Lastname
				</label>
				<input required type="text" name="lastname" value={formValues.lastname} onChange={handleChange} placeholder="Lastname" className={`${input_style}`} />
			</div>
			<div className="mb-6">
				<label htmlFor="email" className="text-sm font-normal text-gray-700">
					Email address
				</label>
				<input required type="email" name="email" value={formValues.email} onChange={handleChange} placeholder="Email address" className={`${input_style}`} />
			</div>
			<div className="mb-6">
				<label htmlFor="password" className="text-sm font-normal text-gray-700">
					Password
				</label>
				<input required type="password" name="password" value={formValues.password} onChange={handleChange} placeholder="Password" className={`${input_style}`} />
			</div>
			<div className="mb-6">
				<label htmlFor="education" className="text-sm font-normal text-gray-700">
					Education Level
				</label>
				<select required name="education" value={formValues.education} onChange={handleChange} className={`${input_style}`}>
					<option value="" disabled>Select Your Education</option>
					<option value="s1">S1</option>
					<option value="s2">S2</option>
					<option value="s3">S3</option>
				</select>
			</div>
			<div className="mb-6">
				<label htmlFor="jabatan_akademik" className="text-sm font-normal text-gray-700">
					Jabatan Akademik
				</label>
				<input required type="text" name="jabatan_akademik" value={formValues.jabatan_akademik} onChange={handleChange} placeholder="Jabatan Akademik" className={`${input_style}`} />
			</div>
			<div className="mb-6">
				<label htmlFor="gender" className="text-sm font-normal text-gray-700">
					Gender
				</label>
				<select required name="gender" value={formValues.gender} onChange={handleChange} className={`${input_style}`}>
					<option value="" disabled>Select Gender</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
				</select>
			</div>
			<div className="mb-6">
				<label htmlFor="background" className="text-sm font-normal text-gray-700">
				Background
				</label>
				<select required name="background" value={formValues.background} onChange={handleChange} className={`${input_style}`}>
					<option value="" disabled>Select Background</option>
					<option value="health">Health</option>
					<option value="agriculture">Agriculture</option>
					<option value="engineering">Engineering</option>
					<option value="education">Education</option>
					<option value="enviroment">Enviroment</option>
				</select>
			</div>
			<div className="mb-6">
				<label htmlFor="location" className="text-sm font-normal text-gray-700">
					Location
				</label>
				<input required type="text" name="location" value={formValues.location} onChange={handleChange} placeholder="Location" className={`${input_style}`} />
			</div>
			<div className="mb-6">
				<label htmlFor="profileImage" className="text-sm font-normal text-gray-700">
					Profile Image Link
				</label>
				<input required type="text" name="profileImage" value={formValues.profileImage} onChange={handleChange} placeholder="Profile Image Link" className={`${input_style}`} />
			</div>
			{/* <div className="flex flex-col items-center m-6 gap-2">
				<SingleImageDropzone
					width={200}
					height={200}
					value={file}
					onChange={(file) => {
						setFile(file);
					}}
				/>
				<div className="h-[6px] w-44 border rounded overflow-hidden">
					<div className="h-full bg-black transition-all duration-150" style={{ width: `${progress}%` }} />
				</div>
			</div> */}
			<button
				// onClick={async () => {
				// 	if (file) {
				// 		const res = await edgestore.publicFiles.upload({
				// 			file,
				// 			onProgressChange: (progress) => {
				// 				setProgress(progress);
				// 			},
				// 		});
				// 		console.log(res.url, "<<<<< URL");

				// 		setUrls({ url: res.url });
				// 	}
				// }}
				type="submit"
				style={{ backgroundColor: `${loading ? "#ccc" : "#3446eb"}` }}
				className="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
				disabled={loading}
			>
				{loading ? "loading..." : "Sign Up"}
			</button>
			<div className="my-4 flex justify-center gap-2">
				<p className="text-base font-light font-mono text-[#FF6100]">Already have an Account?</p>
				<Link href="/login-researcher">
					<p className="underline text-base font-mono text-[#242628] cursor-pointer">Sign in</p>
				</Link>
			</div>
		</form>
	);
};
