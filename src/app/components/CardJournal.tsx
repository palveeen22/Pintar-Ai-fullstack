"use client";
import React from "react";
import { Icon } from "@iconify/react";

const CardJournal = () => {
	return (
		<div className="shadow bg-[#fff] flex justify-between rounded-xl  p-2">
			<div className="flex flex-col">
				<div className="p-2 flex flex-col gap-2">
					<span className="flex justify-start gap-2 items-center">
						<img
							src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/flat_minimalist.78e0303.svg"
							className="m-2 object-cover rounded-full border h-10 w-10"
						/>
						<p className="text-xs text-[#74767e]">Pt Sinarmar Indonesia</p>
						<Icon
							icon="material-symbols-light:verified-outline"
							color="#0096FF"
							width={15}
						/>
					</span>
					<p className="text-[#252525] font-semibold text-sm">
						Pengembangan pakan ayam dengan pesticida
					</p>
					<span className="flex justify-start gap-2 items-center">
						<p className="text-xs font-light text-[#252525]">Budget</p>
						<p className="text-[#0096FF] text-sm font-bold">Rp 7.500.000,00</p>
					</span>
				</div>
			</div>
			<div className="flex justify-center items-center">
				<Icon icon="bi:journals" width={45} />
			</div>
		</div>
	);
};

export default CardJournal;
