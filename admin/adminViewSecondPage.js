//
//
//
//adminViewSecondPage();

function adminViewSecondPage() {
    model.app.inView = `
    <div id="adminSecondPageMain">
        ${adminSecondPageController()}
        <hr><br>
        <div>
           <button>Slett Bruker</button>
           <button>Rediger</button>
           <button>Opdrag</button>
           <button>Lag et notat</button>
           <button onclick="adminView()">Tilbake til forige side</button>
        </div>
    </div>

`;

    updateView();
}
