import React from "react";
import { ResearcherJournal } from "../type-def";

type props = {
	data: ResearcherJournal;
	// refetch: Function;
};

const ReseacrcherCard = ({ data }: props) => {
	return (
		<div className="bg-[#fff] border border-b border-[#000] rounded-3xl overflow-hidden">
			<div className="flex flex-col">
				<div className="w-full flex justify-center border-b border-[#000]">
					<img
						src={data?.profileImage}
						className="w-[50%] object-cover h-52 rounded-tl-3xl"
						alt="Researcher"
					/>
					<p className="w-[50%] p-4 flex justify-center items-center text-start font-mono text-sm">
						{data?.research}
					</p>
				</div>
				<div className="w-full px-4 py-2 flex flex-col gap-6 bg-[#E2E4DD]">
					<p className="font-mono text-lg font-semibold">
						{data?.firstname} {data?.lastname}
					</p>
					<p className="font-mono text-sm">{data?.background}</p>
					<p className="font-mono text-sm">{data?.education}</p>
					<p className="font-mono text-sm">{data?.email}</p>
					<p className="font-mono text-sm">{data?.location}</p>
					<p className="font-mono text-sm">{data?.jabatan_akademik}</p>
				</div>
			</div>
		</div>
	);
};

export default ReseacrcherCard;
