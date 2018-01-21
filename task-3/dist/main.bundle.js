/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_less__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_citiesController__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_citiesModel__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_cities_citiesView__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_enterCityController__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_enterCityModel__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_enterCity_enterCityView__ = __webpack_require__(7);










let citiesView = new __WEBPACK_IMPORTED_MODULE_3__views_cities_citiesView__["a" /* CitiesView */]();
let citiesModel = new __WEBPACK_IMPORTED_MODULE_2__models_citiesModel__["a" /* CitiesModel */]();
let cities = new __WEBPACK_IMPORTED_MODULE_1__controllers_citiesController__["a" /* CitiesController */](citiesView, citiesModel);

let enterCityModel = new __WEBPACK_IMPORTED_MODULE_5__models_enterCityModel__["a" /* EnterCityModel */]();
let enterCityView = new __WEBPACK_IMPORTED_MODULE_6__views_enterCity_enterCityView__["a" /* EnterCityView */]();
let enterCity = new __WEBPACK_IMPORTED_MODULE_4__controllers_enterCityController__["a" /* EnterCityController */](enterCityView, enterCityModel);

cities.run();
enterCity.run();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class CitiesController {

    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    run() {
        let data = this.model.getCities();
        let cities = document.getElementById('cities');

        cities.innerHTML = this.view.render(data);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = CitiesController;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class CitiesModel {

    constructor() {}

    getCities() {
        return [
            'Анапа',
            'Артём',
            'Астрахань',
            'Бакал',
            'Белгород',
            'Брянск',
            'Великий Новгород',
            'Владивосток',
            'Волгоград',
            'Горно-Алтайск',
            'Гурьевск',
            'Гусев',
            'Дальнереченск',
            'Данилов',
            'Дзержинск',
            'Екатеринбург',
            'Елизово',
            'Ершов',
            'Железноводск',
            'Жигулёвск',
            'Жиздра',
            'Заволжье',
            'Заозёрск',
            'Заречный',
            'Иваново',
            'Ижевск',
            'Иркутск',
            'Йошкар-Ола',
            'Казань',
            'Калининград',
            'Калуга',
            'Липецк',
            'Липки',
            'Лукоянов',
            'Магадан',
            'Магас',
            'Майкоп',
            'Находка',
            'Нижневартовск',
            'Нижний Новгород',
            'Озёрск',
            'Омск',
            'Орёл',
            'Пенза',
            'Первоуральск',
            'Пермь',
            'Ростов-на-Дону',
            'Ростов',
            'Рязань',
            'Санкт-Петербург',
            'Саратов',
            'Светлогорск',
            'Тамбов',
            'Тверь',
            'Томск',
            'Ульяновск',
            'Урай',
            'Уфа',
            'Фролово',
            'Фрязино',
            'Фурманов',
            'Хабаровск',
            'Хадыженск',
            'Ханты-Мансийск',
            'Цивильск',
            'Цимлянск',
            'Чадан',
            'Чапаевск',
            'Чебоксары',
            'Шадринск',
            'Шали',
            'Шарыпово',
            'Электрогорск',
            'Электросталь',
            'Электроугли',
            'Югорск',
            'Южно-Сахалинск',
            'Южноуральск',
            'Якутск',
            'Ярославль',
            'Ясный'
        ]
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = CitiesModel;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__citiesView_less__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__citiesView_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__citiesView_less__);


class CitiesView {

    constructor() {}

    render(cities) {
        let template = '';

        cities.forEach((city, index) => {
            template += `<li>City #${ index + 1 } - ${ city }</li>`;
        });

        return template;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = CitiesView;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class EnterCityController {

    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    run() {
        let cities = document.getElementById('enterCity');
        cities.innerHTML = this.view.render();
        
        this.addEvents();
    }

    addEvents() {
        let self = this;
        self.cities = this.model.getCities().map((item) => item.toLowerCase());

        let form = document.getElementById('enterCityForm');
    
        form.addEventListener('submit', function () {
            if(self.cities.includes(form.cityName.value.toLowerCase())) {
                console.log('Ok');
            } else {
                console.log('City not found..');
            }
        });
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = EnterCityController;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class EnterCityModel {

    getCities() {
        return [
            'Анапа',
            'Артём',
            'Астрахань',
            'Бакал',
            'Белгород',
            'Брянск',
            'Великий Новгород',
            'Владивосток',
            'Волгоград',
            'Горно-Алтайск',
            'Гурьевск',
            'Гусев',
            'Дальнереченск',
            'Данилов',
            'Дзержинск',
            'Екатеринбург',
            'Елизово',
            'Ершов',
            'Железноводск',
            'Жигулёвск',
            'Жиздра',
            'Заволжье',
            'Заозёрск',
            'Заречный',
            'Иваново',
            'Ижевск',
            'Иркутск',
            'Йошкар-Ола',
            'Казань',
            'Калининград',
            'Калуга',
            'Липецк',
            'Липки',
            'Лукоянов',
            'Магадан',
            'Магас',
            'Майкоп',
            'Находка',
            'Нижневартовск',
            'Нижний Новгород',
            'Озёрск',
            'Омск',
            'Орёл',
            'Пенза',
            'Первоуральск',
            'Пермь',
            'Ростов-на-Дону',
            'Ростов',
            'Рязань',
            'Санкт-Петербург',
            'Саратов',
            'Светлогорск',
            'Тамбов',
            'Тверь',
            'Томск',
            'Ульяновск',
            'Урай',
            'Уфа',
            'Фролово',
            'Фрязино',
            'Фурманов',
            'Хабаровск',
            'Хадыженск',
            'Ханты-Мансийск',
            'Цивильск',
            'Цимлянск',
            'Чадан',
            'Чапаевск',
            'Чебоксары',
            'Шадринск',
            'Шали',
            'Шарыпово',
            'Электрогорск',
            'Электросталь',
            'Электроугли',
            'Югорск',
            'Южно-Сахалинск',
            'Южноуральск',
            'Якутск',
            'Ярославль',
            'Ясный'
        ]
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = EnterCityModel;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enterCityView_less__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enterCityView_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__enterCityView_less__);


class EnterCityView {

    render() {
        return `
            <form id="enterCityForm" class="enter-city__form">
                <input name="cityName" autocomplete="off" placeholder="Enter city" id="enterCityInput">
                <button name="button">OK</button>
            </form>`;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = EnterCityView;


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map