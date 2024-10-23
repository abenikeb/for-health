"use client";

import { useState } from "react";
import {
	ArrowLeft,
	ArrowRight,
	CreditCard,
	Truck,
	CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const steps = ["Shipping", "Payment", "Review"];

export default function CheckoutPage() {
	const [currentStep, setCurrentStep] = useState(0);

	const nextStep = () =>
		setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
	const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

	return (
		<div className="container mx-auto px-4 py-8 my-8">
			<h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
			<div className="flex justify-center mb-8">
				{steps.map((step, index) => (
					<div key={step} className="flex items-center">
						<div
							className={`w-8 h-8 rounded-full flex items-center justify-center ${
								index <= currentStep
									? "bg-primary text-primary-foreground"
									: "bg-muted text-muted-foreground"
							}`}>
							{index + 1}
						</div>
						{index < steps.length - 1 && (
							<div
								className={`h-1 w-12 ${
									index < currentStep ? "bg-primary" : "bg-muted"
								}`}
							/>
						)}
					</div>
				))}
			</div>
			<Card className="max-w-2xl mx-auto">
				<CardHeader>
					<CardTitle>{steps[currentStep]}</CardTitle>
				</CardHeader>
				<CardContent>
					{currentStep === 0 && <ShippingForm />}
					{currentStep === 1 && <PaymentForm />}
					{currentStep === 2 && <ReviewOrder />}
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button
						onClick={prevStep}
						disabled={currentStep === 0}
						variant="outline">
						<ArrowLeft className="mr-2 h-4 w-4" /> Back
					</Button>
					<Button
						onClick={nextStep}
						disabled={currentStep === steps.length - 1}>
						{currentStep === steps.length - 1 ? "Place Order" : "Next"}
						{currentStep < steps.length - 1 && (
							<ArrowRight className="ml-2 h-4 w-4" />
						)}
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}

function ShippingForm() {
	return (
		<div className="space-y-4">
			<div className="grid grid-cols-2 gap-4">
				<div>
					<Label htmlFor="firstName">First Name</Label>
					<Input id="firstName" placeholder="John" />
				</div>
				<div>
					<Label htmlFor="lastName">Last Name</Label>
					<Input id="lastName" placeholder="Doe" />
				</div>
			</div>
			<div>
				<Label htmlFor="address">Address</Label>
				<Input id="address" placeholder="123 Main St" />
			</div>
			<div className="grid grid-cols-2 gap-4">
				<div>
					<Label htmlFor="city">City</Label>
					<Input id="city" placeholder="New York" />
				</div>
				<div>
					<Label htmlFor="zipCode">ZIP Code</Label>
					<Input id="zipCode" placeholder="10001" />
				</div>
			</div>
			<div>
				<Label htmlFor="country">Country</Label>
				<Select>
					<SelectTrigger id="country">
						<SelectValue placeholder="Select a country" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="us">United States</SelectItem>
						<SelectItem value="ca">Canada</SelectItem>
						<SelectItem value="uk">United Kingdom</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
}

function PaymentForm() {
	return (
		<div className="space-y-4">
			<RadioGroup defaultValue="card">
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="card" id="card" />
					<Label htmlFor="card">CBE Credit Card</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="paypal" id="paypal" />
					<Label htmlFor="paypal">PayPal</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="paypal" id="paypal" />
					<Label htmlFor="paypal">Amole, Dashn Bank</Label>
				</div>
			</RadioGroup>
			<div>
				<Label htmlFor="cardNumber">Card Number</Label>
				<Input id="cardNumber" placeholder="1234 5678 9012 3456" />
			</div>
			<div className="grid grid-cols-2 gap-4">
				<div>
					<Label htmlFor="expiryDate">Expiry Date</Label>
					<Input id="expiryDate" placeholder="MM/YY" />
				</div>
				<div>
					<Label htmlFor="cvv">CVV</Label>
					<Input id="cvv" placeholder="123" />
				</div>
			</div>
		</div>
	);
}

function ReviewOrder() {
	const orderItems = [
		{ name: "Organic Apples", price: 299.99, quantity: 1 },
		{ name: "Whole Milk", price: 199.99, quantity: 2 },
	];

	const subtotal = orderItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	const tax = subtotal * 0.1;
	const total = subtotal + tax;

	return (
		<div className="space-y-4">
			<div>
				<h3 className="font-semibold mb-2">Order Summary</h3>
				{orderItems.map((item, index) => (
					<div key={index} className="flex justify-between items-center py-2">
						<span>
							{item.name} x {item.quantity}
						</span>
						<span>{(item.price * item.quantity).toFixed(2)} Birr</span>
					</div>
				))}
				<Separator className="my-2" />
				<div className="flex justify-between items-center py-2">
					<span>Subtotal</span>
					<span>{subtotal.toFixed(2)} Birr</span>
				</div>
				<div className="flex justify-between items-center py-2">
					<span>Tax</span>
					<span>{tax.toFixed(2)} Birr</span>
				</div>
				<div className="flex justify-between items-center py-2 font-semibold">
					<span>Total</span>
					<span>{total.toFixed(2)} Birr</span>
				</div>
			</div>
			<div>
				<h3 className="font-semibold mb-2">Shipping Address</h3>
				<p>Abebe Kebede</p>
				<p>Megenagn City Mall</p>
				<p>Megenagn City Mall 10001</p>
				<p>Addis Ababa, Ethiopia</p>
			</div>
			<div>
				<h3 className="font-semibold mb-2">Payment Method</h3>
				<p>Credit Card ending in 3456</p>
			</div>
		</div>
	);
}
