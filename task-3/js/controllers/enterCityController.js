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
        let form = document.getElementById('enterCityForm');

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            let inputValue = form.cityName.value.toLowerCase();

            if (self.cities.includes(inputValue)) {
                if(self.model.removeCity(inputValue)) {
                    form.cityName.value = '';
                    self.robotMove();
                }
            } else {
                alert('City not found');
            }
        });
    }

    robotMove() {
        let self = this;

        let symbol = this.getLastSymbol(this.lastCity);

        let foundedCity = self.cities.find((city) => {
            if(city.startsWith(symbol)) {
                return city;
            }
        });

        if(!foundedCity) alert('ROBOT LOOSER');
        else self.model.removeCity(foundedCity);
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