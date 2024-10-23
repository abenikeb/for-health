import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const featuredProducts = [
	{
		id: 1,
		name: "Ultra-Slim Laptop",
		price: 999.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Laptops",
	},
	{
		id: 2,
		name: "5G Smartphone",
		price: 799.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Smartphones",
	},
	{
		id: 3,
		name: "Noise-Cancelling Headphones",
		price: 299.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Audio",
	},
	{
		id: 4,
		name: "4K OLED TV",
		price: 1499.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "TVs",
	},
	{
		id: 5,
		name: "Mirrorless Camera",
		price: 1299.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Cameras",
	},
	{
		id: 6,
		name: "Smartwatch",
		price: 249.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Wearables",
	},
	{
		id: 7,
		name: "Gaming Console",
		price: 499.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Gaming",
	},
	{
		id: 8,
		name: "Wireless Earbuds",
		price: 159.99,
		image: "/placeholder.svg?height=200&width=200",
		category: "Audio",
	},
];
const FeaturedProduct = () => {
	return (
		<section className="py-12">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center mb-8">
					<h2 className="text-3xl font-bold">Featured Products</h2>
					<Button variant="outline" asChild>
						<Link href="/product">
							See More
							<ChevronRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
				<div className="relative">
					<div className="flex overflow-x-auto pb-4 -mx-4 px-4 space-x-4 scrollbar-hide">
						{featuredProducts.map((product) => (
							<Card key={product.id} className="flex-shrink-0 w-[200px]">
								<CardContent className="flex flex-col items-center p-4">
									<Image
										src={product.image}
										alt={product.name}
										width={150}
										height={150}
										className="mb-2 rounded-md"
									/>
									<h3 className="font-semibold text-sm mb-1 text-center">
										{product.name}
									</h3>
									<Badge className="mb-1">{product.category}</Badge>
									<p className="text-sm text-muted-foreground mb-2">
										${product.price.toFixed(2)}
									</p>
									<Button size="sm" className="w-full">
										Add to Cart
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedProduct;
