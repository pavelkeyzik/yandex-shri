import Rx from 'rxjs/Rx';

var cities = require('../data/cities.json');

export class CitiesModel {

    constructor() {
        this.cities = cities;
        this.citiesBehavior = new Rx.BehaviorSubject(cities);
    }

    getCities() {
        return this.citiesBehavior;
    }
    
    removeCity(name) {
        let response = false;

        this.cities.map((item, index) => {
            if(item.toLowerCase() == name) {
                this.cities.splice(index, 1);
                response = true;
                this.citiesBehavior.next(this.cities);
            }
        });

        return response;
    }

}