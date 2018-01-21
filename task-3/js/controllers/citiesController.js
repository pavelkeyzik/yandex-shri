export class CitiesController {

    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.run();
    }

    run() {
        let self = this;
        let citiesBlock = document.getElementById('cities');

        this.model.getCities().subscribe(response => {
            self.cities = response;
            citiesBlock.innerHTML = self.view.render(self.cities);
        });
    }
}