"use client";

import { useState, FormEvent, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

	const bannerImages = [
		"/assets/images/banner5.jpg?height=400&width=1200&text=Summer+Sale",
		"/assets/images/banner.jpg?height=400&width=1200&text=New+Arrivals",
		"/assets/images/banner5.jpg?height=400&width=1200&text=Special+Offers",
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
			<img
				src={bannerImages[currentBannerIndex]}
				alt="Promotional Banner"
				className="w-full h-full object-cover"
			/>
			<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
				<div className="text-center text-white">
					<h1 className="text-3xl md:text-5xl font-bold mb-4">
						Welcome to <span className="block">For Health Market</span>
					</h1>
					<p className="mb-8">
						Discover amazing deals on all your favorite products
					</p>
					<Button
						size="lg"
						className="bg-[#febe66] text-white font-semibold py-3 px-6 hover:bg-primary/90 transition-colors duration-200"
						asChild>
						<Link href="/product">
							Shop Today's Deals
							<ChevronRight className="ml-2 h-5 w-5" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
