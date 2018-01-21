import './enterCityView.less';

export class EnterCityView {

    render() {
        return `
            <form id="enterCityForm" class="enter-city__form">
                <input class="enter-city__input" name="cityName" autocomplete="off" placeholder="Enter city" id="enterCityInput">
                <button class="enter-city__button" name="button">OK</button>
                <span class="enter-city__hint">or Enter</span>
            </form>`;
    }

}