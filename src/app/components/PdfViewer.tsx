"use client";
import React from "react";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core";

// Plugins
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PdfViewer = () => {
	return (
		<div
			style={{
				border: "1px solid rgba(0, 0, 0, 0.3)",
				height: "750px",
			}}
		>
			<Viewer fileUrl="/assets/A.pdf" />
		</div>
	);
};

export default PdfViewer;
