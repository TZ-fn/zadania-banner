export function setActiveOffer() {
  const allOffers = [...document.querySelectorAll(".offer-container")];
  let activeOffer = 0;
  const maxOffers = 4;

  return setInterval(() => {
    if (activeOffer === 0) {
      allOffers[activeOffer].classList.remove("offer-active");
    } else {
      allOffers[activeOffer - 1].classList.remove("offer-active");
    }

    if (activeOffer === maxOffers) {
      activeOffer = 0;
    }

    allOffers[activeOffer].classList.add("offer-active");
    activeOffer++;
  }, 2000);
}
