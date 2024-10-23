"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	ChevronRight,
	Search,
	Laptop,
	Check,
	User,
	Menu,
	Smartphone,
	Headphones,
	Camera,
	Tv,
	Watch,
	Gamepad,
	ShoppingCart,
} from "lucide-react";
import { Apple, Egg, Carrot, Milk, Fish } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
	{ name: "Fruits & Vegetables", icon: Apple },
	{ name: "Dairy Products", icon: Egg },
	{ name: "Beverages", icon: Carrot },
	{ name: "Snacks", icon: Fish },
	{ name: "Bakery", icon: Milk },
	{ name: "Wearables", icon: Apple },
	{ name: "Health", icon: Fish },
];

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Implement search functionality here
		console.log("Searching for:", searchQuery);
	};
	return (
		<>
			<header className="bg-[#232f3f] sticky top-0 z-50 w-full backdrop-blur text-white">
				<div className="container mx-auto px-2">
					<div className="flex items-center justify-between py-2">
						<div className="flex items-center">
							<Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
								<SheetTrigger asChild>
									<Button
										variant="ghost"
										size="icon"
										className="md:hidden text-navy-700">
										<Menu className="h-6 w-6" />
										<span className="sr-only">Toggle menu</span>
									</Button>
								</SheetTrigger>
								<SheetContent
									side="left"
									className="w-[300px] sm:w-[400px] bg-gray-50">
									<nav className="flex flex-col gap-4">
										{categories.map((category) => (
											<Link
												key={category.name}
												href={`/category/${category.name.toLowerCase()}`}
												className="flex items-center space-x-2 text-lg text-navy-700 hover:text-amber-600 transition-colors">
												<category.icon className="h-6 w-6" />
												<span>{category.name}</span>
											</Link>
										))}
									</nav>
								</SheetContent>
							</Sheet>
							<img
								src="/assets/images/logo2.png"
								alt="Promotional Banner"
								className="w-[4.1rem] h-6 object-cover"
							/>
						</div>
						<nav className="hidden md:flex space-x-4">
							<Link
								href="/deals"
								className="hover:text-yellow-300 transition-colors">
								Deals
							</Link>
							<Link
								href="/electronics"
								className="hover:text-yellow-300 transition-colors">
								Electronics
							</Link>
							<Link
								href="/fashion"
								className="hover:text-yellow-300 transition-colors">
								Fashion
							</Link>
							<Link
								href="/books"
								className="hover:text-yellow-300 transition-colors">
								Books
							</Link>
						</nav>
						<div className="flex items-center space-x-4">
							<Link
								href="/cart"
								className="hover:text-yellow-300 transition-colors">
								<ShoppingCart className="h-6 w-6" />
							</Link>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant="ghost"
										size="icon"
										className="hover:text-yellow-300 transition-colors">
										<User className="h-6 w-6" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuItem>Profile</DropdownMenuItem>
									<DropdownMenuItem>Orders</DropdownMenuItem>
									<DropdownMenuItem>Sign Out</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
