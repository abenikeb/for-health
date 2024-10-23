"use client";

import Image from "next/image";
import { Card, CardContent, CardContents } from "@/components/ui/card";
import { Button } from "@components/ui/button";

const allProducts = [
	{
		id: 5,
		name: "Bagels",
		price: 1299.99,
		image: "/assets/images/image_fx_ (1).jpg?height=200&width=200",
		category: "Bakery",
		location: "Adama",
		rating: 4.4,
		description: "Capture life's moments with exceptional clarity and detail.",
	},
	{
		id: 6,
		name: "Protein Powder",
		price: 249.99,
		image: "/assets/images/banner.jpg?height=200&width=200",
		category: "Health & Wellness",
		location: "Bahir Dar",
		rating: 4.3,
		description:
			"Stay connected and track your fitness with our latest smartwatch.",
	},
	{
		id: 1,
		name: "Organic Apples",
		price: 99.99,
		image: "/assets/images/product1.jpg?height=200&width=200",
		category: "Fruits & Vegetables",
		location: "Addis Ababa",
		rating: 4.5,
		description: "Fruits & Vegetables, perfect for on-the-go professionals.",
	},
	{
		id: 2,
		name: "Whole Milk",
		price: 99.99,
		image: "/assets/images/product2.jpg?height=200&width=200",
		category: "Dairy Products",
		location: "Adama",
		rating: 4.7,
		description: "Experience lightning-fast connectivity with our product.",
	},
	{
		id: 3,
		name: "Herbal Honey",
		price: 299.99,
		image: "/assets/images/image_fx_ (3).jpg?height=200&width=200",
		category: "Beverages",
		location: "Awash",
		rating: 4.6,
		description:
			"Immerse yourself in pure sound with advanced noise-cancelling technology.",
	},
	{
		id: 4,
		name: "Mixed Nuts",
		price: 1499.99,
		image: "/assets/images/product3.jpg?height=200&width=200",
		category: "Snacks",
		location: "Addis Ababa",
		rating: 4.8,
		description:
			"Experience stunning visuals with our latest 4K OLED technology.",
	},
	{
		id: 5,
		name: "Bagels",
		price: 1299.99,
		image: "/assets/images/product4.jpg?height=200&width=200",
		category: "Bakery",
		location: "Adama",
		rating: 4.4,
		description: "Capture life's moments with exceptional clarity and detail.",
	},
	{
		id: 6,
		name: "Protein Powder",
		price: 249.99,
		image: "/assets/images/banner1.jpg?height=200&width=200",
		category: "Health & Wellness",
		location: "Bahir Dar",
		rating: 4.3,
		description:
			"Stay connected and track your fitness with our latest smartwatch.",
	},
];

const AllProducts = () => {
	return (
		<section className="py-8 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl font-bold mb-4">All Products</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
					{allProducts.map((product) => (
						<div
							key={product.id}
							className="bg-white rounded-lg shadow-md overflow-hidden">
							<img
								src={product.image}
								alt={product.name}
								className="w-full h-32 object-cover"
							/>
							<div className="p-2">
								<h3 className="text-sm font-semibold truncate">
									{product.name}
								</h3>
								<p className="text-sm font-bold text-gray-800 mt-1">
									{product.price.toFixed(2)} ETB
								</p>
								<Button size="sm" className="w-full mt-2">
									Add to Cart
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AllProducts;
