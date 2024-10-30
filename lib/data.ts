import { Apple, Egg, Carrot, Milk, Fish } from "lucide-react";

export const getUserOrder = async () => {
	// Mock data for orders with more details
	const orders = [
		{
			id: "ORD001",
			date: "2024-10-20",
			total: 129.99,
			status: "Delivered",
			progress: 100,
			items: [
				{
					name: "Organic Apples",
					image: "/assets/images/product1.jpg?height=80&width=80",
					quantity: 1,
					price: 79.99,
				},
				{
					name: "Phone Case",
					image: "/assets/images/banner3_.jpg?height=80&width=80",
					quantity: 2,
					price: 25.0,
				},
			],
		},
		{
			id: "ORD002",
			date: "2024-10-18",
			total: 79.5,
			status: "Shipped",
			progress: 75,
			items: [
				{
					name: "Organic Honey",
					image: "/assets/images/product3.jpg?height=80&width=80",
					quantity: 1,
					price: 79.5,
				},
			],
		},
		{
			id: "ORD003",
			date: "2023-10-15",
			total: 199.99,
			status: "Processing",
			progress: 25,
			items: [
				{
					name: "Fresh Orange Juice",
					image: "/assets/images/product2.jpg?height=80&width=80",
					quantity: 1,
					price: 89.99,
				},
			],
		},
	];

	return orders;
};

export const getUserCart = async () => {
	// Mock data for orders with more details
	const carts = [
		{
			id: 1,
			name: "Organic Apples",
			price: 299.99,
			quantity: 1,
			image: "/assets/images/product1.jpg?height=100&width=100",
		},
		{
			id: 2,
			name: "Whole Milk",
			price: 199.99,
			quantity: 2,
			image: "/assets/images/product2.jpg?height=100&width=100",
		},
	];

	return carts;
};

export const getAllProducts = async () => {
	// Mock data for orders with more details
	const allProducts = [
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
			price: 799.99,
			image: "/assets/images/image_fx_ (2).jpg?height=200&width=200",
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
			location: "Awasa",
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
			description:
				"Capture life's moments with exceptional clarity and detail.",
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

	return allProducts;
};

export const getCategories = async () => {
	const categories = [
		{ name: "Fruits & Vegetables", icon: Apple },
		{ name: "Dairy Products", icon: Egg },
		{ name: "Beverages", icon: Carrot },
		{ name: "Snacks", icon: Fish },
		{ name: "Bakery", icon: Milk },
		{ name: "Wearables", icon: Apple },
		{ name: "Health", icon: Fish },
	];

	return categories;
};
