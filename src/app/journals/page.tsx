"use client";
import React, { useEffect, useState } from "react";
import JournalCard from "../components/JournalCard";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { JournalWithResearcher, Journals } from "../type-def";
import InfiniteScroll from "react-infinite-scroll-component";
import DateChnage from "../../../helpers/utils/DateChange";

const JournalPage = () => {
	const [journal, setJournal] = useState([] as JournalWithResearcher[]);
	const [search, setSearch] = useState("");
	const [filteredJournal, setFilteredJournal] = useState(
		[] as JournalWithResearcher[]
	);
	const [page, setPage] = useState<number>(1);

	const fetchData = async () => {
		try {
			const response = await fetch("http://localhost:3000/api/journals");

			if (!response.ok) {
				throw new Error("Failed fetching data");
			}

			const responseJSON = await response.json();
			console.log(responseJSON);

			setJournal(responseJSON);
			setFilteredJournal(responseJSON);
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			} else {
				console.log(error);
			}
		}
	};




	///////

	useEffect(() => {
		fetchData();
	}, []);

	const handleSearch = () => {
		const filtered = journal.filter((jur) =>
			jur.title.toLowerCase().includes(search.toLowerCase())
		);
		setFilteredJournal(filtered);
	};
	const loadMore = async () => {
		const nextPage = page + 1;
		setPage(nextPage);
	};
	return (
		<section className="min-h-screen bg-[#E2E4DD]">
			<div className="paddingX border-x border-[#000]">
				<div className="w-full flex justify-center border-x border-[#000] h-80">
					<div className="flex flex-col justify-center items-center gap-2">
						<h1 className="font-mono font-light">List of Journals</h1>
						<p className="w-[70%] text-center font-mono text-base">
							We're a team of engineers, marketers, designers, all passionate
							about video and the work we create together. Welcome to our blog
							about video.
						</p>
						<Link href="/researcher">
							<button className="bg-[#FFB200] px-10 border py-3.5 rounded-full font-mono text-[#000]">
								<span className="flex justify-between items-center gap-2">
									See All By Researchers
									<Icon icon="ph:arrow-up-right-thin" width={30} />
								</span>
							</button>
						</Link>
					</div>
				</div>
			</div>
			<InfiniteScroll
				dataLength={journal.length}
				next={loadMore}
				hasMore={true}
				loader={<></>}
			>
				<div className="paddingX border-x border-t border-b border-[#000]">
					<div className="w-full flex justify-end items-center border-x border-[#000] h-32 px-4">
						<div className="w-[60%] flex justify-end items-center">
							<input
								type="text"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								className="rounded-l-full w-full border h-14 px-4 transition-colors duration-300 focus:border-[#FFB200] placeholder:font-mono placeholder:text-sm"
								placeholder="Find journals here..."
							/>
							<button
								onClick={handleSearch}
								className="bg-[#0072E3] px-4 py-3.5 rounded-r-full font-mono text-[#000] cursor-pointer"
							>
								Find
							</button>
						</div>
					</div>
				</div>
				{/* <div className="paddingX border-x border-t border-[#000]">
					{filteredJournal?.map((jur) => (
						<Link key={jur.id} href={`/journals/${jur?.title}`}>
							<JournalCard key={jur.id} data={jur} />
						</Link>
					))}
				</div> */}
				{filteredJournal?.map((jur) => (
					<div className="paddingX border-x border-b border-[#000]">
						<div className="w-full border-x border-[#000] cursor-pointer flex justify-between items-center px-4 py-3">
							<p className="w-[30%] font-mono text-[#565e67]">
								{DateChnage(jur?.createdAt)}
							</p>
							<h1 className="w-[30%] text-xl text-left">{jur?.title}</h1>
							<p className="w-[30%]  text-center text-base font-mono">
								{jur?.keywords.toUpperCase()}
							</p>
							<Link key={jur?.id} href={`/journals/${jur?.title}`}>
								<div className="flex hover:underline items-center gap-2">
									<p className="text-base font-light font-mono">Read paper</p>
									<Icon icon="tabler:arrow-up-right" width={20} />
								</div>
							</Link>
						</div>
					</div>
				))}
			</InfiniteScroll>
		</section>
	);
};

export default JournalPage;