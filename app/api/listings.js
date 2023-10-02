import client from "./client";

const endpoint = "/products";

const getListings = () => client.get(`${endpoint}?limit=10`);
const addListing = (data) => client.post(endpoint, data);

export default {
	getListings,
	addListing,
};
