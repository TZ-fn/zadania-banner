import { formatOfferPrice } from "./formatOfferPrice.js";
import { pickRandomOffer } from "./pickRandomOffer.js";

export function createOffers(offers, container) {
  const offersArray = offers.map(({ imgURL, price, currency }) => {
    return `<div class="offer-container">
              <img src='${imgURL}' alt="" class="offer-image" />
              <p class="offer-price">${formatOfferPrice(price, currency)}</p>
            </div>`;
  });
  const pickedOffers = pickRandomOffer(offersArray);
  pickedOffers.map((offer) => {
    container.insertAdjacentHTML("beforeend", offer);
  });
}
