import AllProducts from "@components/Home/Products/allProducts";
import Category from "@components/Home/Products/category";
import Header from "@components/Home/header";
import Hero from "@components/Home/hero";
import Hero2 from "@components/Home/hero2";
import PopularProducts from "@components/Home/Products/popularProducts";
import Search from "@components/Home/Products/search";
import NewArrivals from "@components/Home/Products/newArrivals";
export default function Component() {
	return (
		<div className="min-h-screen bg-gray-100">
			{/* Header Navigation */}
			<Header />
			{/* Search and category */}
			<Search />
			{/* Hero Section / Promotional Banner */}
			<Hero />
			{/* Top-Rated Products Section */}
			<PopularProducts />
			{/* Shop by Category */}
			{/* <Category /> */}
			{/* newArrivals */}
			<NewArrivals />
			{/* All Products Section */}
			<AllProducts />
			{/* Footer */}
			<Hero2 />
		</div>
	);
}
