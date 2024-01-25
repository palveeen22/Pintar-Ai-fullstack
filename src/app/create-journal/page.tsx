"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const UploadPdf = () => {
	const router = useRouter();
	const [pdf, setPdf] = useState<File>();
	const [isLoading, setIsLoading] = useState(false); // State untuk menangani status loading

	// const updatePDF = async () => {
	// 	const body = new FormData();
	// 	if (pdf) body.append("pdf", pdf);

	// 	const res = await fetch("http://localhost:3000/api/pdf", {
	// 		method: "POST",
	// 		body: body,
	// 	});

	// 	router.push("/welcome-researcher", { scroll: false });
	// };

	const updatePDF = async () => {
		try {
			setIsLoading(true); // Mengubah status loading menjadi true saat permintaan dimulai

			const body = new FormData();
			if (pdf) body.append("pdf", pdf);

			const res = await fetch("http://localhost:3000/api/pdf", {
				method: "POST",
				body: body,
			});

			router.push("/welcome-researcher", { scroll: false });
		} catch (error) {
		} finally {
			setIsLoading(false); // Mengubah status loading menjadi false setelah permintaan selesai
		}
	};

	return (
		<>
			{isLoading && (
				<p className="text-3xl font-mono text-center flex justify-center items-center">
					Loading...
				</p>
			)}
			<div className="min-h-screen flex justify-center items-center  flex-col">
				<h3 className="font-mono m-4">
					Enjoy our Ai feature, just one click and create your journal...
				</h3>

				<form
					className="text-[#000000"
					onSubmit={(e) => {
						e.preventDefault();
						updatePDF();
						// setRefresh(!refresh);
						// router.refresh();
					}}
				>
					<div className="grid grid-cols-1 space-y-2">
						<label className="text-sm font-mono text-gray-500 tracking-wide text-center">
							Attach Document
						</label>
						<div className="flex items-center justify-center w-full">
							<label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
								<div className="h-full w-full text-center flex flex-col  justify-center items-center  ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
										/>
									</svg>
									<div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
										<img
											className="has-mask h-30 object-center"
											src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
											alt="freepik image"
										/>
									</div>
									<p className="pointer-none text-gray-500 ">
										<span className="text-sm">Drag and drop</span> files here{" "}
										<br /> or
										<a className="text-blue-600 hover:underline">
											select a file
										</a>
										from your computer
									</p>
								</div>
								<input
									type="file"
									className="hidden"
									accept="pdf/*"
									onChange={(e) => {
										e.target.files && setPdf(e.target.files[0]);
									}}
								/>
							</label>
						</div>
					</div>
					<p className="text-sm text-gray-300">
						<span>File type: doc,pdf,types of images</span>
					</p>
					<button
						type="submit"
						className="text-white bg-[#3CB371] font-mono rounded-lg mx-auto text-sm w-[70%] px-5 py-2.5 block m-4"
					>
						Submit
					</button>
				</form>
				<Link href="/welcome-researcher">
					<div className="m-4 flex justify-end gap-2 items-center cursor-pointer">
						<Icon icon="ep:back" width={30} color="#000" />
						<p className="text-xl font-mono text-[#000] hover:underline">
							Back to Lists
						</p>
					</div>
				</Link>
			</div>
		</>
	);
};

export default UploadPdf;

// <div>
// 	<h1>Upload PDF</h1>
// 	<form
// 		onSubmit={(e) => {
// 			e.preventDefault();
// 			updatePDF();
// 			// setRefresh(!refresh);
// 			// router.refresh();
// 		}}
// 		encType="multipart/form-data"
// 	>
// 		<input
// 			type="file"
// 			onChange={(e) => {
// 				e.target.files && setPdf(e.target.files[0]);
// 			}}
// 			className="file-input file-input-sm file-input-ghost w-full max-w-xs"
// 		/>
// 		{/* <input type="file" accept=".pdf" onChange={handleFileChange} /> */}
// 		<button type="submit">Upload</button>
// 	</form>
// 	{answer && <p>Extracted Text: {answer}</p>}
// </div>
