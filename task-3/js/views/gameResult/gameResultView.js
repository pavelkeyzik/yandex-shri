import './gameResultView.less';

export class GameResultView {

    render(data) {
        let body = document.body;
        let dialog = document.createElement('div');
        let looser = '';

        if(data.looser) {
            looser = 'YOU';
        } else {
            looser = 'ROBOT';
        }

        let userWriteString = '';
        data.usersCities.forEach((element) => {
            userWriteString += `<li>${ element }</li>`;
        });

        let robotWriteString = '';
        data.robotsCities.forEach((element) => {
            robotWriteString += `<li>${ element }</li>`;
        });

        dialog.innerHTML = `
            <div class="game-result">
                <div class="game-result__title">${ looser } LOOSER</div>
                <div class="game-result__data">
                    <div>
                        <h2>YOU WRITE</h2>
                        ${ userWriteString }
                    </div>
                    <div>
                        <h2>ROBOT WRITE</h2>
                        ${ robotWriteString }
                    </div>
                </div>
            </div>
        `;

        body.appendChild(dialog);
        console.log('RENDER', data);
    }

}