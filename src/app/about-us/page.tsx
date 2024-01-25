"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const AboutPage = () => {
	return (
		<section className="flex flex-col gap-4">
			<div className="paddingX paddingYShorter bg-[#0000ff] ">
				<Link href="/">
					<div className="m-4 flex justify-end gap-2 items-center cursor-pointer">
						<Icon icon="ep:back" width={30} color="#fff" />
						<p className="text-xl font-mono text-[#fff] hover:underline">
							Back to Home Page
						</p>
					</div>
				</Link>
				<div className="paddingY flex flex-col">
					<div className="w-full flex justify-center gap-4">
						<h1 className="text-[#fff] text-4xl font-mono">
							Transforming researchs and creativity with AI
						</h1>
						<p className="text-[#fff] text-xl font-mono">
							Our API platform offers our latest models and guides for safety
							best practices.
						</p>
					</div>
				</div>
				<div className="relative">
					<img
						src="https://images.openai.com/blob/557a9f70-0bf6-4d72-91c6-5bc5423ad462/stangel-2022-0602.jpg?trim=90,0,630,0&width=3200"
						className="rounded-3xl"
					/>
					<div className="absolute top-0 bottom-0 h-full w-full bg-[#252525] opacity-75 rounded-3xl"></div>
				</div>
			</div>
			<div className="bg-[#fff] paddingX paddingYShorter flex flex-col gap-5">
				<div className="border-b"></div>
				<div className="my-8 flex flex-col gap-4">
					<h3 className="font-mono font-light">
						" Safely aligning powerful AI systems is one of the most important
						unsolved problems for our mission. Techniques like learning from
						human feedback are helping us get closer, and we are actively
						researching new techniques to help us fill the gaps. "
					</h3>
					<span className="font-mono font-semibold flex flex-col">
						Josh Achiam
						<span className="font-light">Researcher at OpenAI</span>
					</span>
				</div>
				<div className="border-b border-[#000]"></div>
				<div className="w-full flex my-8">
					<div className="w-[50%]">
						<h3 className="font-mono font-light text-5xl">Focus areas</h3>
					</div>
					<div className="w-[50%]">
						<p className="font-mono text-xl text-left">
							We build our generative models using a technology called deep
							learning, which leverages large amounts of data to train an AI
							system to perform a task.
						</p>
					</div>
				</div>
				<div className="border-b border-[#000]"></div>
				<div className="w-full flex flex-col gap-8 my-8">
					<h3 className="font-mono font-light text-6xl">
						Explore all research.
					</h3>
					<button className="border border-[#000] rounded-lg py-5 text-2xl bg-transparent font-mono hover:bg-black hover:text-[#fff]">
						View all Journals
					</button>
				</div>
				<div className="border-b border-[#000]"></div>
			</div>
		</section>
	);
};

export default AboutPage;