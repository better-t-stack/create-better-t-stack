"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import PackageIcon from "./Icons";

const Navbar = () => {
	const [activeLink, setActiveLink] = useState("home");
	const [bgStyles, setBgStyles] = useState({});
	const [scrolled, setScrolled] = useState(false);
	const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

	useEffect(() => {
		const updateBackground = (linkId: string) => {
			const linkElement = linkRefs.current[linkId];
			if (linkElement) {
				setBgStyles({
					padding: "1rem 0rem",
					width: `${linkElement.clientWidth - 12}px`,
					transform: `translateX(${linkElement.offsetLeft}px)`,
					opacity: 1,
				});
			}
		};

		updateBackground(activeLink);

		const handleScroll = () => {
			const isScrolled = window.scrollY > 50;
			setScrolled(isScrolled);
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", () => updateBackground(activeLink));

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", () => updateBackground(activeLink));
		};
	}, [activeLink]);

	return (
		<nav
			className={`fixed top-0 right-0 z-[100] w-screen px-8 py-5 grid grid-cols-1 md:grid-cols-3 items-center transition-all duration-300 ${
				scrolled
					? "bg-transparent border-transparent"
					: "sm:bg-black/40 sm:backdrop-blur-xl sm:border-b border-blue-500/20"
			}`}
		>
			<div
				className={`max-md:hidden flex flex-row items-center space-x-2 transition-opacity duration-300 ${
					scrolled ? "opacity-0" : "opacity-100"
				}`}
			>
				<div className="w-4 h-4 rounded-sm flex items-center justify-center">
					<span className="text-blue-500 text-md">$_</span>
				</div>
				<span className="text-blue-400 font-semibold text-md">
					Better-T Stack
				</span>
			</div>

			<div className="flex justify-center">
				<div
					className={`flex items-center backdrop-blur-md bg-black/40 rounded-md border border-blue-500/30 py-1 px-1.5 text-sm relative transition-all duration-500 ease-out ${
						scrolled ? "w-[180px]" : "sm:w-[180px] w-[180px]"
					}`}
				>
					<div
						className="absolute transition-all duration-300 ease-in-out bg-blue-900/20 border border-blue-500/20 rounded-md py-2"
						style={bgStyles}
					/>
					<Link
						href="/"
						ref={(ref) => {
							linkRefs.current.home = ref;
						}}
						onMouseOver={() => setActiveLink("home")}
						className="text-gray-300 hover:text-blue-300 transition-colors py-2 px-4 rounded-md relative font-mono"
					>
						<span className="text-blue-500">~/</span>home
					</Link>
					{/* <Link
						href="https://www.github.com/better-t-stack/create-better-t-stack"
						target="_blank"
						ref={(ref) => {
							linkRefs.current.github = ref;
						}}
						onMouseOver={() => setActiveLink("github")}
						onMouseLeave={() => setActiveLink("home")}
						className="text-gray-300 hover:text-blue-300 transition-colors py-2 px-4 rounded-md relative flex gap-2 items-center font-mono"
					>
						<PackageIcon pm="github" className="w-4 h-4" />{" "}
						<span className="max-sm:hidden">github</span>
					</Link> */}
					<Link
						href="https://www.npmjs.com/package/create-better-t-stack"
						target="_blank"
						ref={(ref) => {
							linkRefs.current.npm = ref;
						}}
						onMouseOver={() => setActiveLink("npm")}
						onMouseLeave={() => setActiveLink("home")}
						className="text-gray-300 hover:text-blue-300 transition-colors py-2 px-4 rounded-md relative flex gap-2 items-center font-mono"
					>
						<PackageIcon pm="npm" className="w-4 h-4 rounded-full" />{" "}
						<span>npm</span>
					</Link>
					{/* <span
						className="text-blue-500 transition-all duration-300"
						style={{
							opacity: scrolled ? 1 : 0,
							transform: scrolled ? "translateY(0)" : "translateY(-8px)",
						}}
					>
						|
					</span>
					<Link
						href="/docs"
						ref={(ref) => {
							linkRefs.current.documentation = ref;
						}}
						onMouseOver={() => setActiveLink("documentation")}
						onMouseLeave={() => setActiveLink("home")}
						style={{
							transform: scrolled ? "translateY(0)" : "sm:translateY(-8px)",
						}}
						className={`hover:text-blue-300 text-gray-300 transition-all duration-300 py-2 px-4 rounded-md font-mono ${
							scrolled
								? "sm:opacity-100 sm:translate-y-0"
								: "sm:opacity-0 sm:pointer-events-none"
						}`}
					>
						documentation
					</Link> */}
				</div>
			</div>

			<div
				className={`flex justify-end transition-opacity duration-300 ${
					scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
				}`}
			>
				<Link
					href="https://www.github.com/better-t-stack/create-better-t-stack"
					target="_blank"
					className="relative max-sm:hidden inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
				>
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#6366f1_50%,#3b82f6_100%)]" />
					<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-black px-6 py-px text-sm font-medium text-blue-400 backdrop-blur-3xl font-mono">
						<PackageIcon pm="github" className="w-4 h-4 mr-2" /> github
					</span>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
