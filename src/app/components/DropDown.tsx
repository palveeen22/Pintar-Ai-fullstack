import React from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import { Icon } from "@iconify/react";

const items: MenuProps["items"] = [
	{
		key: "1",
		label: (
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.antgroup.com"
			>
				1st menu item
			</a>
		),
	},
	{
		key: "2",
		label: (
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.aliyun.com"
			>
				2nd menu item
			</a>
		),
	},
	{
		key: "3",
		label: (
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.luohanacademy.com"
			>
				3rd menu item
			</a>
		),
	},
];

const DropDown: React.FC = () => {
	return (
		<Dropdown
			menu={{ items }}
			placement="bottom"
			arrow={{ pointAtCenter: true }}
		>
			<div className="flex justify-start gap-2 px-3 py-1  items-center cursor-pointer rounded-lg border border-[#fff]">
				<li className="text-[#fff]">Explore</li>
				<Icon icon="mingcute:down-line" color="#fff" />
			</div>
		</Dropdown>
	);
};

export default DropDown;
