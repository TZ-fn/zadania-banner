export async function fetchData() {
  const data = await fetch("http://rekrutacjartb.pl/developer/banner.json");
  const bannersData = await data.json();
  return bannersData;
}
