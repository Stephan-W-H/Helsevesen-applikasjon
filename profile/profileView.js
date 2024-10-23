function profileView() {
    //model.app.pages = "userView";
    model.app.inView = /*HTML*/ `
    <div>${wprofileView()}</div>
    `;
    updateView();
}
