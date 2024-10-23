<<<<<<< Updated upstream
function profileView() {
    //model.app.pages = "userView";
    model.app.inView = /*HTML*/ `
    <div>${wprofileView()}</div>
    `;
=======
function profileView(){
    //model.app.pages = "userView";
    model.app.inView = /*HTML*/ `
    <div>${profileViewController()}</div>
    `
>>>>>>> Stashed changes
    updateView();
}
