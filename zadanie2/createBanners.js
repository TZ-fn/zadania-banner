import { formatOfferPrice } from "./formatOfferPrice.js";
import { pickRandomOffer } from "./pickRandomOffer.js";

export function createBanners(offers, container) {
  const offersArray = offers.map(({ imgURL, name, price, currency }) => {
    return `<div class="banner-container">
              <div class="banner-inner-container">
                <button type="button" class="banner-close-button" aria-label="Close this banner.">
                  <span class="banner-close-button__sign" aria-hidden="true">×</span>
                </button>
                <img src="${imgURL}" alt="" class="banner-image" />
                <p class="banner-name">${name}</p>
                <p class="banner-price">${formatOfferPrice(price, currency)}</p>
                <button type="button" class="banner-check-button">Check</button>
              </div>
              <div class="logo"><span class="logo-rtb">RTB</span>HOUSE</div>
            </div>`;
  });
  const pickedOffers = pickRandomOffer(offersArray);
  pickedOffers.map((offer) => {
    container.insertAdjacentHTML("beforeend", offer);
  });
}
