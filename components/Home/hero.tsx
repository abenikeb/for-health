"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
	const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

	const bannerImages = [
		"/assets/images/banner2.png?height=600&width=1600&text=Summer+Sale",
		"/assets/images/banner2.png?height=600&width=1600&text=New+Arrivals",
		"/assets/images/banner2.jpg?height=600&width=1600&text=Special+Offers",
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentBannerIndex(
				(prevIndex) => (prevIndex + 1) % bannerImages.length
			);
		}, 5000);

		return () => clearInterval(timer);
	}, []);

	return (
		<section className="relative h-[300px] overflow-hidden">
			{bannerImages.map((image, index) => (
				<img
					key={index}
					src={image}
					alt={`Promotional Banner ${index + 1}`}
					className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
						index === currentBannerIndex ? "opacity-100" : "opacity-0"
					}`}
				/>
			))}
			<div className="absolute inset-0 bg-gradient-to-r from-[#232f3f] to-transparent">
				<div className="container mx-auto h-full flex items-center">
					<div className="text-white max-w-2xl space-y-8">
						<h1 className="text-3xl md:text-6xl font-bold leading-tight">
							Welcome to{" "}
							<span className="block text-[#febe66]">For Health Market</span>
						</h1>
						<p className="text-md md:text-2xl font-light">
							Discover amazing deals on all your favorite health products
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Button
								size="lg"
								className="bg-[#febe66] text-white font-semibold py-3 px-2 hover:bg-[#ffd699] transition-colors duration-200"
								asChild>
								<Link href="/product">
									Shop Today's Deals
									<ChevronRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
							{/* <div className="relative">
								<Input
									type="search"
									placeholder="Search for products..."
									className="pl-10 pr-4 py-2 w-full text-black"
								/>
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
							</div> */}
						</div>
					</div>
				</div>
			</div>
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
				{bannerImages.map((_, index) => (
					<button
						key={index}
						className={`w-3 h-3 rounded-full ${
							index === currentBannerIndex
								? "bg-[#febe66]"
								: "bg-white bg-opacity-50"
						}`}
						onClick={() => setCurrentBannerIndex(index)}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</section>
	);
};

export default Hero;
