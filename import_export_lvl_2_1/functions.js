const filterCitiesWithMoreThan100K = (data) => data.filter(city => city.population > 100000);
const filterCitiesWithLessThan100K = (data) => data.filter(city => city.population <= 100000);

export { filterCitiesWithMoreThan100K, filterCitiesWithLessThan100K };
