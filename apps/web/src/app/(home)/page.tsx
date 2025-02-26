"use client";
import ShinyText from "@/app/(home)/_components/ShinyText";
import React from "react";
import BackgroundGradients from "./_components/BackgroundGradients";
import CodeContainer from "./_components/CodeContainer";
import CustomizableSection from "./_components/CustomizableSection";
import NpmPackage from "./_components/NpmPackage";
import TechConstellation from "./_components/TechConstellation";
import TerminalDisplay from "./_components/Terminal";
import Testimonials from "./_components/Testimonials";

export default function HomePage() {
	return (
		<main className="flex flex-col items-center justify-start sm:p-8 p-4 !pt-40">
			<BackgroundGradients />
			<div className="max-w-6xl mx-auto text-center mb-16 relative z-50 ">
				<div className="relative z-10">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<NpmPackage />
						<h1 className="text-6xl font-extrabold text-white">
							<span className="block sm:text-7xl text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-200">
								Better-T Stack
							</span>
							<span className="relative">
								<span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 transform origin-left transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100" />
							</span>
						</h1>

						<p className="sm:text-2xl text-xl font-medium text-gray-300 max-w-2xl">
							<span className="inline-block transform hover:scale-105 transition-transform duration-200">
								Scaffold
							</span>{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
								production-ready
							</span>{" "}
							<span className="inline-block transition-transform duration-200">
								Better-T projects in seconds
							</span>
						</p>
						<CodeContainer />
						<ShinyText
							text="Be the safest developer with typesafe Typescript"
							speed={3}
							className="sm:text-lg text-md"
						/>
					</div>
				</div>
				<div className="absolute inset-0 -z-10">
					<div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl transform -skew-y-12" />
				</div>
			</div>
			<TerminalDisplay />

			<div className="w-full max-w-6xl mx-auto space-y-12 mt-12 relative z-50">
				<div className="text-center space-y-6 relative z-10">
					<h2 className="sm:text-4xl text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-700 via-gray-100 to-stone-600 pb-2">
						A Symphony of Modern Tech
					</h2>
					<div className="space-y-4 max-w-3xl mx-auto">
						<p className="sm:text-xl text-gray-300 leading-relaxed">
							Carefully orchestrated stack of{" "}
							<span className="text-blue-400 font-semibold">
								cutting-edge technologies
							</span>
							, working in perfect harmony to deliver an exceptional development
							experience.
						</p>
						<div className="flex flex-wrap justify-center sm:gap-4 gap-2 sm:text-sm text-xs text-gray-400">
							<span className="px-3 py-1 bg-gray-800/50 rounded-full hover:bg-gray-800 transition-colors">
								End-to-end Type Safety
							</span>
							<span className="px-3 py-1 bg-gray-800/50 rounded-full hover:bg-gray-800 transition-colors">
								Lightning Fast Performance
							</span>
							<span className="px-3 py-1 bg-gray-800/50 rounded-full hover:bg-gray-800 transition-colors">
								Modern Development Tools
							</span>
						</div>
					</div>
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/50 to-transparent -z-10 blur-xl" />
				</div>
			</div>
			<TechConstellation />
			<CustomizableSection />
			<Testimonials />
		</main>
	);
}
