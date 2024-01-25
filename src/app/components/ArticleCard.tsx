import React, { Fragment } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const ArticleCard = () => {
	return (
		<Fragment>
			<div className="px-4 py-2 flex justify-start gap-4 items-center">
				<div className="flex flex-col">
					<div className="flex items-center justify-start gap-4">
						<p className="text-[#0096FF] text-sm font-mono">Science</p>
						<p className="text-[#000] text-xs font-light">4 hour ago</p>
					</div>
					<Link href="/journals/journal_name">
						<p className="text-sm font-mono cursor-pointer hover:underline text-[#000]">
							Peta Tingkat Bahaya Erosi DAS Batang Kuranji - Kota Padang
						</p>
					</Link>

					<div className="flex justify-start gap-2 items-center">
						<img
							src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/flat_minimalist.78e0303.svg"
							className="m-1 object-cover rounded-full  h-8 w-8 bg-[#fff]"
						/>
						<p className="text-xs text-[#000]">Pt Sinarmar Indonesia</p>
						<Icon
							icon="material-symbols-light:verified-outline"
							color="#0096FF"
							width={15}
						/>
					</div>
				</div>
				<img
					src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					className="h-20 w-20 object-cover rounded-xl"
				/>
			</div>
			<div className="border-b border-[#000]"></div>
		</Fragment>
	);
};

export default ArticleCard;
