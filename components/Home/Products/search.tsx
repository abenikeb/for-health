"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, SearchCheck, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { ScrollArea, ScrollBar } from "@components/ui/scroll-area";
import { getCategories } from "@lib/data";

const Search = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [categories, setCategories] = useState<any>([]);

	const fetchCategories = async () => {
		const fetchedCategories = await getCategories();
		setCategories(fetchedCategories);
	};

	useEffect(() => {
		fetchCategories();
	}, []);

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
							{categories.map((category: any) => (
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
				</div>
			</div>
		</div>
	);
};

export default Search;
