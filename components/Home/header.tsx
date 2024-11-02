"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	Search,
	Menu,
	Package,
	MessageSquare,
	ChevronRight,
	X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetClose,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { getCategories } from "@/lib/data";

// Mock functions for user session and vendor status - replace these with your actual authentication logic
const checkUserSession = () => {
	// Simulating an async operation
	return new Promise((resolve) => {
		setTimeout(() => {
			// For demo purposes, we'll randomly decide if a session exists
			resolve(Math.random() > 0.5);
		}, 500);
	});
};

const checkVendorStatus = () => {
	// Simulating an async operation
	return new Promise((resolve) => {
		setTimeout(() => {
			// For demo purposes, we'll randomly decide if the user is a vendor
			resolve(Math.random() > 0.5);
		}, 500);
	});
};

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const [isVendorModalOpen, setIsVendorModalOpen] = useState(false);
	const [isProductsOpen, setIsProductsOpen] = useState(false);
	const [isMessagesOpen, setIsMessagesOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [categories, setCategories] = useState<any>([]);
	const [vendorName, setVendorName] = useState("");
	const [vendorEmail, setVendorEmail] = useState("");
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const [userSession, setUserSession] = useState(false);
	const [isVendor, setIsVendor] = useState(false);

	const fetchCategories = async () => {
		const fetchedCategories = await getCategories();
		setCategories(fetchedCategories);
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	const menuSections = [
		{ name: "Best Sellers", href: "/best-sellers" },
		{ name: "New Releases", href: "/new-releases" },
		{ name: "Today's Deals", href: "/deals" },
		{ name: "Customer Service", href: "/customer-service" },
	];

	const productMenuItems = [
		{ name: "My Listings", href: "/my-listings" },
		{ name: "Sold Items", href: "/sold-items" },
		{ name: "Create Listing", href: "/create-listing" },
		{ name: "Product Analytics", href: "/product-analytics" },
	];

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically send the loginEmail and loginPassword to your backend
		console.log("Login attempt:", { loginEmail, loginPassword });
		const sessionExists = await checkUserSession();
		setUserSession(sessionExists as any);
		setIsLoginModalOpen(false);
		// Reset form fields
		setLoginEmail("");
		setLoginPassword("");
		if (sessionExists) {
			const vendorStatus = await checkVendorStatus();
			setIsVendor(vendorStatus as any);
			if (!vendorStatus) {
				setIsVendorModalOpen(true);
			}
		}
	};

	const handleVendorRegistration = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically send the vendorName and vendorEmail to your backend
		console.log("Vendor Registration:", { vendorName, vendorEmail });
		setIsVendor(true);
		setIsVendorModalOpen(false);
		// Reset form fields
		setVendorName("");
		setVendorEmail("");
	};

	const handleIconClick = async (type: "messages" | "products") => {
		if (!userSession) {
			setIsLoginModalOpen(true);
			return;
		}
		if (!isVendor) {
			setIsVendorModalOpen(true);
			return;
		}
		if (type === "messages") {
			setIsMessagesOpen(true);
		} else {
			setIsProductsOpen(true);
		}
	};

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

					<div className="flex items-center space-x-4">
						<Button
							variant="ghost"
							size="icon"
							className="text-white hover:text-yellow-300 transition-colors flex flex-col items-center"
							onClick={() => handleIconClick("messages")}>
							<MessageSquare className="h-6 w-6" />
							<span className="text-xs mt-1">Messages</span>
						</Button>
						<Button
							variant="ghost"
							size="icon"
							className="text-white hover:text-yellow-300 transition-colors flex flex-col items-center"
							onClick={() => handleIconClick("products")}>
							<Package className="h-6 w-6" />
							<span className="text-xs mt-1">My Products</span>
						</Button>
					</div>
				</div>
			</div>

			<Dialog open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Log In</DialogTitle>
						<DialogDescription>
							Please log in to access your account.
						</DialogDescription>
					</DialogHeader>
					<form onSubmit={handleLogin}>
						<div className="grid gap-4 py-4">
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="login-email" className="text-right">
									Email
								</Label>
								<Input
									id="login-email"
									type="email"
									value={loginEmail}
									onChange={(e) => setLoginEmail(e.target.value)}
									className="col-span-3"
									required
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="login-password" className="text-right">
									Password
								</Label>
								<Input
									id="login-password"
									type="password"
									value={loginPassword}
									onChange={(e) => setLoginPassword(e.target.value)}
									className="col-span-3"
									required
								/>
							</div>
						</div>
						<DialogFooter>
							<Button type="submit">Log In</Button>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>

			<Dialog open={isVendorModalOpen} onOpenChange={setIsVendorModalOpen}>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Register as a Vendor</DialogTitle>
						<DialogDescription>
							Enter your details to register as a vendor and start selling your
							products.
						</DialogDescription>
					</DialogHeader>
					<form onSubmit={handleVendorRegistration}>
						<div className="grid gap-4 py-4">
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="vendor-name" className="text-right">
									Name
								</Label>
								<Input
									id="vendor-name"
									value={vendorName}
									onChange={(e) => setVendorName(e.target.value)}
									className="col-span-3"
									required
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="vendor-email" className="text-right">
									Email
								</Label>
								<Input
									id="vendor-email"
									type="email"
									value={vendorEmail}
									onChange={(e) => setVendorEmail(e.target.value)}
									className="col-span-3"
									required
								/>
							</div>
						</div>
						<DialogFooter>
							<Button type="submit">Register</Button>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>

			<Sheet open={isMessagesOpen} onOpenChange={setIsMessagesOpen}>
				<SheetContent side="right" className="w-[300px] sm:w-[400px]">
					<SheetHeader>
						<SheetTitle>Messages</SheetTitle>
					</SheetHeader>
					<div className="py-4">
						{/* Add your messages list component here */}
						<p>Your messages will appear here.</p>
					</div>
				</SheetContent>
			</Sheet>

			<Sheet open={isProductsOpen} onOpenChange={setIsProductsOpen}>
				<SheetContent side="right" className="w-[300px] sm:w-[400px]">
					<SheetHeader>
						<SheetTitle>My Products</SheetTitle>
					</SheetHeader>
					<ScrollArea className="h-[calc(100vh-100px)] pr-4">
						<div className="space-y-4 py-4">
							{productMenuItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="flex items-center justify-between py-2 text-sm hover:text-amber-600 transition-colors"
									onClick={() => setIsProductsOpen(false)}>
									<span>{item.name}</span>
									<ChevronRight className="h-4 w-4" />
								</Link>
							))}
						</div>
					</ScrollArea>
				</SheetContent>
			</Sheet>
		</header>
	);
}
