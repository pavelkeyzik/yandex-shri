export class GameResultController {

    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.model.getLooser().subscribe((res) => {
            if(res !== undefined) this.view.render(res);
        });
    }

}