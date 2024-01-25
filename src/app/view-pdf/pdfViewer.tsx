// "use client";
// import React, { useEffect } from "react";
// import {
// 	Worker,
// 	Viewer,
// 	SpecialZoomLevel,
// 	MinimalButton,
// 	ViewMode,
// 	ScrollMode,
// } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import { getFilePlugin } from "@react-pdf-viewer/get-file";
// import {
// 	pageNavigationPlugin,
// 	NextIcon,
// 	PreviousIcon,
// } from "@react-pdf-viewer/page-navigation";
// import { thumbnailPlugin } from "@react-pdf-viewer/thumbnail";

// // Main component
// const MagazineView = () => {
// 	// // Instance of page navigation plugin
// 	// const pageNavigationPluginInstance = pageNavigationPlugin();
// 	// const { jumpToNextPage, jumpToPreviousPage } = pageNavigationPluginInstance;

// 	// // Instance of thumbnail plugin
// 	// const thumbnailPluginInstance = thumbnailPlugin();

// 	// // Instance of default layout plugin
// 	// const defaultLayoutPluginInstance = defaultLayoutPlugin({
// 	// 	sidebarTabs: (defaultTabs) => [],
// 	// });

// 	// // URL for the PDF worker
// 	// const url = "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";
// 	const pageNavigationPluginInstance = pageNavigationPlugin();
// 	const { jumpToNextPage, jumpToPreviousPage } = pageNavigationPluginInstance;

// 	const thumbnailPluginInstance = thumbnailPlugin();
// 	const defaultLayoutPluginInstance = defaultLayoutPlugin({
// 		sidebarTabs: (defaultTabls) => [],
// 	});
// 	const url = "/pdf.worker.min.js";
// 	const pdf =
// 		"https://firebasestorage.googleapis.com/v0/b/turun-tangan.appspot.com/o/majalah%2F1705480124334-majalah-47e61be5f5ed4c11323bf705d4165b09.pdf?alt=media&token=355383c9-c178-41da-9f94-548214390fdb";
// 	// const textAbout = data?.data?.about;
// 	// const pdf = data?.data?.url;

// 	// const getFilePluginInstance = getFilePlugin();

// 	// URL for the PDF file
// 	// const pdf =
// 	// "https://www.pdffiller.com/jsfiller-desk18/?flat_pdf_quality=high&requestHash=b346b9fc6845615d2f6c211fba3a51ab5c8d3095a6f116dba42d52eeb3829906&projectId=1431991381&loader=tips&MEDIUM_PDFJS=true&PAGE_REARRANGE_V2_MVP=true&richTextFormatting=true&isPageRearrangeV2MVP=true&jsf-page-rearrange-v2=true&LATEST_PDFJS=true&jsf-document-scroll-zoom=true&jsf-redesign-full=true&jsf-dss-v2=false&routeId=2f806d206e21e9b769a5377f34aa7922#e4de256eebb84bf3afad1be62d079e25";

// 	// Instance of get file plugin
// 	const getFilePluginInstance = getFilePlugin();

// 	// Use useEffect to set up the worker
// 	// useEffect(() => {
// 	// 	// Set up the worker
// 	// 	// const worker = new Worker(url);

// 	// 	// Clean up the worker on component unmount
// 	// 	return () => {
// 	// 		worker.terminate();
// 	// 	};
// 	// }, []); // Empty dependency array to run the effect only once

// 	return (
// 		<div className="paddingX paddingY">
// 			<div className="flex justify-center items-center">
// 				<div className="-rotate-90">
// 					<MinimalButton onClick={jumpToPreviousPage}>
// 						<PreviousIcon />
// 					</MinimalButton>
// 				</div>
// 				<div className="lg:h-[760px] md:h-[675px] w-[50%] left-0 cols-span-3">
// 					<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
// 						<Viewer
// 							fileUrl={pdf}
// 							viewMode={ViewMode.DualPageWithCover}
// 							scrollMode={ScrollMode.Page}
// 							plugins={[
// 								defaultLayoutPluginInstance,
// 								getFilePluginInstance,
// 								pageNavigationPluginInstance,
// 								thumbnailPluginInstance,
// 							]}
// 							initialPage={0}
// 							defaultScale={SpecialZoomLevel.PageFit}
// 						/>
// 					</Worker>
// 				</div>
// 				<div className="-rotate-90">
// 					<MinimalButton onClick={jumpToNextPage}>
// 						<NextIcon />
// 					</MinimalButton>
// 				</div>
// 			</div>
// 			<div className="paddingX paddingY flex flex-col">
// 				<p className="pBigger2 font-semibold paddingTopShorter md:paddingTopShorter2 paddingBottomShorter3 text-[#C91F3B]">
// 					{/* {data.data.filename} */}
// 				</p>
// 				{/* <p className="text-[#9B9A9A]">{`Terbit: ${dateFormat(dateText)}`}</p> */}
// 				<div className="border-[1px] border-[#D9D9D9] mt-2" />

// 				<p className="pBigger paddingTopShorter md:paddingTopShorter2 paddingBottomShorter3 text-[#9B9A9A]">
// 					About
// 				</p>

// 				{/* <span className="font pBigger">{textAbout}</span> */}
// 			</div>
// 		</div>
// 	);
// };

// export default MagazineView;
