import './gameStatusView.less';

export class GameStatusView {

    render(container, lastCity) {
        container.innerHTML = `Last city:  <span class="game-status__city">${ lastCity }</span>`;
    }

}