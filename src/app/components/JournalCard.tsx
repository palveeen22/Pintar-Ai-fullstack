import React from "react";
import { JournalWithResearcher, Journals } from "../type-def";
import TimeChange from "../../../helpers/utils/TimeChange";
import DateChnage from "../../../helpers/utils/DateChange";

type props = {
	data: JournalWithResearcher;
	// refetch: Function;
};

const JournalCard = ({ data }: props) => {
	return (
		<div className="w-full border-x border-[#000] cursor-pointer">
			<div className="border-[#000] border-b h-48 flex justify-start gap-8 p-4 hover:bg-[#fff]">
				<img src="https://wp-pdf.com/wp-content/uploads/2021/07/pdf-image.png" />
				<div className="w-[40%] flex flex-col gap-4">
					<p className="font-mono text-[#565e67]">
						{/* NOVEMBER 27, 2023 (ABOUT 2 MONTHS AGO) */}
						{DateChnage(data?.createdAt)}
					</p>
					<h1 className="text-xl">{data?.title}</h1>
					{data?.portofolio.map((e, i) => {
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
			</div>
		</div>
	);
};

export default JournalCard;
