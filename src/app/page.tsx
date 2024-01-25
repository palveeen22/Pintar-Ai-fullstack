"use client";

import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

// import required modules
import Link from "next/link";
import LoadToTop from "../../helpers/utils/LoadToTop";
import { Fragment } from "react";
import { JournalWithResearcher } from "./type-def";
import DateChnage from "../../helpers/utils/DateChange";
import PostChange from "../../helpers/utils/PostChange";

export default function Home() {
	const router = useRouter();
	const [journal, setJournal] = useState([] as JournalWithResearcher[]);
	const fetchData = async () => {
		try {
			const response = await fetch("http://localhost:3000/api/journals");

			if (!response.ok) {
				throw new Error("Failed fetching data");
			}

			const responseJSON = await response.json();
			console.log(responseJSON);

			setJournal(responseJSON);
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
		<Fragment>
			{/* layer 1  */}
			<div className="bg-[#242628] min-h-screen">
				<div className="relative">
					<img
						src="https://images.openai.com/blob/47e8bf4c-ffd5-4b80-b481-568ed1329f97/stangel-2022-1598.jpg?trim=0,0,0,0&width=3200"
						alt="Background object-cover"
					/>
					<div className="absolute top-0 bottom-0 h-full w-full bg-[#252525] cursor-pointer opacity-75"></div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-center text-white w-[70%] flex flex-col gap-12">
						<p className="text-4xl font-mono font-semibold w-full text-left">
							Create a one-click journal that is useful for educating and
							developing humans
						</p>
						{/* <Link href="/about-us"> */}
						<button
							className="border flex justify-center items-center gap-2 bg-transparent border-[#fff] py-3 px-2 rounded-lg text-[#fff] cursor-pointer font-mono hover:bg-[#fff] hover:text-[#000] w-[25%]"
							// onClick={LoadToTop}
							onClick={() => {
								router.push("/about-us");
								LoadToTop();
							}}
						>
							<p className="text-sm font-semibold font-mono">
								Learn about Pintar Ai.
							</p>
							<Icon icon="tabler:arrow-up-right" width={20} />
						</button>
						{/* </Link> */}
					</div>
				</div>

				{/* <div className="paddingX ">
					<div className="w-full flex justify-center border-x border-b border-[#000]">
						<div className="w-[50%] flex justify-between items-center">
							<div className="p-4 flex flex-col justify-between gap-8">
								<div className="flex flex-col justify-around  gap-4 text-base text-white">
									<h3 className="text-3xl font-mono text-left font-semibold">
										Everything you need is here..
									</h3>
								</div>
								<p className="text-[#fff] font-mono text-sm">
									Committed to advancing research for the collective welfare,
									with a focus on prioritizing the health and prosperity of
									humanity and the environment.
								</p>
								<Link href="/about-us">
									<button
										className="mr-auto border flex items-center gap-2 bg-[#fff] py-3 px-2 rounded-lg text-[#000] cursor-pointer font-mono transition-transform duration-300 hover:transform translate-y-[-3px]"
										onClick={LoadToTop}
									>
										<p className="text-sm">Learn about Pintar Scholar</p>
										<Icon icon="tabler:arrow-up-right" width={20} />
									</button>
								</Link>
							</div>
						</div>
						<div className="w-[50%]">
							<div className="relative flex flex-col justify-center">
								<img src="https://images.openai.com/blob/47e8bf4c-ffd5-4b80-b481-568ed1329f97/stangel-2022-1598.jpg?trim=0,0,0,0&width=3200" />
								<div className="absolute top-0  bottom-0 h-full w-full bg-[#252525] cursor-pointer opacity-50"></div>
							</div>
						</div>
					</div>
				</div> */}
			</div>

			{/* layer 2  */}
			<div className="bg-[#E2E4DD]">
				<div className="w-full flex paddingX paddingYShorter  border border-[#000] border-x paddingX">
					<div className="w-[30%] items-center">
						<h3 className="font-mono text-5xl">Our main features</h3>
					</div>
					<div className="w-[70%]">
						<p className="font-mono text-xl">
							Create instant journals, a powerful tool to educate and nurture
							human growth with just one click, and connect you with project
							owners for growth and life development.
						</p>
					</div>
				</div>
				<div className="w-full flex paddingX border-b border-[#000] border-x paddingX">
					<div className="w-full flex justify-center border-x border-[#000]">
						<div className="w-[35%] flex flex-col">
							{/* <img
								src="https://www.mux.com/_next/static/media/player-default.f8e6da8b.svg"
								className="bg-[#000]"
							/> */}
							<div className="border-b border-[#000] h-[5rem] flex justify-start items-center bg-[#0072e3] gap-4 px-4">
								<Icon
									icon="material-symbols-light:upload"
									width={50}
									color="#fff"
								/>
								<p className="text-xl font-mono font-thin text-[#fff]">
									Upload Journal
								</p>
							</div>
							<div className="border-b border-[#000] h-[5rem] flex justify-start items-center gap-4 px-4">
								<Icon icon="ph:projector-screen-chart-thin" width={50} />
								<p className="text-xl font-mono font-thin">
									Contribute Project
								</p>
							</div>
							<div className="border-b border-[#000] h-[5rem] flex justify-start items-center gap-4 px-4">
								<Icon icon="arcticons:samsung-finder" width={50} />
								<p className="text-xl font-mono font-thin">Find Journals</p>
							</div>
						</div>
						<div className="w-[65%]">
							<div className="relative flex flex-col justify-center">
								<img
									src="https://images.openai.com/blob/971cb9d4-66e4-46b0-95d8-f3b57931b08e/stangel-2022-0052.jpg?trim=0,0,0,0&width=3200"
									className="h-[40rem] object-cover"
								/>
								<div className="absolute top-0  bottom-0 h-full w-full bg-[#252525] cursor-pointer opacity-50"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* layer 3 */}
			<div className="bg-[#E2E4DD] p-6">
				<Swiper
					cssMode={true}
					navigation={true}
					pagination={true}
					mousewheel={true}
					keyboard={true}
					modules={[Navigation, Pagination, Mousewheel, Keyboard]}
					className="mySwiper"
				>
					{journal
						?.map((e) => {
							return (
								<SwiperSlide>
									<div className="mx-auto border border-[#000] w-[80%] rounded-3xl flex flex-col">
										<div className="bg-[#FFB200] rounded-t-3xl py-3 border-b border-[#000]">
											<p className="text-[#000] text-center font-mono">
												Journals
											</p>
										</div>

										<div className="w-full flex justify-center items-center py-14">
											<div className="w-[60%] mx-auto flex flex-col gap-4">
												<p className="font-mono text-[#565e67]">
													{DateChnage(e?.createdAt)}
												</p>
												<h1 className="text-5xl">{e?.title}</h1>
												{e?.portofolio?.map((el) => {
													return (
														<div className="flex justify-start items-center gap-4">
															<img
																src={el?.profileImage}
																className="h-14 w-14 rounded-full object-cover"
																alt="Author"
															/>
															<p className="text-base font-mono">
																<span className="text-[#565e67] text-sm">
																	BY
																</span>{" "}
																{el?.firstname} {el?.lastname}
															</p>
															<span className="text-[#565e67]">•</span>
															<p className="font-mono text-[#565e67] text-sm">
																{PostChange(el?.createdAt)}
															</p>
															<span className="text-[#565e67]">•</span>
															<p className="text-base font-mono">
																{el?.background.toUpperCase()}
															</p>
														</div>
													);
												})}
											</div>
										</div>
									</div>
								</SwiperSlide>
							);
						})
						.slice(0, 5)}
				</Swiper>
			</div>
			{/* <div className="bg-[#242628] min-h-screen">x</div> */}
			<div className="bg-[#FF6100] paddingYShorter paddingX flex justify-around flex-col items-center gap-4">
				<button className="relative bg-[#242628] text-[#fff] font-mono w-[60%] mx-auto text-6xl overflow-hidden rounded-full hover:rounded-lg p-4">
					<span className="z-10 relative">Start to Join</span>
				</button>
				{/* <img
					src="https://www.mux.com/_next/static/media/player-default.f8e6da8b.svg"
					className="bg-[#000]"
				/> */}
				<p className="text-2xl font-mono">
					Try to contribute to change the word, start from here!
				</p>
			</div>
		</Fragment>
	);
}
