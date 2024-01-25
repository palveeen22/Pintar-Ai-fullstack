"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { JournalWithResearcherDetails } from "@/app/type-def";
import TimeChange from "../../../../helpers/utils/TimeChange";
import DateChnage from "../../../../helpers/utils/DateChange";

const JournalDetail = ({ params }: { params: { slug: string } }) => {
	const journalName = params.slug;
	// console.log(journalName);
	const [journalData, setJournalData] =
		useState<JournalWithResearcherDetails | null>(null);

	const fetchData = async () => {
		try {
			const response = await fetch(
				`http://localhost:3000/api/journals/${journalName}`
			);

			if (!response.ok) {
				throw new Error("Failed fetching data");
			}

			const responseJSON = await response.json();
			console.log(responseJSON);

			setJournalData(responseJSON);
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

	const openPdfInNewWindow = (data: string) => {
		const pdfUrl = data;

		// Open the PDF in a new window
		window.open(pdfUrl, "_blank");
	};

	// console.log(journalData, "zzz");

	return (
		<div className="bg-[#f4f6f4] paddingX paddingYShorter">
			<Link href="/journals">
				<div className="m-4 flex justify-end gap-2 items-center cursor-pointer">
					<Icon icon="ep:back" width={30} color="#000" />
					<p className="text-xl font-mono text-[#000] hover:underline">
						Back to Lists
					</p>
				</div>
			</Link>
			<div className="paddingX paddingY bg-[#fff] min-h-screen border">
				<div
					className="w-[60%] mx-auto flex flex-col gap-4"
					key={journalData?.id}
				>
					<p className="font-mono text-[#565e67]">
						{journalData ? DateChnage(journalData.createdAt) : null}
					</p>
					<h1 className="text-5xl">{journalData?.title}</h1>
					{journalData?.portofolio?.map((e, i) => {
						return (
							<div className="flex justify-start items-center gap-4" key={i}>
								<img
									src={e?.profileImage}
									className="h-10 w-10 rounded-full object-cover"
									alt="researcher"
								/>
								<p className="text-base font-mono">
									<span className="text-[#565e67] text-sm">BY</span>{" "}
									{e?.firstname} {e?.lastname}
								</p>
								<span className="text-[#565e67]">•</span>
								<p className="font-mono text-[#565e67] text-sm">
									{TimeChange(e?.createdAt)}
								</p>
								<span className="text-[#565e67]">•</span>
								<p className="text-base font-mono">
									{e?.background.toUpperCase()}
								</p>
							</div>
						);
					})}
				</div>
				<div className="border-b my-8 w-[70%] mx-auto"></div>
				<div className="paddingX flex flex-col justify-center gap-4 items-center">
					<h3>Abstract : </h3>
					<p className="text-[#565e67] text-3xl text-justify">
						{journalData?.abstract}
					</p>
					<button
						className="font-mono  hover:underline text-base bg-[#565e67] text-[#fff] px-4 py-1 rounded-xl my-6"
						onClick={() => openPdfInNewWindow(journalData?.journal_file)}
					>
						Open PDF in New Window
					</button>
				</div>
			</div>
		</div>
	);
};

export default JournalDetail;
