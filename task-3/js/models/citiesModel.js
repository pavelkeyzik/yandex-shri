import Rx from 'rxjs/Rx';

var cities = require('../data/cities.json');

export class CitiesModel {

    constructor() {
        this.cities = cities;
        this.citiesBehavior = new Rx.BehaviorSubject(cities);
        this.usersCities = [];
        this.lastCity = new Rx.BehaviorSubject('Начинай');
    }

    getCities() {
        return this.citiesBehavior;
    }

    getUsersCities() {
        return this.usersCities;
    }

    getLastCity() {
        return this.lastCity;
    }
    
    removeCity(name) {
        let response = false;

        this.cities.map((item, index) => {
            if(item.toLowerCase() == name) {
                this.lastCity.next(item);
                this.usersCities.push(item);
                this.cities.splice(index, 1);
                response = true;
                this.citiesBehavior.next(this.cities);
            }
        });

        return response;
    }

}