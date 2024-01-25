"use client";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Project } from "../type-def";
import DateChnage from "../../../helpers/utils/DateChange";

type props = {
	data: Project;
	// refetch: Function;
};

const ProjectCard = ({ data }: props) => {
	return (
		<div className="bg-[#fff] h-96 border border-[#000] rounded-3xl overflow-hidden">
			<div className="flex flex-col">
				<div className="w-full flex justify-center border-b border-[#000]">
					<img
						src={data?.project_image}
						className="w-full object-cover h-52 rounded-tl-3xl"
						alt="Researcher"
					/>
				</div>
				<div className="w-full px-4 py-2 flex flex-col gap-6 bg-[#E2E4DD]">
					<p className="font-mono text-[#565e67] text-sm">
						Starting Date : {DateChnage(data?.starting_date)}
					</p>
					<p className="font-mono text-lg font-semibold">
						{data?.project_name}
					</p>
					<p className="font-mono text-sm">{data?.description_project}</p>
					<p className="font-mono text-sm">Status : on going</p>
					<p className="font-mono text-[#565e67] text-sm">
						Expecting Finish : {DateChnage(data?.expected_finish_date)}
					</p>
					<p className="font-mono text-sm">Budget : {data?.project_budget}</p>
					<ProgressBar
						completed={18}
						baseBgColor="#0072e3"
						bgColor="#ffb200"
						height="13px"
						labelSize="10px"
					/>
					<p className="font-mono text-sm">{data?.tags}</p>
					<div className="flex justify-start items-center gap-4">
						<img
							src={data?.researcher?.profileImage}
							className="h-14 w-14 rounded-full object-cover"
						/>
						<p className="text-sm font-mono">
							{data?.researcher?.firstname} {data?.researcher?.lastname}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
