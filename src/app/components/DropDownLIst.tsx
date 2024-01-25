import React from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import { Icon } from "@iconify/react";
import Link from "next/link";

const items: MenuProps["items"] = [
	{
		key: "1",
		label: (
			<Link href="/journals">
				<div className="px-4 py-2 flex justify-start gap-4 items-center border rounded-xl border-[#084225]">
					<Icon icon="ooui:journal-ltr" width={40} color="#74767e" />
					<p className="text-sm text-[#74767e]">Find Journals</p>
				</div>
			</Link>
		),
	},
	{
		key: "2",
		label: (
			<Link href="/projects">
				<div className="px-4 py-2 flex justify-start gap-4 items-center border rounded-xl border-[#084225]">
					<Icon icon="eos-icons:project-outlined" width={40} color="#74767e" />
					<p className="text-sm text-[#74767e]">See on Going Project</p>
				</div>
			</Link>
		),
	},
];

const DropDownList: React.FC = () => {
	return (
		<Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
			<div className="flex justify-start gap-2 px-3 py-1 items-center cursor-pointer">
				<li className="text-[#fff] hover:underline font-mono ">Guides</li>
				<Icon icon="mingcute:down-line" color="#fff" />
			</div>
		</Dropdown>
	);
};

export default DropDownList;
