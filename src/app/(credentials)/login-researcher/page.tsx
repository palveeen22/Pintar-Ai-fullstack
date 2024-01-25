import Link from "next/link";
import ClientFlashComponent from "@/app/components/ClientFlashComponent";
import { doLogin } from "./action";

const LoginPage = () => {
	return (
		<>
			<section className="min-h-screen flex items-stretch text-white ">
				<div
					className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
					style={{
						backgroundImage:
							"url(https://images.unsplash.com/photo-1561624038-e17e7e344645?q=80&w=2594&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
					}}
				>
					<div className="absolute bg-black opacity-60 inset-0 z-0"></div>
					<div className="w-full px-24 z-10">
						<p className="text-3xl my-4 font-mono">
							"The art of being a good scientist is to lead a fruitful and
							creative life in a world full of deadlines." <br /> - Albert J.
							Libchaber
						</p>
					</div>
				</div>
				<div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
					<div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center">
						<div className="absolute bg-black opacity-60 inset-0 z-0"></div>
					</div>
					<div className="w-full flex flex-col gap-4 py-6 z-20">
						<h1 className="text-5xl font-mono text-center tracking-wide text-[#000]">
							Welcome Pintarners
						</h1>
						<form
							action={doLogin}
							className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
						>
							<ClientFlashComponent />
							<div className="pb-2 pt-4">
								<input
									type="email"
									name="email"
									id="email"
									placeholder="Email"
									className="block w-full p-4 text-lg rounded-lg border placeholder:font-mono text-[#000] bg-[#E2E4DD]"
									required
								/>
							</div>
							<div className="pb-2 pt-4">
								<input
									className="block w-full p-4 text-lg rounded-lg border placeholder:font-mono text-[#000] bg-[#E2E4DD]"
									type="password"
									name="password"
									id="password"
									placeholder="Password"
									required
								/>
							</div>
							<div className="my-4 flex justify-end gap-4 text-right text-black font-mono">
								Don't have an researcher account?
								<Link href={"/register-researcher"}>
									<span className="hover:underline hover:text-blue-600">
										Register
									</span>
								</Link>
							</div>
							<div className="px-4 pb-2 pt-4">
								<button className="w-full flex justify-center bg-[#FF6100] hover:bg-[#FFB200] text-gray-100 px-4 py-4 rounded-full tracking-wide font-mono shadow-lg cursor-pointer transition ease-in duration-500">
									sign in
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default LoginPage;
