function profileView(){
    model.app.pages = 'userView';
    model.app.inView = /*HTML*/ `
    ${profileView()}
    `
    updateView();
}
    