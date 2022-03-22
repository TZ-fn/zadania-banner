export function pickRandomOffer(offers) {
  const pickedOffersIndexes = [];
  for (let i = 0; pickedOffersIndexes.length < 3; i++) {
    let randomOfferIndex = Math.floor(Math.random() * offers.length);
    if (!pickedOffersIndexes.includes(randomOfferIndex)) {
      pickedOffersIndexes.push(randomOfferIndex);
    }
  }
  return pickedOffersIndexes.map((index) => offers[index]);
}
