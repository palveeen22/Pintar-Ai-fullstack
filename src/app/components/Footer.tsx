"use client";
import React from "react";
import { FooterItems } from "../constants";
import { Icon } from "@iconify/react";

const Footer = () => {
	return (
		<section className="paddingX paddingYShorter border-t border-[#000] bg-[#252525]">
			<div className="w-full flex justify-around gap-2">
				<div className="w-[20%] flex flex-col gap-4">
					<p className="font-semibold text-[#fff]">Categories</p>
					{FooterItems[0].map((e, i) => (
						<p
							className="text-[#fff] text-sm font-light cursor-pointer hover:underline"
							key={i}
						>
							{e}
						</p>
					))}
				</div>
				<div className="w-[20%] flex flex-col gap-4">
					<p className="font-semibold text-[#fff]">About</p>
					{FooterItems[1].map((e, i) => (
						<p
							className="text-[#fff] font-light text-sm cursor-pointer hover:underline"
							key={i}
						>
							{e}
						</p>
					))}
				</div>
				<div className="w-[20%] flex flex-col gap-4">
					<p className="font-semibold text-[#fff]">Support and Education</p>
					{FooterItems[2].map((e, i) => (
						<p
							className="text-[#fff] font-light text-sm cursor-pointer hover:underline"
							key={i}
						>
							{e}
						</p>
					))}
				</div>
				<div className="w-[20%] flex flex-col gap-4">
					<p className="font-semibold text-[#fff]">Community</p>
					{FooterItems[3].map((e, i) => (
						<p
							className="text-[#fff] font-light text-sm cursor-pointer hover:underline"
							key={i}
						>
							{e}
						</p>
					))}
				</div>
				<div className="w-[20%] flex flex-col gap-4">
					<p className="font-semibold text-[#fff]">Business Solutions</p>
					{FooterItems[4].map((e, i) => (
						<p
							className="text-[#fff] font-light text-sm cursor-pointer hover:underline"
							key={i}
						>
							{e}
						</p>
					))}
				</div>
			</div>
			<div className="border-b paddingYShorter3"></div>
			<div className="paddingTopShorter2 flex justify-between gap-4 items-center">
				{/* <span className="flex gap-2 items-center">
					<Icon icon="mingcute:quill-pen-line" color="#fff" width={40} />
					<h3 className="text-[#fff] text-4xl cursor-pointer">
						Pintar - Scholar
					</h3>
				</span> */}
				<p className="text-sm text-[#fff] underline">
					© Pintar - Sholar International Ltd. 2024, Integrated with Open Ai.
				</p>
			</div>
		</section>
	);
};

export default Footer;
