"use client";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Icon } from "@iconify/react";
import CardProject from "./CardProject";

const CardPopular = () => {
	return (
		<section className="paddingX paddingY">
			<h3 className="text-[#404105">Popular Projects</h3>
			<CardProject />
		</section>
	);
};

export default CardPopular;
