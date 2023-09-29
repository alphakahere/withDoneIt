import client from "./client";

const endpoint = "/products?limit=24";

const getListings = () => client.get(endpoint);

export default {
	getListings,
};
