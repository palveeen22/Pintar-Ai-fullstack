import React from "react";

const VisionMission = () => {
	return (
		<section className="flex justify-center gap-8 paddingY">
			<div className="flex justify-center items-center text-center">
				<h1>Vission and Mission</h1>
			</div>
			<div className="bg-[#fff] dark:text-[#252525]">
				<div className="max-w-5xl px-4 py-12 mx-auto">
					<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
						<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
							<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
								<h3 className="text-xl font-semibold tracki">
									Donec porta enim vel
								</h3>
								<time className="text-xs tracki uppercase dark:text-gray-400">
									Dec 2020
								</time>
								<p className="mt-3">
									Pellentesque feugiat ante at nisl efficitur, in mollis orci
									scelerisque. Interdum et malesuada fames ac ante ipsum primis
									in faucibus.
								</p>
							</div>
							<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
								<h3 className="text-xl font-semibold tracki">
									Aliquam sit amet nunc ut
								</h3>
								<time className="text-xs tracki uppercase dark:text-gray-400">
									Jul 2019
								</time>
								<p className="mt-3">
									Morbi vulputate aliquam libero non dictum. Aliquam sit amet
									nunc ut diam aliquet tincidunt nec nec dui. Donec mollis
									turpis eget egestas sodales.
								</p>
							</div>
							<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
								<h3 className="text-xl font-semibold tracki">
									Pellentesque habitant morbi
								</h3>
								<time className="text-xs tracki uppercase dark:text-gray-400">
									Jan 2016
								</time>
								<p className="mt-3">
									Suspendisse tincidunt, arcu nec faucibus efficitur, justo
									velit consectetur nisl, sit amet condimentum lacus orci nec
									purus. Mauris quis quam suscipit, vehicula felis id, vehicula
									enim.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default VisionMission;
