// // import { useTranslation } from "react-i18next";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// // import SearchBar from "./components/SearchBar";
// // import LanguageSwitcher from "./components/LanguageSwitcher";
// import { useEffect, useState } from "react";
// import { Icon } from "@iconify/react/dist/iconify.js";
// // import { navbarMenus } from "@/constants/constants";
// // import { allianceCountries, mainCountries } from "@/constants/constants";
// // import { getIndustries } from "@/api/Routes/Industries";
// // import { useQuery } from "@tanstack/react-query";
// // import { getLang } from "@/utils/utils";
// // import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
// // import { getServices } from "@/api/Routes/Services";

// export default function Navbar(): React.JSX.Element | null {
// 	// const { t } = useTranslation();
// 	// const lng = getLang();
// 	const [isAtTop, setIsAtTop] = useState<boolean>(true);
// 	const [isSearch, setIsSearch] = useState<boolean>(false);
// 	const navigate = useNavigate();
// 	const { pathname } = useLocation();
// 	const isSticky =
// 		pathname?.startsWith("/industry") ||
// 		pathname?.startsWith("/article") ||
// 		pathname?.startsWith("/service") ||
// 		pathname?.startsWith("/privacy-and-policy");

// 	useEffect(() => {
// 		function handleScroll() {
// 			setIsAtTop(window.scrollY === 0);
// 		}
// 		window.addEventListener("scroll", handleScroll, { passive: true });
// 		return () => {
// 			window.removeEventListener("scroll", handleScroll);
// 		};
// 	}, []);

// 	// const { data: industryData } = useQuery(["all-industries"], () =>
// 	// 	getIndustries(100)
// 	// );
// 	// const { data: serviceData } = useQuery(["services"], () => getServices(100));

// 	// if (pathname?.includes("/dashboard")) {
// 	// 	return <NavbarAdmin />;
// 	// }

// 	if (pathname?.includes("/administration")) {
// 		return null;
// 	}
// 	return (
// 		<nav
// 			className={`z-50 animate top-0 main-padding-x w-full max-lg:hidden ${
// 				isSticky ? "sticky text-spacecadet bg-white" : "fixed"
// 			} ${isAtTop ? "py-4" : "py-2 shadow-md"} ${
// 				isAtTop && !isSticky ? "text-white" : "text-spacecadet"
// 			} ${!isSticky && !isAtTop && "bg-white text-spacecadet"}
//     `}
// 		>
// 			<section className="flex justify-between items-center gap-10">
// 				<header className="flex gap-4 md:gap-6 items-center">
// 					<button type="button" className="lg:hidden">
// 						<Icon icon="gridicons:menu" width={35} />
// 					</button>
// 					<section className="flex flex-col">
// 						<Link
// 							to="/"
// 							className={`font-grandesign ${
// 								isAtTop
// 									? "h3 translate-y-2 -translate-x-0.5"
// 									: "h4 -translate-x-[0.1rem]"
// 							}`}
// 						>
// 							Hebronstar
// 						</Link>
// 						<p
// 							className={`!font-grandesign word-spacing-normal ${
// 								isAtTop && "p-bigger"
// 							}`}
// 						>
// 							Strategy Consultants
// 						</p>
// 					</section>
// 				</header>
// 				<ul
// 					className={`gap-4 lg:gap-8 xl:gap-10 2xl:gap-12 ${
// 						isSearch ? "hidden" : "hidden lg:flex"
// 					}`}
// 				>
// 					{navbarMenus?.map((menu) => {
// 						const dropdownsData = menu.dropdowns;
// 						const smallDropdowns =
// 							dropdownsData && dropdownsData?.length < 5 ? false : true;
// 						const isContact = menu.key === "contact";
// 						const isIndustry = menu.key === "industries";
// 						const isService = menu.key === "services";
// 						return (
// 							<li key={menu.key} className="group relative">
// 								<button
// 									type="button"
// 									onClick={() => {
// 										if (menu.path) {
// 											navigate(menu.path);
// 										}
// 									}}
// 									className="font-argentcf p-bigger text-left"
// 								>
// 									{t(menu.key)}
// 									{dropdownsData && !isContact ? (
// 										<ul
// 											className={`
//                     ${smallDropdowns ? "w-64" : "grid-cols-3 w-[50rem]"}
//                   grid gap-y-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible translate-y-10 group-hover:translate-y-12 px-6 py-4 border-t-18 border-spacecadet bg-antiflash text-spacecadet absolute centered-top animate`}
// 										>
// 											{isIndustry
// 												? industryData?.data?.map((dropdown) => {
// 														return (
// 															<li key={dropdown?.id}>
// 																<Link
// 																	className="font-arial text-base"
// 																	to={`/industry/${dropdown?.key}`}
// 																>
// 																	{dropdown?.name?.[lng]}
// 																</Link>
// 															</li>
// 														);
// 												  })
// 												: isService
// 												? serviceData?.data?.map((dropdown) => {
// 														return (
// 															<li key={dropdown.id}>
// 																<Link
// 																	className="font-arial text-base"
// 																	to={`/service/${dropdown?.key}`}
// 																>
// 																	{dropdown?.name?.[lng]}
// 																</Link>
// 															</li>
// 														);
// 												  })
// 												: dropdownsData?.map((dropdown) => {
// 														return (
// 															<li key={dropdown.key}>
// 																<Link
// 																	className="font-arial text-base"
// 																	to={dropdown.path}
// 																	target={
// 																		dropdown?.path?.startsWith("/")
// 																			? undefined
// 																			: "_blank"
// 																	}
// 																>
// 																	{t(dropdown.key)}
// 																</Link>
// 															</li>
// 														);
// 												  })}
// 										</ul>
// 									) : null}
// 									{dropdownsData && isContact ? (
// 										<ul
// 											className={`w-[44rem] grid gap-y-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible translate-y-10 group-hover:translate-y-12 px-6 py-4 border-t-18 border-spacecadet bg-antiflash text-spacecadet absolute centered-top animate`}
// 										>
// 											{navbarMenus?.[navbarMenus.length - 1]?.dropdowns?.map(
// 												(dropdown) => {
// 													return (
// 														<li key={dropdown.key}>
// 															<Link
// 																className="font-arial text-base"
// 																to={dropdown.path}
// 																target={
// 																	dropdown.path.startsWith("/")
// 																		? undefined
// 																		: "_blank"
// 																}
// 															>
// 																{t(dropdown.key)}
// 															</Link>
// 														</li>
// 													);
// 												}
// 											)}
// 											<nav className="grid grid-cols-3">
// 												<section className="flex flex-col gap-y-4">
// 													<p className="font-semibold">{t("main-offices")}</p>
// 													{mainCountries?.map((country) => {
// 														return (
// 															<Link
// 																className="font-arial text-base"
// 																key={country}
// 																to={`/offices/${country}`}
// 															>
// 																{t(country)}
// 															</Link>
// 														);
// 													})}
// 												</section>
// 												<section className="flex flex-col gap-y-4">
// 													<p className="font-semibold">
// 														{t("alliance-offices")}
// 													</p>
// 													{allianceCountries?.slice(0, 7)?.map((country) => {
// 														return (
// 															<Link
// 																className="font-arial text-base"
// 																key={country}
// 																to={`/offices/${country}`}
// 															>
// 																{t(country)}
// 															</Link>
// 														);
// 													})}
// 												</section>
// 												<section className="flex flex-col gap-y-4">
// 													<p className="font-semibold">
// 														{t("alliance-offices")}
// 													</p>
// 													{allianceCountries?.slice(7)?.map((country) => {
// 														return (
// 															<Link
// 																className="font-arial text-base"
// 																key={country}
// 																to={`/offices/${country}`}
// 															>
// 																{t(country)}
// 															</Link>
// 														);
// 													})}
// 												</section>
// 											</nav>
// 										</ul>
// 									) : null}
// 								</button>
// 							</li>
// 						);
// 					})}
// 				</ul>
// 				<section
// 					className={`flex gap-4 items-center ${isSearch ? "w-full" : "w-fit"}`}
// 				>
// 					<SearchBar isSearch={isSearch} setIsSearch={setIsSearch} />
// 					<LanguageSwitcher isAtTop={isAtTop} isSticky={isSticky} />
// 				</section>
// 			</section>
// 		</nav>
// 	);
// }
