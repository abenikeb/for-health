"use client";

import { useState } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Conversation = {
	id: string;
	user: {
		name: string;
		avatar: string;
	};
	lastMessage: string;
	timestamp: Date;
	unread: boolean;
};

type Message = {
	id: string;
	sender: "user" | "other";
	content: string;
	timestamp: Date;
};

const conversations: Conversation[] = [
	{
		id: "1",
		user: {
			name: "Alice Smith",
			avatar: "/placeholder.svg?height=40&width=40",
		},
		lastMessage: "Hi, is this item still available?",
		timestamp: new Date("2023-06-10T10:30:00"),
		unread: true,
	},
	{
		id: "2",
		user: {
			name: "Bob Johnson",
			avatar: "/placeholder.svg?height=40&width=40",
		},
		lastMessage: "Thanks for the quick response!",
		timestamp: new Date("2023-06-09T15:45:00"),
		unread: false,
	},
	{
		id: "3",
		user: {
			name: "Carol Williams",
			avatar: "/placeholder.svg?height=40&width=40",
		},
		lastMessage: "Can you provide more details about the product?",
		timestamp: new Date("2023-06-08T09:15:00"),
		unread: true,
	},
];

const messages: Message[] = [
	{
		id: "1",
		sender: "other",
		content: "Hi, is this item still available?",
		timestamp: new Date("2023-06-10T10:30:00"),
	},
	{
		id: "2",
		sender: "user",
		content: "Yes, it's still available. Are you interested in purchasing?",
		timestamp: new Date("2023-06-10T10:35:00"),
	},
	{
		id: "3",
		sender: "other",
		content: "Great! Can you tell me more about its condition?",
		timestamp: new Date("2023-06-10T10:40:00"),
	},
	{
		id: "4",
		sender: "user",
		content:
			"The item is in excellent condition. It's only been used a few times and has no visible wear or damage.",
		timestamp: new Date("2023-06-10T10:45:00"),
	},
];

export default function MessagesPage() {
	const [selectedConversation, setSelectedConversation] =
		useState<Conversation | null>(null);
	const [newMessage, setNewMessage] = useState("");

	const handleSendMessage = () => {
		if (newMessage.trim() !== "") {
			// Here you would typically send the message to your backend
			console.log("Sending message:", newMessage);
			setNewMessage("");
		}
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">Messages</h1>
			<div className="flex flex-col md:flex-row gap-8">
				<div className="w-full md:w-1/3">
					<h2 className="text-xl font-semibold mb-4">Conversations</h2>
					<ScrollArea className="h-[600px]">
						{conversations.map((conversation) => (
							<div
								key={conversation.id}
								className={`flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-100 ${
									selectedConversation?.id === conversation.id
										? "bg-gray-100"
										: ""
								}`}
								onClick={() => setSelectedConversation(conversation)}>
								<Avatar>
									<AvatarImage
										src={conversation.user.avatar}
										alt={conversation.user.name}
									/>
									<AvatarFallback>
										{conversation.user.name.charAt(0)}
									</AvatarFallback>
								</Avatar>
								<div className="flex-1">
									<div className="flex justify-between items-baseline">
										<h3 className="font-semibold">{conversation.user.name}</h3>
										<span className="text-sm text-gray-500">
											{format(conversation.timestamp, "MMM d")}
										</span>
									</div>
									<p className="text-sm text-gray-600 truncate">
										{conversation.lastMessage}
									</p>
								</div>
								{conversation.unread && (
									<div className="w-3 h-3 bg-blue-500 rounded-full"></div>
								)}
							</div>
						))}
					</ScrollArea>
				</div>
				<div className="flex-1">
					{selectedConversation ? (
						<div className="flex flex-col h-[600px]">
							<div className="flex items-center gap-4 p-4 border-b">
								<Avatar>
									<AvatarImage
										src={selectedConversation.user.avatar}
										alt={selectedConversation.user.name}
									/>
									<AvatarFallback>
										{selectedConversation.user.name.charAt(0)}
									</AvatarFallback>
								</Avatar>
								<h2 className="text-xl font-semibold">
									{selectedConversation.user.name}
								</h2>
							</div>
							<ScrollArea className="flex-1 p-4">
								{messages.map((message) => (
									<div
										key={message.id}
										className={`flex ${
											message.sender === "user"
												? "justify-end"
												: "justify-start"
										} mb-4`}>
										<div
											className={`max-w-[70%] p-3 rounded-lg ${
												message.sender === "user"
													? "bg-blue-500 text-white"
													: "bg-gray-200 text-gray-800"
											}`}>
											<p>{message.content}</p>
											<span className="text-xs mt-1 block text-right">
												{format(message.timestamp, "h:mm a")}
											</span>
										</div>
									</div>
								))}
							</ScrollArea>
							<div className="p-4 border-t">
								<form
									onSubmit={(e) => {
										e.preventDefault();
										handleSendMessage();
									}}
									className="flex gap-2">
									<Input
										type="text"
										placeholder="Type a message..."
										value={newMessage}
										onChange={(e) => setNewMessage(e.target.value)}
										className="flex-1"
									/>
									<Button type="submit">
										<Send className="h-4 w-4 mr-2" />
										Send
									</Button>
								</form>
							</div>
						</div>
					) : (
						<div className="flex items-center justify-center h-[600px] bg-gray-100 rounded-lg">
							<p className="text-gray-500">
								Select a conversation to start messaging
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
