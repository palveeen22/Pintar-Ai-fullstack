"use client";
import { Project, Researchers } from "@/app/type-def";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { formatDate } from "../../../../helpers/utils/formatDate";

const ProjectDetail = ({ params }: { params: { slug: string } }) => {
	const projectName = params.slug;
	const [projectData, setProjectData] = useState<Project | null>(null);
	const [researchersData, setResearchersData] = useState<Researchers[] | null>(
		null
	);

	const fetchData = async () => {
		try {
			const response = await fetch(
				`http://localhost:3000/api/projects/${projectName}`
			);
			if (!response.ok) {
				throw new Error("Failed fetching data");
			}
			const responseJSON = await response.json();
			console.log(responseJSON, "<<<<< Response JSON");

			setProjectData(responseJSON.project);
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			} else {
				console.log(error);
			}
		}
	};

	const fetchDataResearcher = async () => {
		try {
			const response = await fetch(
				`http://localhost:3000/api/projects/${projectName}`
			);
			if (!response.ok) {
				throw new Error("Failed fetching data");
			}
			const responseJSON = await response.json();
			console.log(responseJSON, "<<<<< Response JSON");

			setResearchersData(responseJSON.researchers);
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			} else {
				console.log(error);
			}
		}
	};

	useEffect(() => {
		fetchData();
		fetchDataResearcher();
	}, []);

	const rupiah = (number: any) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	};

	const handleButtonClick = async (email: string) => {
		// console.log(email, "<<< WKOAKWOKA");

		try {
			const response = await fetch(
				`http://localhost:3000/api/projects/email/${email}`
			);
			if (!response.ok) {
				throw new Error("Failed fetching data");
			}
			const responseJSON = await response.json();
			console.log(responseJSON, "<<<<< Response JSON");

			setResearchersData(responseJSON.email);
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			} else {
				console.log(error);
			}
		}

		// Lakukan sesuatu saat tombol diklik, misalnya menampilkan email atau menjalankan tindakan tertentu
	};

	// const DateChange = (dateString: string): string => {
	// 	const date = parseISO(dateString);
	// 	const formattedDate = format(date, "MMMM d, yyyy");

	// 	return `${formattedDate}`;
	// };

	// console.log(researchersData, "tes lgi cuk");

	return (
		<>
			<section className="overflow-hidden bg-white py-11 font-poppins">
				<div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
					<div className="flex flex-wrap -mx-4">
						<div className="w-full mb-8 md:w-1/2 md:mb-0">
							<div className="sticky top-0 z-50 overflow-hidden">
								<div className="relative mb-6 lg:mb-10 lg:h-2/4">
									<img
										src={projectData?.project_image}
										alt=""
										className="object-cover w-full lg:h-full"
									/>
								</div>
								<div className="px-6 pb-6 mt-6 border-t border-gray-300 dark:border-gray-400">
									<div className="flex flex-wrap items-center mt-6">
										<h2 className="text-lg font-bold text-gray-700 dark:text-gray-400">
											{projectData?.tags}
										</h2>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full px-4 md:w-1/2">
							<div className="lg:pl-20">
								<div className="mb-8">
									<h2 className="max-w-xl mb-6 text-2xl font-bold font-mono md:text-4xl">
										{projectData?.project_name}
									</h2>
									<div className="inline-block mb-6 text-4xl font-bold text-gray-700">
										<p className="font-mono ">Project Budget </p>
										<p className="text-base font-normal font-mono  text-gray-500 dark:text-gray-400">
											{rupiah(projectData?.project_budget)}
										</p>
									</div>
									<p className="max-w-md text-gray-700 font-mono ">
										{projectData?.description_project}
									</p>
								</div>
								<div className="mb-8 flex flex-col gap-2">
									<h2 className="w-full pb-1 mb-4 text-sm border-b border-blue-300 dark:text-gray-400 dark:border-gray-600 font-mono ">
										Starting Date
									</h2>
									<div className="flex flex-wrap -mx-2 -mb-2">
										<p className="p-1 mb-2 mr-3 font-mono ">
											{formatDate(projectData?.starting_date)}
										</p>
									</div>
									<h2 className="w-full pb-1 mb-4 text-sm font-bold border-b border-blue-300 dark:text-gray-400 dark:border-gray-600 font-mono ">
										Expected Finish Date
									</h2>
									<div className="flex flex-wrap -mx-2 -mb-2">
										<p className="p-1 mb-2 mr-3 font-mono ">
											{formatDate(projectData?.expected_finish_date)}
										</p>
									</div>
									<h2 className="w-full pb-1 mb-4 text-sm font-bold border-b border-blue-300 dark:text-gray-400 dark:border-gray-600 font-mono ">
										Progres persentage :
									</h2>
									<ProgressBar
										completed={18}
										bgColor="#0096FF"
										height="13px"
										labelSize="10px"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="paddingX paddingY flex flex-col gap-4">
					<h3 className="font-mono">
						List recomendation researcher for your projects :
					</h3>
					<table>
						<thead>
							<tr>
								<th className="font-mono">Email</th>
								<th className="font-mono">Reseracher Name</th>
								<th className="font-mono">Education</th>
								<th></th>
							</tr>
						</thead>
						<tbody className="text-center">
							{researchersData?.map((researchers) => (
								<tr key={researchers?.id}>
									<td className="font-mono">{researchers?.email}</td>
									<td className="font-mono ">
										{researchers?.firstname} {researchers?.lastname}
									</td>
									<td className="font-mono ">{researchers?.education}</td>
									<td>
										<button
											onClick={() => handleButtonClick(researchers?.email)}
										>
											<span className="flex justify-center gap-4 items-center">
												<p className="font-mono hover:underline">
													Send Email Request
												</p>
												<Icon icon="formkit:email" width={20} />
											</span>
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
		</>
	);
};

export default ProjectDetail;
