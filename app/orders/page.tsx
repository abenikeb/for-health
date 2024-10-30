"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Package, ChevronRight, Search, ShoppingBag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { getUserOrder } from "@lib/data";

export default function OrdersPage() {
	const [orders, setOrders] = useState<any>([]);

	const fetchDataOrders = async () => {
		const userOrders = await getUserOrder();
		setOrders(userOrders);
	};

	useEffect(() => {
		fetchDataOrders();
	}, []);

	return (
		<div className="min-h-screen bg-gray-100">
			<header className="bg-brand-blue text-white p-4">
				<h1 className="text-2xl font-bold">My Orders</h1>
			</header>

			<main className="container mx-auto px-4 py-8">
				<div className="bg-white rounded-lg shadow-md p-6">
					<div className="flex items-center mb-6">
						<Package className="text-brand-orange mr-2" />
						<h2 className="text-xl font-semibold">Order History</h2>
					</div>

					<div className="mb-6">
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
							<Input
								type="search"
								placeholder="Search orders..."
								className="pl-10 w-full"
							/>
						</div>
					</div>

					<div className="space-y-8">
						{orders.map((order: any) => (
							<div
								key={order.id}
								className="border border-gray-200 rounded-lg p-6">
								<div className="flex items-center justify-between mb-4">
									<div>
										<p className="font-semibold text-brand-blue text-lg">
											{order.id}
										</p>
										<p className="text-sm text-gray-600">{order.date}</p>
									</div>
									<div className="text-right">
										<p className="font-semibold text-lg">
											${order.total.toFixed(2)}
										</p>

										<Badge
											variant={
												order.status === "Delivered"
													? "default"
													: order.status === "Shipped"
													? "secondary"
													: "outline"
											}
											className={
												order.status === "Delivered"
													? "bg-green-500 text-white"
													: order.status === "Shipped"
													? "bg-blue-500 text-white"
													: ""
											}>
											{order.status}
										</Badge>
									</div>
								</div>

								<div className="mb-4">
									<div className="flex items-center justify-between mb-2">
										<span className="text-sm font-medium">Order Progress</span>
										<span className="text-sm font-medium">
											{order.progress}%
										</span>
									</div>
									<Progress value={order.progress} className="w-full" />
								</div>

								<div className="space-y-4">
									{order.items.map((item: any, index: any) => (
										<div key={index} className="flex items-center space-x-4">
											<Image
												src={item.image}
												alt={item.name}
												width={80}
												height={80}
												className="rounded-md"
											/>
											<div className="flex-1">
												<p className="font-medium">{item.name}</p>
												<p className="text-sm text-gray-600">
													Quantity: {item.quantity}
												</p>
												<p className="text-sm font-medium">
													${item.price.toFixed(2)}
												</p>
											</div>
										</div>
									))}
								</div>

								<div className="mt-4 flex justify-end">
									<Button variant="outline" className="text-brand-blue">
										<ShoppingBag className="mr-2 h-4 w-4" />
										View Order Details
									</Button>
								</div>
							</div>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}
