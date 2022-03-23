import { countdown } from "./countdown.js";

const endDateContainer = document.querySelector("#end-date");
const counterContainer = document.querySelector("#counter-number");

const endDate = new Date("2022-04-23 12:00:00");
const dateNow = Date.now();

const endDateFormatted = new Intl.DateTimeFormat("pl-PL", {
  timeStyle: "long",
  dateStyle: "short",
}).format(endDate);

endDateContainer.append(endDateFormatted);

const timer = setInterval(() => countdown(endDate, counterContainer), 1000);

if (endDate - dateNow <= 0) {
  clearInterval(timer);
  counterContainer.textContent = "Czas promocji upłynął...";
}
