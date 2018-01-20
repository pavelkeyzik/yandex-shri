export class EnterCityController {

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