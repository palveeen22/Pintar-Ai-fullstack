"use client";
import React from "react";
import { Select } from "antd";

const onChange = (value: string) => {
	console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
	console.log("search:", value);
};

// Filter `option.label` match the user type `input`
const filterOption = (
	input: string,
	option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const CategoryInput: React.FC = () => (
	<Select
		showSearch
		// optionFilterProp="children"
		onChange={onChange}
		onSearch={onSearch}
		filterOption={filterOption}
		className="rounded-r-full w-[60%] border h-14 px-4 transition-colors duration-300 focus:border-[#FFB200] placeholder:font-mono placeholder:text-sm"
		placeholder="Find journals here..."
		options={[
			{
				value: "jack",
				label: "Jack",
			},
			{
				value: "lucy",
				label: "Lucy",
			},
			{
				value: "tom",
				label: "Tom",
			},
		]}
	/>
);

export default CategoryInput;
