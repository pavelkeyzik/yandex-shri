import { CitiesController } from './controllers/citiesController';
import { CitiesModel } from './models/citiesModel';
import { CitiesView } from './views/citiesView';

let citiesView = new CitiesView();
let citiesModel = new CitiesModel();
let cities = new CitiesController(citiesView, citiesModel);

cities.run();