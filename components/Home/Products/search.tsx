// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { MapPin, SearchCheck, SearchIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// import { ScrollArea, ScrollBar } from "@components/ui/scroll-area";
// import { getCategories } from "@lib/data";

// const Search = () => {
// 	const [searchQuery, setSearchQuery] = useState("");
// 	const [categories, setCategories] = useState<any>([]);

// 	const fetchCategories = async () => {
// 		const fetchedCategories = await getCategories();
// 		setCategories(fetchedCategories);
// 	};

// 	useEffect(() => {
// 		fetchCategories();
// 	}, []);

// 	const handleSearch = (e: React.FormEvent) => {
// 		e.preventDefault();
// 		// Implement search functionality here
// 		console.log("Searching for:", searchQuery);
// 	};
// 	return (
// 		<div>
// 			{" "}
// 			{/* <div className="bg-[#232f3f] pb-4 pt-1"> */}
// 			<div className="bg-[#ffffff] pb-4 pt-1">
// 				<div className="container mx-auto px-4">
// 					<form onSubmit={handleSearch} className="flex my-4">
// 						<Input
// 							type="search"
// 							placeholder="Search For HealthMarket"
// 							className="flex-grow rounded-r-none"
// 							value={searchQuery}
// 							onChange={(e) => setSearchQuery(e.target.value)}
// 						/>
// 						<Button
// 							type="submit"
// 							className="rounded-l-none bg-[#febe66] hover:bg-orange-500 text-white">
// 							<SearchIcon className="h-5 w-5 mr-1" />
// 						</Button>
// 					</form>
// 					<ScrollArea className="w-[11/12] whitespace-nowrap">
// 						<div className="flex space-x-2">
// 							{categories.map((category: any) => (
// 								<Link
// 									key={category.name}
// 									href={`/category/${category.name.toLowerCase()}`}
// 									className="flex-shrink-0 border border-[#2e3d51] rounded-md shadow-md py-2 px-3 text-[#2e3d51] text-center hover:shadow-lg transition-shadow duration-200">
// 									<div className="text-xs font-semibold">{category.name}</div>
// 								</Link>
// 							))}
// 						</div>
// 						<ScrollBar orientation="horizontal" />
// 					</ScrollArea>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Search;

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, SearchCheck, SearchIcon, Grid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCategories } from "@/lib/data";

const Search = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [categories, setCategories] = useState<any>([]);
	const [activeCategory, setActiveCategory] = useState("all");

	const fetchCategories = async () => {
		const fetchedCategories = await getCategories();
		setCategories(fetchedCategories);
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Searching for:", searchQuery);
	};

	return (
		<div className="bg-gradient-to-r from-[#ffffff] to-[#ffffff] pb-6 pt-4 shadow-md">
			<div className="container mx-auto px-4">
				<form onSubmit={handleSearch} className="flex my-4">
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

				{/* <Tabs defaultValue="all" className="w-full mb-4">
					<TabsList className="bg-blue-700 p-1 rounded-full">
						<TabsTrigger
							value="all"
							className="data-[state=active]:bg-white data-[state=active]:text-blue-700 rounded-full px-4 py-2 text-white font-medium transition-all"
							onClick={() => setActiveCategory("all")}>
							<Grid className="h-5 w-5 mr-2" />
							All Categories
						</TabsTrigger>
						{categories.slice(0, 5).map((category: any) => (
							<TabsTrigger
								key={category.name}
								value={category.name.toLowerCase()}
								className="data-[state=active]:bg-white data-[state=active]:text-blue-700 rounded-full px-4 py-2 text-white font-medium transition-all"
								onClick={() => setActiveCategory(category.name.toLowerCase())}>
								{category.name}
							</TabsTrigger>
						))}
					</TabsList>
				</Tabs> */}

				<ScrollArea className="w-full whitespace-nowrap pb-2">
					<div className="flex space-x-2">
						<Link
							key={`1`}
							href={`/`}
							className="bg-[#febe66] data-[state=active]:text-blue-700 rounded-md px-4 text-white font-medium transition-all"
							onClick={() => setActiveCategory("all")}>
							{/* <Grid className="h-4 w-4 mr-2" /> */}
							All
						</Link>
						{categories.map((category: any) => (
							<Link
								key={category.name}
								href={`/category/${category.name.toLowerCase()}`}
								className={`flex items-center flex-shrink-0 border rounded-md py-1 px-4 text-sm font-medium transition-all duration-200 ${
									activeCategory === category.name.toLowerCase()
										? "bg-white text-[#232f3f] border-white"
										: "bg-[#232f3f] text-white border-[#232f3f] hover:bg-[#232f3f]"
								}`}>
								<category.icon className="h-4 w-4 mr-2" />
								{category.name}
							</Link>
						))}
					</div>
					<ScrollBar orientation="horizontal" className="bg-blue-600" />
				</ScrollArea>
			</div>
		</div>
	);
};

export default Search;
