export class EnterCityController {

    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.ignoreSymbols = ['ё', 'щ', 'ъ', 'ы', 'ь'];
        this.whoMove = true; // Чей ход true - пользователь, false - компьютер
        this.first = true;

        this.model.getCities()
            .subscribe((response) => this.cities = response.map((item) => item.toLowerCase()));

        this.model.getLastCity()
            .subscribe((response) => this.lastCity = response);
        this.run();
    }

    run() {
        let citiesBlock = document.getElementById('enterCity');
        citiesBlock.innerHTML = this.view.render();

        this.addEvents();
    }

    addEvents() {
        let self = this;
        let form = document.getElementById('enterCityForm');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            self.userMove(form);
        });
    }

    userMove(form) {
        let self = this;
        let inputValue = form.cityName.value.toLowerCase();

        if (self.cities.includes(inputValue) && self.first) {
            self.model.removeCity(inputValue, self.whoMove);
            form.cityName.value = '';
            self.first = false;
            self.robotMove();
        } else if (self.cities.includes(inputValue) && !self.first) {
            if (inputValue[0].toLowerCase() === self.getLastSymbol(self.lastCity)) {
                self.model.removeCity(inputValue, self.whoMove);
                form.cityName.value = '';
                self.first = false;
                self.robotMove();
            } else {
                alert('First letter of city not valid');
            }
        } else {
            alert('Нет такого города');
        }
    }

    checkCanFindCity() {
        let self = this;
        let symbol = self.getLastSymbol();

        let city = self.cities.find((city) => {
            if (city.startsWith(symbol)) {
                return city;
            }
        });

        if (city) {
            return city;
        } else if (self.whoMove == true) {
            alert('USER LOOOSER');
        } else if (self.whoMove == false) {
            alert('ROBOT LOOOSER');
        }
    }

    robotMove() {
        let self = this;
        self.whoMove = false;
        let city = self.checkCanFindCity();

        if (city) {
            self.model.removeCity(city, self.whoMove);
            self.whoMove = true;
            self.checkCanFindCity();
        }
    }

    getLastSymbol() {
        let symbol = '';

        for (let i = this.lastCity.length - 1; i >= 0; i--) {
            if (!this.ignoreSymbols.includes(this.lastCity[i].toLowerCase())) {
                symbol = this.lastCity[i].toLowerCase();
                break;
            }
        }

        return symbol;
    }

    getLastSymbol(string) {
        let symbol = '';

        for(let i = this.lastCity.length - 1; i >= 0; i--) {
            if(!this.ignoreSymbols.includes(this.lastCity[i].toLowerCase())) {
                symbol = this.lastCity[i].toLowerCase();
                break;
            }
        }

        return symbol;
    }
}