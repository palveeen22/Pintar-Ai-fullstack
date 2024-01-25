// // "use client";
// // import { useState, ChangeEvent, FormEvent } from "react";

// // const Upload = () => {
// // 	const [file, setFile] = useState<File | null>(null);

// // 	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
// // 		const selectedFile = e.target.files && e.target.files[0];
// // 		setFile(selectedFile || null);
// // 	};

// // 	const handleFormSubmit = async (e: FormEvent) => {
// // 		e.preventDefault();

// // 		if (file) {
// // 			try {
// // 				// Create a FormData object to send the file
// // 				const formData = new FormData();
// // 				formData.append("pdfFile", file);

// // 				// Send the file to the server using fetch or axios
// // 				const response = await fetch("/api/ask", {
// // 					method: "POST",
// // 					body: formData,
// // 				});

// // 				if (response.ok) {
// // 					console.log("File uploaded successfully!");
// // 				} else {
// // 					console.error("File upload failed.");
// // 				}
// // 			} catch (error) {
// // 				console.error("Error uploading file:", error);
// // 			}
// // 		} else {
// // 			console.log("Please select a file.");
// // 		}
// // 	};

// // 	return (
// // 		<div>
// // 			<h1>Upload PDF</h1>
// // 			<form onSubmit={handleFormSubmit} encType="multipart/form-data">
// // 				<div>
// // 					<label htmlFor="pdfFile">Select PDF file:</label>
// // 					<input
// // 						type="file"
// // 						id="pdfFile"
// // 						name="pdfFile"
// // 						accept=".pdf"
// // 						onChange={handleFileChange}
// // 					/>
// // 				</div>
// // 				<button type="submit">Upload</button>
// // 			</form>
// // 		</div>
// // 	);
// // };

// // export default Upload;

// "use client";
// import { useState } from "react";

// const YourComponent = () => {
// const [answer, setAnswer] = useState<string | null>(null);

// const handleSubmit = async (question: string) => {
// 	try {
// 		const formData = new FormData();
// 		formData.append("question", question);

// 		const response = await fetch("http://localhost:3000/api/ask", {
// 			method: "POST",
// 			headers: {},
// 			body: formData,
// 		});

// 		if (!response.ok) {
// 			throw new Error(`HTTP error! Status: ${response.status}`);
// 		}

// 		const data = await response.json();
// 		setAnswer(data.title);
// 	} catch (error) {
// 		console.error("Error fetching data:", error);
// 	}
// };

// 	const [title, setTitle] = useState<string | null>(null);
// 	const [descricption, setDescription] = useState<string | null>(null);

// 	const handleSubmit = async (question: string) => {
// 		try {
// 			const formData = new FormData();
// 			formData.append("question", question);

// 			const response = await fetch("http://localhost:3000/api/ask", {
// 				method: "POST",
// 				headers: {},
// 				body: formData,
// 			});

// 			if (!response.ok) {
// 				throw new Error(`HTTP error! Status: ${response.status}`);
// 			}

// 			const data = await response.json();
// 			setTitle(data.judul);
// 			setDescription(data.deskripsi);
// 		} catch (error) {
// 			console.error("Error fetching data:", error);
// 		}
// 	};

// 	// Example usage
// 	const handleQuestionSubmit = () => {
// 		//disini harunsya upload pdf
// 		const userQuestion =
// 			"Tolong berikan saya HANYA judul dan deskripsi unutk abstract dari tema berikut,  PERTANIAN"; // Replace with actual user input
// 		handleSubmit(userQuestion);
// 	};
// 	return (
// 		<div className="min-h-screen flex justify-center items-center  flex-col">
// 			<h3 className="font-mono">
// 				Enjoy our Ai feature, just one click and create your journal...
// 			</h3>

// 			<form
// 				className="text-[#000000"
// 				// onSubmit={handleUpload}
// 			>
// 				<div className="grid grid-cols-1 space-y-2">
// 					<label className="text-sm font-bold text-gray-500 tracking-wide">
// 						Attach Document
// 					</label>
// 					<div className="flex items-center justify-center w-full">
// 						<label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
// 							<div className="h-full w-full text-center flex flex-col  justify-center items-center  ">
// 								<svg
// 									xmlns="http://www.w3.org/2000/svg"
// 									className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
// 									fill="none"
// 									viewBox="0 0 24 24"
// 									stroke="currentColor"
// 								>
// 									<path
// 										stroke-linecap="round"
// 										stroke-linejoin="round"
// 										stroke-width="2"
// 										d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
// 									/>
// 								</svg>
// 								<div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
// 									<img
// 										className="has-mask h-30 object-center"
// 										src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
// 										alt="freepik image"
// 									/>
// 								</div>
// 								<p className="pointer-none text-gray-500 ">
// 									<span className="text-sm">Drag and drop</span> files here{" "}
// 									<br /> or
// 									<a className="text-blue-600 hover:underline">select a file</a>
// 									from your computer
// 								</p>
// 							</div>
// 							<input
// 								type="file"
// 								className="hidden"
// 								accept="pdf/*"
// 								// id="file-upload"
// 								// name="file-upload"
// 								// onChange={inputOnChangeHandler}
// 							/>
// 						</label>
// 					</div>
// 				</div>
// 				<p className="text-sm text-gray-300">
// 					<span>File type: doc,pdf,types of images</span>
// 				</p>
// 				<button
// 					type="submit"
// 					className="text-white bg-[#3CB371] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
// 				>
// 					Submit
// 				</button>
// 			</form>
// 			<button
// 				onClick={handleQuestionSubmit}
// 				className="hover:underline font-mono text-[#000]"
// 			>
// 				Submit Question
// 			</button>
// 			{title && (
// 				<div className="paddingX paddingY flex flex-col gap-4">
// 					<p className="font-mono">Judul : {title}</p>
// 					<p className="font-mono">Description : {descricption}</p>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default YourComponent;

// const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// 	const selectedFile = event.target.files && event.target.files[0];
// 	setFile(selectedFile || null);
// };

// const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
// 	event.preventDefault();
// 	if (file) {
// 		try {
// 			const formData = new FormData();
// 			formData.append("file", file);

// 			console.log(formData, "<nih");

// 			// Adjust the endpoint if needed
// 			const response = await fetch("http://localhost:3000/api/ask", {
// 				method: "POST",
// 				body: formData,
// 			});

// 			console.log(response, "<<<<");
// 			if (response.ok) {
// 				const data = await response.json();
// 				setAnswer(data.text); // Assuming the server returns the extracted text
// 			} else {
// 				console.error("Server responded with an error.");
// 			}
// 		} catch (error) {
// 			console.error("Error submitting form:", error);
// 		}
// 	} else {
// 		console.log("Please select a file.");
// 	}
// };
// <div>
// 	<h1>Upload PDF</h1>
// 	<form onSubmit={handleFormSubmit} encType="multipart/form-data">
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
// </div>;

"use client";
import { useState } from "react";

const UploadPdf = () => {
	const [pdf, setPdf] = useState<File>();
	const [answer, setAnswer] = useState<string | null>(null);

	const updatePDF = async () => {
		const body = new FormData();
		if (pdf) body.append("pdf", pdf);

		const res = await fetch("http://localhost:3000/api/pdf", {
			method: "POST",
			body: body,
		});
	};

	return (
		<div>
			<h1>Upload PDF</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					updatePDF();
					// setRefresh(!refresh);
					// router.refresh();
				}}
				encType="multipart/form-data"
			>
				<input
					type="file"
					onChange={(e) => {
						e.target.files && setPdf(e.target.files[0]);
					}}
					className="file-input file-input-sm file-input-ghost w-full max-w-xs"
				/>
				{/* <input type="file" accept=".pdf" onChange={handleFileChange} /> */}
				<button type="submit">Upload</button>
			</form>
			{answer && <p>Extracted Text: {answer}</p>}
		</div>
	);
};

export default UploadPdf;
