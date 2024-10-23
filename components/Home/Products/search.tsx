"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, SearchCheck, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { ScrollArea, ScrollBar } from "@components/ui/scroll-area";

const categories = [
	{ name: "Fruits & Vegetables", icon: "Laptop" },
	{ name: "Dairy Products", icon: "Smartphone" },
	{ name: "Beverages", icon: "Headphones" },
	{ name: "Snacks", icon: "Camera" },
	{ name: "Bakery", icon: "Tv" },
	{ name: "Wearables", icon: "Watch" },
	{ name: "Health & Wellness", icon: "Gamepa" },
];

const Search = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		// Implement search functionality here
		console.log("Searching for:", searchQuery);
	};
	return (
		<div>
			{" "}
			<div className="bg-[#232f3f] pb-4 pt-1">
				<div className="container mx-auto px-4">
					<form onSubmit={handleSearch} className="flex mb-4">
						<Input
							type="search"
							placeholder="Search For HealthMarket"
							className="flex-grow rounded-r-none"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
						<Button
							type="submit"
							className="rounded-l-none bg-[#febe66] hover:bg-orange-500 text-white">
							<SearchIcon className="h-5 w-5 mr-1" />
						</Button>
					</form>
					<ScrollArea className="w-[11/12] whitespace-nowrap">
						<div className="flex space-x-2">
							{categories.map((category) => (
								<Link
									key={category.name}
									href={`/category/${category.name.toLowerCase()}`}
									className="flex-shrink-0 bg-white rounded-md shadow-md py-2 px-3 text-gray-800 text-center hover:shadow-lg transition-shadow duration-200">
									<div className="text-xs font-semibold">{category.name}</div>
								</Link>
							))}
						</div>
						<ScrollBar orientation="horizontal" />
					</ScrollArea>

					{/* <div className="bg-[#27323e] pt-2 ">
						<div className=" mx-auto px-1">
							<div className="flex items-center text-sm text-gray-100">
								<MapPin className="h-4 w-4 mr-1" />
								<span>Deliver to: Addis Ababa, Ethiopia</span>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Search;
