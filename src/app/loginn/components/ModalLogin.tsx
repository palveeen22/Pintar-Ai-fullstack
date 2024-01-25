import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface ModalLoginProps {
	open: boolean;
	onOk: () => void;
	onCancel: () => void;
}

const ModalLogin: React.FC<ModalLoginProps> = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<button className="border border-[#fff] text-[#fff] px-5 py-1 rounded-xl  hover:rounded-md hover:bg-[#fff] hover:text-[#252525]" onClick={showModal}>
				<span className="flex gap-2 items-center font-mono">
					Join
					<Icon icon="tabler:arrow-up-right" width={20} />
				</span>
			</button>
			<Modal
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
				closable={false}
				// style={{ borderRadius: "100px" }}
				width={900}
			>
				<section className="w-full h-[35rem] flex justify-center gap-4">
					<img src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[50%] object-cover rounded-l-lg" />
					<div className="paddingYShorter2 w-[50%] flex flex-col justify-between gap-4">
						<div className="flex flex-col gap-4">
							<h3 className="text-[#252525] font-mono text-justify text-xl">Join to enjoy the ease of participating in nation-building and access to other features!</h3>
						</div>

						<div className="flex flex-col gap-4">
							<Link href="/register-investor">
								<div className="border px-2 py-1 rounded-lg flex justify-start gap-4 items-center hover:border-[#1dbf73] cursor-pointer">
									<Icon icon="ant-design:team-outlined" width={40} />
									<p className="font-mono">I'm Project Owner</p>
								</div>
							</Link>

							<Link href="/register-researcher">
								<div className="border px-2 py-1  rounded-lg flex justify-start gap-4 items-center hover:border-[#1dbf73] cursor-pointer">
									<Icon icon="ant-design:idcard-twotone" width={40} />
									<p className="font-mono">I'm Researcher</p>
								</div>
							</Link>
						</div>
						<p className="text-[#74767e] font-light font-mono text-xs text-justify">By joining, you agree to the Prevferr Terms of Service and to occasionally receive emails from us. Please read our Privacy Policy to learn how we use your personal data.</p>
					</div>
				</section>
			</Modal>
		</>
	);
};

export default ModalLogin;
