export class CitiesView {

    constructor() {}

    render(cities) {
        let template = '';

        cities.forEach((city, index) => {
            template += `<li>City #${ index + 1 } - ${ city }</li>`;
        });

        return template;
    }

}