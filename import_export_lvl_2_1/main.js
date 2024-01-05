import data from './data.js';

import { filterCitiesWithMoreThan100K, filterCitiesWithLessThan100K } from './functions.js';

// Filtere Städte mit mehr als 100.000 Einwohnern
const citiesMoreThan100K = filterCitiesWithMoreThan100K(data);
console.log('Städte mit mehr als 100.000 Einwohnern:', citiesMoreThan100K);

// Filtere Städte mit weniger als oder gleich 100.000 Einwohnern
const citiesLessThan100K = filterCitiesWithLessThan100K(data);
console.log('Städte mit weniger als oder gleich 100.000 Einwohnern:', citiesLessThan100K);
