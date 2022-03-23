export function formatTime(days, hours, minutes, seconds) {
  function isSecondDigitOneOf234(number) {
    if (number === 13 || number === 14 || number === 15) {
      return false;
    }
    const secondDigit = Number(String(number).split("")[1]);
    return secondDigit === 2 || secondDigit === 3 || secondDigit === 4
      ? true
      : false;
  }

  const timeUnits = {
    hours: ["1 godzina", "godziny", "godzin"],
    minutes: ["1 minuta", "minuty", "minut"],
    seconds: ["1 sekunda", "sekundy", "sekund"],
  };

  function formatHoursMinutesDays(number, unit) {
    return number === 1
      ? `${unit[0]}`
      : number === 2 ||
        number === 3 ||
        number === 4 ||
        isSecondDigitOneOf234(number)
      ? `${number} ${unit[1]}`
      : `${number} ${unit[2]}`;
  }

  const formattedDays = days === 1 ? `1 dzień` : `${days} dni`;
  const formattedHours = formatHoursMinutesDays(hours, timeUnits.hours);
  const formattedMinutes = formatHoursMinutesDays(minutes, timeUnits.minutes);
  const formattedSeconds = formatHoursMinutesDays(seconds, timeUnits.seconds);

  return `${formattedDays}, ${formattedHours}, ${formattedMinutes}, ${formattedSeconds}`;
}
