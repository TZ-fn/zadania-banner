export function formatOfferPrice(price, currency) {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  }).format(price);
}
