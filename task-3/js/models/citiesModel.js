import Rx from 'rxjs/Rx';

var cities = require('../data/cities.json');

export class CitiesModel {

    constructor() {
        this.cities = cities;
        this.citiesBehavior = new Rx.BehaviorSubject(cities);
        this.looser = new Rx.BehaviorSubject();
        this.usersCities = [];
        this.robotsCities = [];
        this.lastCity = new Rx.BehaviorSubject('Начинай');
    }

    getCities() {
        return this.citiesBehavior;
    }

    getUsersCities() {
        return this.usersCities;
    }

    getRobotsCities() {
        return this.robotsCities;
    }

    getLastCity() {
        return this.lastCity;
    }

    gameResult(looser) {
        this.looser.next({
            looser: looser,
            usersCities: this.usersCities,
            robotsCities: this.robotsCities
        });
    }
    
    getLooser() {
        return this.looser;
    }

    removeCity(name, who) {
        let response = false;

        this.cities.map((item, index) => {
            if(item.toLowerCase() == name) {
                this.lastCity.next(item);

                // If who == true - it's user else it's robot
                if(who) {
                    this.usersCities.push(item);
                } else {
                    this.robotsCities.push(item);
                }

                this.cities.splice(index, 1);
                response = true;
                this.citiesBehavior.next(this.cities);
            }
        });

        return response;
    }

}