"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Skeleton } from "@components/ui/skeleton";
import { useEffect, useState } from "react";
import { getAllProducts } from "@lib/data";

const PopularProducts = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [viewMode, setViewMode] = useState("grid");
	const productsPerPage = viewMode === "grid" ? 2 : 2;

	const [topRatedProducts, setTopRatedProducts] = useState<any>([]);

	const fetcProductItems = async () => {
		setIsLoading(true);
		const products = await getAllProducts();
		setTopRatedProducts(products);
		setIsLoading(false);
	};

	useEffect(() => {
		fetcProductItems();
	}, []);

	const handleProductClick = () => {
		router.push("/product/1");
	};

	useEffect(() => {
		// Simulate loading
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	const SkeletonCard = ({ viewMode }: any) => (
		<Card
			className={`flex ${
				viewMode === "list" ? "flex-row" : "flex-col"
			} overflow-hidden h-full`}>
			<div className={`${viewMode === "list" ? "w-1/3" : "w-full"}`}>
				<Skeleton
					className={`${viewMode === "list" ? "h-full" : "h-40"} w-full`}
				/>
			</div>
			<CardContent
				className={`p-4 flex flex-col justify-between flex-grow ${
					viewMode === "list" ? "w-2/3" : "w-full"
				}`}>
				<div>
					<Skeleton className="h-6 w-3/4 mb-2" />
					<div className="flex justify-between items-center mb-2">
						<Skeleton className="h-4 w-20" />
						<Skeleton className="h-4 w-24" />
					</div>
					{viewMode === "list" && <Skeleton className="h-4 w-full mb-2" />}
				</div>
				<div className="mt-4">
					<div className="flex items-center justify-between">
						<Skeleton className="h-6 w-20" />
						{/* <Skeleton className="h-4 w-10" /> */}
					</div>
				</div>
			</CardContent>
		</Card>
	);

	return (
		<section className="py-3 bg-white">
			<div className="container mx-auto pl-4 pr-0">
				<div className="flex flex-row justify-between items-start">
					<h2 className="text-xl font-bold mb-4">Top-Rated Products</h2>
					<Link href="/product" className="flex items-center justify-center">
						See More
						<ChevronRight className="ml-2 h-4 w-4" />
					</Link>
				</div>
				<div className="relative">
					<div className="flex overflow-x-auto space-x-2 pb-4">
						{isLoading
							? Array.from({ length: productsPerPage }).map((_, index) => (
									<SkeletonCard key={index} viewMode={viewMode} />
							  ))
							: topRatedProducts.map((product: any) => (
									<div key={product.id} className="flex-none w-36">
										<div className="bg-white relative rounded-lg shadow-md overflow-hidden">
											<img
												src={product.image}
												alt={product.name}
												onClick={handleProductClick}
												className="w-full h-28 object-cover"
											/>

											<div className="p-2">
												<h3 className="text-sm font-semibold truncate">
													{product.name}
												</h3>
												<div className="flex items-center mt-1">
													<Star className="h-4 w-4 text-yellow-400 fill-current" />
													<span className="ml-1 text-xs text-gray-600">
														{product.rating}
													</span>
												</div>
												<p className="text-sm font-bold text-gray-800 mt-1">
													{product.price.toFixed(2)} ETB
												</p>
											</div>
										</div>
									</div>
							  ))}
					</div>
					<div className="absolute top-1/2 left-0 transform -translate-y-1/2">
						<Button
							size="icon"
							variant="ghost"
							className="rounded-full bg-white shadow-md">
							<ChevronLeft className="h-6 w-6" />
						</Button>
					</div>
					<div className="absolute top-1/2 right-0 transform -translate-y-1/2">
						<Button
							size="icon"
							variant="ghost"
							className="rounded-full bg-white shadow-md">
							<ChevronRight className="h-6 w-6" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PopularProducts;
