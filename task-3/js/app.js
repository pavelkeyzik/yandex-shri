import '../main.less';

import { CitiesController } from './controllers/citiesController';
import { CitiesModel } from './models/citiesModel';
import { CitiesView } from './views/cities/citiesView';

import { EnterCityController } from './controllers/enterCityController';
import { EnterCityView } from './views/enterCity/enterCityView';
import { GameStatusView } from './views/gameStatus/gameStatusView';
import { GameStatusController } from './controllers/gameStatusController';
import { GameResultView } from './views/gameResult/gameResultView';
import { GameResultController } from './controllers/gameResultController';

let citiesView = new CitiesView();
let citiesModel = new CitiesModel();
let cities = new CitiesController(citiesView, citiesModel);

let enterCityView = new EnterCityView();
let enterCity = new EnterCityController(enterCityView, citiesModel);

let gameStatusView = new GameStatusView();
let gameStatus = new GameStatusController(gameStatusView, citiesModel);

let gameResultView = new GameResultView();
let gameResult = new GameResultController(gameResultView, citiesModel);