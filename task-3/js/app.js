import { CitiesController } from './controllers/citiesController';
import { CitiesModel } from './models/citiesModel';
import { CitiesView } from './views/citiesView';

import { EnterCityController } from './controllers/enterCityController';
import { EnterCityModel } from './models/enterCityModel';
import { EnterCityView } from './views/enterCityView';

let citiesView = new CitiesView();
let citiesModel = new CitiesModel();
let cities = new CitiesController(citiesView, citiesModel);

let enterCityModel = new EnterCityModel();
let enterCityView = new EnterCityView();
let enterCity = new EnterCityController(enterCityView, enterCityModel);

cities.run();
enterCity.run();