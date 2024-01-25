"use client";
import JournalCard from "@/app/components/JournalCard";
import React, { useEffect, useState } from "react";
import { ResearcherJournal } from "@/app/type-def";
import Link from "next/link";
import DateChnage from "../../../../helpers/utils/DateChange";

const page = ({ params }: { params: { id: number } }) => {
	const researcherId = params.id;
	const [researcherDetail, setResearcherDetail] =
		useState<ResearcherJournal | null>(null);

	const fetchData = async () => {
		try {
			const response = await fetch(
				`http://localhost:3000/api/researchers/${researcherId}`
			);

			if (!response.ok) {
				throw new Error("Failed fetching data");
			}

			const responseJSON = await response.json();

			setResearcherDetail(responseJSON);
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
	}, []);
	return (
		<section className="w-full bg-[#E2E4DD] flex">
			<div className="w-[30%]  paddingXShorter2 paddingYShorter2 flex flex-col items-center gap-4">
				<img
					src={researcherDetail?.profileImage}
					className=" w-60 h-60 rounded-full object-cover"
					alt="researcher"
				/>
				<div className="text-center">
					<p className="text-base font-mono">
						{researcherDetail?.firstname} {researcherDetail?.lastname}
					</p>
					<p className="text-base font-mono">
						{researcherDetail?.jabatan_akademik}
					</p>
					<p className="text-base font-mono">{researcherDetail?.email}</p>
					<p className="text-base font-mono">{researcherDetail?.location}</p>
				</div>
			</div>
			<div className="w-[70%] flex flex-col">
				{researcherDetail?.portofolio?.map((e) => {
					return (
						<div
							className="w-full border-x border-[#000] cursor-pointer"
							key={e?.id}
						>
							<div className="border-[#000] border-b h-48 flex justify-start gap-8 p-4 hover:bg-[#fff]">
								<img src="https://wp-pdf.com/wp-content/uploads/2021/07/pdf-image.png" />
								<div className="w-[40%] flex flex-col gap-4">
									<p className="font-mono text-[#565e67]">
										{/* NOVEMBER 27, 2023 (ABOUT 2 MONTHS AGO) */}
										{DateChnage(e?.createdAt)}
									</p>
									<Link href={`/journals/${e?.title}`}>
										<h1 className="text-xl font-mono hover:underline">
											{e?.title}
										</h1>
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default page;
