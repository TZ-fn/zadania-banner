import { fetchData } from "./fetchData.js";
import { createOffers } from "./createOffers.js";
import { setActiveOffer } from "./setActiveOffer.js";

const bannersData = await fetchData();

const container = document.querySelector("#container");

createOffers(bannersData.offers, container);

setActiveOffer();
