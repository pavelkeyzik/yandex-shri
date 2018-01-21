export class CitiesController {

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