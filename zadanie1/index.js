import { fetchData } from "./fetchData.js";
import { createOffers } from "./createOffers.js";

const bannersData = await fetchData();

const container = document.querySelector("#container");

createOffers(bannersData.offers, container);
