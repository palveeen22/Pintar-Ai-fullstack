"use client";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import JournalCard from "../components/JournalCard";
import Link from "next/link";
import { JournalWithResearcher } from "../type-def";
import { useRouter } from "next/navigation";
import ProgressBar from "@ramonak/react-progress-bar";

import { NextRequest } from "next/server";
import { readPayload } from "../../../helpers/lib/jwt";
import PostChange from "../../../helpers/utils/PostChange";
import { formatDate } from "../../../helpers/utils/formatDate";

const WelcomePage = () => {
	const [journal, setJournal] = useState([]);
	const fetchData = async () => {
		try {
			const response = await fetch(
				"http://localhost:3000/api/welcome-investor"
			);

			if (!response.ok) {
				throw new Error("Failed fetching data");
			}

			const responseJSON = await response.json();

			setJournal(responseJSON);
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			} else {
				console.log(error);
			}
		}
	};

	const rupiah = (number: any) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	};

	useEffect(() => {
		fetchData();
	}, []);

	console.log(journal, "<<<<");

	const today = new Date();
	const currentDateTime = today.toLocaleString();
	const [datePart, timePart] = currentDateTime.split(", ");

	return (
		<>
			<section className="paddingXShorter3 paddingYShorter3 w-full flex justify-center gap-2 bg-[#193718] min-h-screen">
				<div className="w-[50%] paddingX paddingY flex justify-center items-center">
					<div className="flex flex-col gap-4">
						<h3 className="text-[#fff] font-mono">Welcome Proners..</h3>
						<p className="text-[#fff] font-mono">
							Our 6-month program is a bridge for brilliant technical
							researchers from diverse fields to transition into AI.
						</p>
						<Link href="/create-project">
							<button className="w-[40%] flex justify-center  hover:bg-[#ff8bff] hover:text-[#000] text-[#ff8bff] border border-[#ff8bff] px-4 py-4 rounded-lg">
								<p className="text-base font-mono">Create Project</p>
							</button>
						</Link>
					</div>
				</div>
				<div className="w-[50%]">
					<div className="flex justify-center items-center gap-2">
						<div className="grid grid-cols-2 gap-4">
							{journal?.Project?.map((el?: any) => {
								return (
									<Link key={el?.id} href={`/projects/${el?.project_name}`}>
										<div className="bg-[#E2E4DD] w-full text-[#000] flex flex-col gap-4 shadow-md rounded-lg px-4 py-2">
											<p className="text-base font-mono">{el?.project_name}</p>
											<p className="text-sm font-mono">
												{el?.description_project}
											</p>
											<ProgressBar
												completed={18}
												bgColor="#0096FF"
												baseBgColor="#FFB200"
												height="13px"
												labelSize="10px"
											/>
										</div>
									</Link>
								);
							})}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default WelcomePage;
