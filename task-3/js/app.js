import '../main.less';

import { CitiesController } from './controllers/citiesController';
import { CitiesModel } from './models/citiesModel';
import { CitiesView } from './views/cities/citiesView';

import { EnterCityController } from './controllers/enterCityController';
import { EnterCityView } from './views/enterCity/enterCityView';

let citiesView = new CitiesView();
let citiesModel = new CitiesModel();
let cities = new CitiesController(citiesView, citiesModel);

let enterCityView = new EnterCityView();
let enterCity = new EnterCityController(enterCityView, citiesModel);

cities.run();
enterCity.run();
