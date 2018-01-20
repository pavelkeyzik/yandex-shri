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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _citiesController = __webpack_require__(1);

var _citiesModel = __webpack_require__(2);

var _citiesView = __webpack_require__(3);

var citiesView = new _citiesView.CitiesView();
var citiesModel = new _citiesModel.CitiesModel();
var cities = new _citiesController.CitiesController(citiesView, citiesModel);

cities.run();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CitiesController = exports.CitiesController = function () {
    function CitiesController(view, model) {
        _classCallCheck(this, CitiesController);

        this.view = view;
        this.model = model;
    }

    _createClass(CitiesController, [{
        key: 'run',
        value: function run() {
            var data = this.model.getCities();
            var cities = document.getElementById('cities');

            cities.innerHTML = this.view.render(data);
        }
    }]);

    return CitiesController;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CitiesModel = exports.CitiesModel = function () {
    function CitiesModel() {
        _classCallCheck(this, CitiesModel);
    }

    _createClass(CitiesModel, [{
        key: 'getCities',
        value: function getCities() {
            return ['Анапа', 'Артём', 'Астрахань', 'Бакал', 'Белгород', 'Брянск', 'Великий Новгород', 'Владивосток', 'Волгоград', 'Горно-Алтайск', 'Гурьевск', 'Гусев', 'Дальнереченск', 'Данилов', 'Дзержинск', 'Екатеринбург', 'Елизово', 'Ершов', 'Железноводск', 'Жигулёвск', 'Жиздра', 'Заволжье', 'Заозёрск', 'Заречный', 'Иваново', 'Ижевск', 'Иркутск', 'Йошкар-Ола', 'Казань', 'Калининград', 'Калуга', 'Липецк', 'Липки', 'Лукоянов', 'Магадан', 'Магас', 'Майкоп', 'Находка', 'Нижневартовск', 'Нижний Новгород', 'Озёрск', 'Омск', 'Орёл', 'Пенза', 'Первоуральск', 'Пермь', 'Ростов-на-Дону', 'Ростов', 'Рязань', 'Санкт-Петербург', 'Саратов', 'Светлогорск', 'Тамбов', 'Тверь', 'Томск', 'Ульяновск', 'Урай', 'Уфа', 'Фролово', 'Фрязино', 'Фурманов', 'Хабаровск', 'Хадыженск', 'Ханты-Мансийск', 'Цивильск', 'Цимлянск', 'Чадан', 'Чапаевск', 'Чебоксары', 'Шадринск', 'Шали', 'Шарыпово', 'Электрогорск', 'Электросталь', 'Электроугли', 'Югорск', 'Южно-Сахалинск', 'Южноуральск', 'Якутск', 'Ярославль', 'Ясный'];
        }
    }]);

    return CitiesModel;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CitiesView = exports.CitiesView = function () {
    function CitiesView() {
        _classCallCheck(this, CitiesView);
    }

    _createClass(CitiesView, [{
        key: 'render',
        value: function render(cities) {
            var template = '';

            cities.forEach(function (city, index) {
                template += '<li>City #' + (index + 1) + ' - ' + city + '</li>';
            });

            return template;
        }
    }]);

    return CitiesView;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map