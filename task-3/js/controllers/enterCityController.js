export class EnterCityController {

    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.ignoreSymbols = ['ё', 'щ', 'ъ', 'ы', 'ь'];

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
        let first = true;
        let form = document.getElementById('enterCityForm');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            self.userMove(form, first);
            first = false;
        });
    }

    userMove(form, first) {
        let self = this;
        let inputValue = form.cityName.value.toLowerCase();

        console.log('SUK');

        if (self.cities.includes(inputValue)) {
            if(first) {
                console.log('ASADSd');
                self.model.removeCity(inputValue);
                form.cityName.value = '';
                self.robotMove();
            } else {
                if(inputValue[0].toLowerCase() === self.getLastSymbol(self.lastCity)) {
                    self.model.removeCity(inputValue);
                    form.cityName.value = '';
                    self.robotMove();

                    if(!self.checkCanFindCity()) {
                        alert('USER LOOSER');                        
                    }
                } else {
                    alert('First letter of city not valid');
                }
            }

        } else {
            alert('City not found');
        }
    }

    checkCanFindCity() {
        let self = this;
        let symbol = self.getLastSymbol();
        
        let city = self.cities.find((city) => {
            if(city.startsWith(symbol)) {
                return city;
            }
        });

        if(city) {
            return city;
        }

        return false;
    }

    robotMove() {
        let self = this;
        let city = self.checkCanFindCity();

        if(city) {
            self.model.removeCity(city);
        } else {
            alert('ROBOT LOOSER');
        }
    }

    getLastSymbol() {
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