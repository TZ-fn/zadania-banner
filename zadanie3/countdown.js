import { formatTime } from "./formatTime.js";

export function countdown(endDate, container) {
  const currentDate = Date.now();
  const difference = endDate - currentDate;

  const seconds = Math.floor((difference / 1000) % 60);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  container.textContent = formatTime(days, hours, minutes, seconds);
}
