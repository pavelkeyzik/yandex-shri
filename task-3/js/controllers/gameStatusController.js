export class GameStatusController {

    constructor(view, model) {
        this.view = view;
        this.model = model;
        
        this.run();
    }

    run() {
        let viewContainer = document.getElementById('gameStatus');
        
        this.model.getLastCity().subscribe((response) => {
            this.view.render(viewContainer, response);
        });
    }

}