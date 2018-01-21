export class EnterCityController {

    constructor(view, model) {
        this.view = view;
        this.model = model;

        this.run();
    }

    run() {
        let citiesBlock = document.getElementById('enterCity');
        citiesBlock.innerHTML = this.view.render();

        this.addEvents();
    }

    addEvents() {
        let self = this;
        this.model.getCities()
            .subscribe((response) => self.cities = response.map((item) => item.toLowerCase()));

        let form = document.getElementById('enterCityForm');

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            let inputValue = form.cityName.value.toLowerCase();

            if (self.cities.includes(inputValue)) {
                self.model.removeCity(inputValue);
                form.cityName.value = '';
                console.log('ГОРОД УДАЛЁН');
            } else {
                console.log('ГОРОД НЕ НАЙДЕН');
            }
        });
    }
}