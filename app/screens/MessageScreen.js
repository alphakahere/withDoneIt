import { FlatList } from "react-native";
import React, { useState } from "react";
import ListingItem from "../components/ListingItem";
import ListingItemSepartor from "../components/ListingItemSepartor";
import ListingItemDeleteAction from "../components/ListingItemDeleteAction";
const initialMessages = [
	{ id: 1, title: "T1", description: "Desc 1", image: require("../assets/mosh.jpg") },
	{ id: 2, title: "T2", description: "Desc 2", image: require("../assets/mosh.jpg") },
	{ id: 3, title: "T3", description: "Desc 3", image: require("../assets/mosh.jpg") },
	{ id: 4, title: "T4", description: "Desc 4", image: require("../assets/mosh.jpg") },
];
export default function MessageScreen() {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);
	const handleDelete = (message) => {
		// Delete the message from messages
		setMessages(messages?.filter((item) => message.id !== item.id));
	};
	return (
		<FlatList
			data={messages}
			keyExtractor={(message) => message?.id?.toString()}
			ItemSeparatorComponent={() => <ListingItemSepartor />}
			renderItem={({ item }) => (
				<ListingItem
					title={item?.title}
					subTitle={item.description}
					image={item.image}
					onPress={() => console.log("message", item)}
					renderRightActions={() => (
						<ListingItemDeleteAction onPress={() => handleDelete(item)} />
					)}
					refreshing={refreshing}
					onRefresh={() => {
						setMessages([
							{
								id: 3,
								title: "T3",
								description: "Desc 3",
								image: require("../assets/mosh.jpg"),
							},
						]);
					}}
				/>
			)}
		/>
	);
}
