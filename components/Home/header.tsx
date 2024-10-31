"use client";

import { useState, FormEvent, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, ShoppingCart, User, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetClose,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getCategories } from "@/lib/data";
import Account from "@/components/Home/account";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isAccountOpen, setIsAccountOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [categories, setCategories] = useState<any>([]);

	const fetchCategories = async () => {
		const fetchedCategories = await getCategories();
		setCategories(fetchedCategories);
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	const handleSearch = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Searching for:", searchQuery);
	};

	const menuSections = [
		{ name: "Best Sellers", href: "/best-sellers" },
		{ name: "New Releases", href: "/new-releases" },
		{ name: "Today's Deals", href: "/deals" },
		{ name: "Customer Service", href: "/customer-service" },
	];

	const accountMenuItems = [
		{ name: "Your Account", href: "/account" },
		{ name: "Your Orders", href: "/orders" },
		{ name: "Your Wish List", href: "/wishlist" },
		{ name: "Your Recommendations", href: "/recommendations" },
	];

	return (
		<header className="bg-[#232f3f] sticky top-0 z-50 w-full backdrop-blur text-white">
			<div className="container mx-auto px-4 py-2">
				<div className="flex items-center justify-between">
					<div className="flex items-end space-x-2">
						<Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
							<SheetTrigger asChild>
								<Button variant="ghost" size="icon" className="text-white">
									<Menu className="h-6 w-6" />
									<span className="sr-only">Toggle menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent
								side="left"
								className="w-[300px] sm:w-[400px] bg-white">
								<ScrollArea className="h-full">
									<div className="flex flex-col gap-6 p-6">
										<Link
											href="/"
											className="flex items-center space-x-2"
											onClick={() => setIsMenuOpen(false)}>
											<Image
												src="/assets/images/logo3.png"
												alt="Logo"
												width={80}
												height={30}
												className="object-contain"
											/>
										</Link>
										<nav className="space-y-6">
											<div className="space-y-3">
												<h3 className="font-semibold text-lg text-gray-900">
													Shop By Category
												</h3>
												{categories.map((category: any) => (
													<Link
														key={category.name}
														href={`/category/${category.value.toLowerCase()}`}
														className="flex items-center justify-between text-sm text-gray-600 hover:text-amber-600 transition-colors"
														onClick={() => setIsMenuOpen(false)}>
														<span className="flex items-center space-x-2">
															<category.icon className="h-5 w-5" />
															<span>{category.name}</span>
														</span>
														<ChevronRight className="h-4 w-4" />
													</Link>
												))}
											</div>
											<div className="space-y-3">
												<h3 className="font-semibold text-lg text-gray-900">
													Programs & Features
												</h3>
												{menuSections.map((section) => (
													<Link
														key={section.name}
														href={section.href}
														className="flex items-center justify-between text-sm text-gray-600 hover:text-amber-600 transition-colors"
														onClick={() => setIsMenuOpen(false)}>
														<span>{section.name}</span>
														<ChevronRight className="h-4 w-4" />
													</Link>
												))}
											</div>
										</nav>
									</div>
								</ScrollArea>
							</SheetContent>
						</Sheet>
						<Link href="/">
							<Image
								src="/assets/images/logo2.png"
								alt="Logo"
								width={65}
								height={20}
								className="object-contain"
							/>
						</Link>
					</div>
					<form
						onSubmit={handleSearch}
						className="hidden md:flex flex-1 max-w-xl mx-4">
						<Input
							type="search"
							placeholder="Search products..."
							className="w-full"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
						<Button type="submit" className="ml-2">
							<Search className="h-4 w-4" />
						</Button>
					</form>
					<div className="flex items-center space-x-4">
						<Link
							href="/cart"
							className="text-white hover:text-yellow-300 transition-colors">
							<ShoppingCart className="h-6 w-6" />
						</Link>
						<Sheet open={isAccountOpen} onOpenChange={setIsAccountOpen}>
							<SheetTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="text-white hover:text-yellow-300 transition-colors">
									<User className="h-6 w-6" />
								</Button>
							</SheetTrigger>
							<SheetContent
								side="right"
								className="w-[300px] sm:w-[400px] bg-white">
								<ScrollArea className="h-full">
									<div className="flex flex-col gap-6 pt-6">
										<h2 className="font-semibold text-xl text-gray-900">
											Your Account
										</h2>
										<Account />
									</div>
								</ScrollArea>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
}
