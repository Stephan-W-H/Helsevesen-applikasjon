//
//
//
//adminView();
function adminView() {
    model.app.inView = `
    <div id="adminMain">
        <form id="adminSearch">
            <label for="search"></label>
            <input id="search" placeholder="Søk her">
        </form>
        <br><br>
        <div>
            ${adminViewController()}
        </div>
    </div>
`;

    updateView();
}
