"use client";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import ModalLogin from "../loginn/components/ModalLogin";
import DropDownList from "./DropDownLIst";
import Link from "next/link";
import { useRouter } from "next/router";
import { handleLogout, handleGetToken } from "../welcome-researcher/action";

const Navbar = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [token, setToken] = useState("") as any;

	const closeModal = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		const data = handleGetToken();
		setToken(data);
	}, []);

	const handleLogoutClick = () => {
		// Call the handleLogout function
		handleLogout();

		// Optional: You can also clear the token state in your component
		setToken("");
	};

	return (
		<>
			{token ? (
				<nav className="flex justify-between py-6 border border-[#000] paddingX bg-[#242628]">
					<Link href="/">
						<span className="flex gap-2 items-center h-full">
							<Icon icon="arcticons:airthings" color="#fff" width={40} />
							<h3 className="text-[#fff] text-xl font-mono font-light cursor-pointer">
								Pintar Ai.
							</h3>
						</span>
					</Link>
					<div className="flex justify-between items-center gap-4">
						<ul className="flex justify-between gap-8 items-center">
							<DropDownList />
						</ul>
						<button
							className="border border-[#fff] text-[#fff] px-5 py-1 rounded-xl  hover:rounded-md hover:bg-[#fff] hover:text-[#252525]"
							onClick={handleLogoutClick}
						>
							<span className="flex gap-2 items-center font-mono">
								Logout
								<Icon icon="heroicons-solid:logout" width={20} />
							</span>
						</button>
					</div>
				</nav>
			) : (
				<nav className="flex justify-between py-6 border border-[#000] paddingX bg-[#242628]">
					<Link href="/">
						<span className="flex gap-2 items-center h-full">
							<Icon icon="arcticons:airthings" color="#fff" width={40} />
							<h3 className="text-[#fff] text-xl font-mono font-light cursor-pointer">
								Pintar Ai.
							</h3>
						</span>
					</Link>
					<div className="flex justify-between items-center gap-4">
						<ul className="flex justify-between gap-8 items-center">
							<DropDownList />
						</ul>
						<ModalLogin
							open={isModalOpen}
							onOk={closeModal}
							onCancel={closeModal}
						/>
					</div>
				</nav>
			)}
		</>
	);
};

export default Navbar;