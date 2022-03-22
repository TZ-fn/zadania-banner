import { fetchData } from "./fetchData.js";
import { createBanners } from "./createBanners.js";

const bannersData = await fetchData();

const container = document.querySelector("#container");

createBanners(bannersData.offers, container);
