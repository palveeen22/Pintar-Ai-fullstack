"use client";

import React, { useState, useEffect } from "react";
import { readPayload } from "../../../helpers/lib/jwt";
import { useRouter } from "next/navigation";
import { PlusOutlined } from "@ant-design/icons";
import {
	Button,
	Cascader,
	Checkbox,
	ColorPicker,
	DatePicker,
	Form,
	Input,
	InputNumber,
	Radio,
	Select,
	Slider,
	Switch,
	TreeSelect,
	Upload,
} from "antd";
import { ResearcherJournal } from "../type-def";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
	if (Array.isArray(e)) {
		return e;
	}
	return e?.fileList;
};

const AddProjectForm = () => {
	const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
	const [researcher, setResearcher] = useState([] as ResearcherJournal[]);
	const router = useRouter();
	const [form, setForm] = useState({
		project_name: "",
		description_project: "",
		project_image: "",
		project_status: false,
		starting_date: "",
		expected_finish_date: "",
		project_budget: "",
		keywords: "",
	});

	const onChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	const onSearch = (value: string) => {
		console.log("search:", value);
	};

	const [error, setError] = useState("");

	console.log(readPayload, "ini");

	const onSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		const formPayload = {
			...form,
			project_status: false,
		};
		console.log(formPayload, "<<< form payload");

		try {
			// SEMUANYA AJA LAH lengkapin aja linknya
			const response = await fetch("http://localhost:3000/api/projects", {
				method: "POST",
				body: JSON.stringify(formPayload),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const responseJSON = await response.json();
			console.log(responseJSON, "<<<< response project");

			setForm({
				project_name: "",
				description_project: "",
				project_image: "",
				project_status: false,
				starting_date: "",
				expected_finish_date: "",
				project_budget: "",
				keywords: "",
			});

			router.push("/welcome-investor");
		} catch (error: any) {
			console.log(error);
			setError(error);
		}
	};

	const onHandlerForm = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		const { name, value } = event.target;
		setForm({ ...form, [name]: value });
	};

	const fetchData = async () => {
		try {
			const response = await fetch("http://localhost:3000/api/researchers");

			if (!response.ok) {
				throw new Error("Failed fetching data");
			}

			const responseJSON = await response.json();
			console.log(responseJSON);

			setResearcher(responseJSON);
			// router.push(`/projects/${responseJSON.project_name}`);
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			} else {
				console.log(error);
			}
		}
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<>
			<section className="min-h-screen flex items-stretch text-white">
				<div
					className="w-full flex items-center justify-center text-center md:px-16 px-0 z-0 relative overflow-hidden paddingY"
					style={{
						backgroundImage:
							"url(https://images.unsplash.com/photo-1608303588026-884930af2559?q=80&w=3403&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
					}}
				>
					<div className="absolute bg-gradient-to-b bg-[#252525] opacity-75 inset-0 z-0"></div>

					<div className="absolute mx-auto bg-[#E2E4DD] w-[80%] rounded-3xl flex flex-col gap-6 z-10 paddingXShorter paddingYShorter3">
						<h3 className="font-mono text-xl text-[#252525] text-start">
							Create a New Project
						</h3>
						{/* <Form
							labelCol={{ span: 4 }}
							wrapperCol={{ span: 14 }}
							layout="horizontal"
							style={{ maxWidth: 600 }}
						>
							<Form.Item label="Project Name">
								<Input />
							</Form.Item>
							<Form.Item label="Description">
								<TextArea rows={4} />
							</Form.Item>
							<Form.Item label="Category">
								<Select>
									<Select.Option value="demo">Demo</Select.Option>
								</Select>
							</Form.Item>
							<Form.Item label="Starting Date">
								<DatePicker />
							</Form.Item>
							<Form.Item label="Expected Finish">
								<DatePicker />
							</Form.Item>
							<Form.Item label="Budget">
								<InputNumber />
							</Form.Item>

							<Form.Item
								label="Image Project"
								valuePropName="fileList"
								getValueFromEvent={normFile}
							>
								<Upload action="/upload.do" listType="picture-card">
									<button
										style={{ border: 0, background: "none" }}
										type="button"
									>
										<PlusOutlined />
										<div style={{ marginTop: 8 }}>Upload</div>
									</button>
								</Upload>
							</Form.Item>
						</Form> */}
						<div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center">
							<div className="absolute bg-black opacity-60 inset-0 z-0"></div>
						</div>
						<div className="w-full py-6 z-20">
							<form className="mx-auto pt-9 pb-9" onSubmit={onSubmit}>
								<div className="relative z-0 w-full mb-5 group">
									<input
										type="text"
										name="project_name"
										id="project_name"
										className=" text-black block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
										placeholder=" "
										value={form.project_name}
										onChange={onHandlerForm}
									/>
									<label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
										Project Name
									</label>
								</div>
								<div className="relative z-0 w-full mb-5 group">
									<input
										type="text"
										name="description_project"
										id="description_project"
										className="text-black block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
										placeholder=" "
										value={form.description_project}
										onChange={onHandlerForm}
									/>
									<label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
										Project Description
									</label>
								</div>
								<div className="relative z-0 w-full mb-5 group">
									<input
										type="text"
										name="project_image"
										id="project_image"
										className="text-black block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
										placeholder=" "
										value={form.project_image}
										onChange={onHandlerForm}
									/>
									<label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
										Project Image URL
									</label>
								</div>
								<div className="grid md:grid-cols-2 md:gap-6">
									<div className="relative z-0 w-full mb-5 group">
										<input
											type="date"
											name="starting_date"
											id="starting_date"
											className="text-black block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
											placeholder=" "
											value={form.starting_date}
											onChange={onHandlerForm}
										/>
										<label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
											Starting Date
										</label>
									</div>
									<div className="relative z-0 w-full mb-5 group">
										<input
											type="date"
											name="expected_finish_date"
											id="expected_finish_date"
											className="text-black block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
											placeholder=" "
											value={form.expected_finish_date}
											onChange={onHandlerForm}
										/>
										<label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
											Expected Finish Date
										</label>
									</div>
									<label>Choose a Category:</label>
									<select
										id="keywords"
										name="keywords"
										className="bg-[#E2E4DD] border border-black"
										value={form.keywords}
										onChange={onHandlerForm}
									>
										<option value="" disabled>
											Select Keywords
										</option>
										<option value="education">Education</option>
										<option value="engineering">Engineering</option>
										<option value="health">Health</option>
										<option value="agriculture">Agriculture</option>
										<option value="environment">Environment</option>
									</select>
									{/* <label>Choose a reseracher:</label> */}
									{/* <select id="keywords" name="keywords" className="bg-[#E2E4DD] border border-black"> */}
										{/* {researcher.map((researcher) => (
											<option key={researcher.id} value={researcher.keyword}>
												{researcher.keyword}
											</option>
										))} */}
										{/* {researcher.map((researcher) => {
											return (
												<option
													key={researcher.id}
													value={researcher.firstname}
												>
													{researcher.firstname}
													{researcher.lastname}
												</option>
											);
										})}
									</select> */}
								</div>
								<div className="grid md:grid-cols-2 md:gap-6">
									<div className="relative z-0 w-full mb-5 group">
										<input
											type="number"
											pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
											name="project_budget"
											id="project_budget"
											className="text-black block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
											placeholder=" "
											value={form.project_budget}
											onChange={onHandlerForm}
										/>
										<label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
											Project Budget
										</label>
									</div>
								</div>
								<button
									type="submit"
									className="text-white bg-green-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
								>
									Create
								</button>
								<button
									onClick={() => router.push("/welcome-investor")}
									className="ml-2 text-white bg-red-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
								>
									Cancel
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AddProjectForm;
