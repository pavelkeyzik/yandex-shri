import './enterCityView.less';

export class EnterCityView {

    render() {
        return `
            <form id="enterCityForm" class="enter-city__form">
                <input name="cityName" autocomplete="off" placeholder="Enter city" id="enterCityInput">
                <button name="button">OK</button>
            </form>`;
    }

}