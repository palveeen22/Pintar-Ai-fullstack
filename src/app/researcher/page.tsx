"use client";
import React, { useEffect, useState } from "react";
import ReseacrcherCard from "../components/ReseacrcherCard";
import Link from "next/link";
import { ResearcherJournal } from "../type-def";

const ResearchersPage = () => {
	const [researcher, setResearcher] = useState([] as ResearcherJournal[]);
	const fetchData = async () => {
		try {
			const response = await fetch("http://localhost:3000/api/researchers");

			if (!response.ok) {
				throw new Error("Failed fetching data");
			}

			const responseJSON = await response.json();
			console.log(responseJSON);

			setResearcher(responseJSON);
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
		<section className="min-h-screen bg-[#E2E4DD]">
			<div className="paddingX border-x border-[#000] bg-[#ffb200]">
				<div className="w-full flex justify-center border-x border-[#000] h-80">
					<div className="flex flex-col justify-center items-center gap-2">
						<h1 className="font-mono font-light">List of Researchers</h1>
						<p className="w-[70%] text-center font-mono text-base">
							The Mux team has created some of the most respected products and
							communities in video today.
						</p>
					</div>
				</div>
			</div>
			<div className="paddingX border-x  border-t border-[#000]">
				<div className="w-full flex justify-center items-center border-x border-[#000] h-32 px-4">
					<div className="w-[60%] flex justify-end items-center">
						<button className="bg-[#242628] px-8 py-3.5 rounded-l-full font-mono text-[#fff]">
							FILTER BY CATEGORY :
						</button>
						<input
							className="rounded-r-full w-[60%] border h-14 px-4 transition-colors duration-300 focus:border-[#FFB200] placeholder:font-mono placeholder:text-sm"
							placeholder="Find journals here..."
						/>
						{/* <CategoryInput /> */}
					</div>
				</div>
			</div>
			<div className="paddingX border-x  border-t border-[#000]">
				<div className="w-full border-x border-[#000]">
					<div className="grid grid-cols-4">
						{researcher?.map((researcher) => {
							return (
								<Link href={`/researcher/${researcher?.id}`}>
									<ReseacrcherCard data={researcher} />
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ResearchersPage;
