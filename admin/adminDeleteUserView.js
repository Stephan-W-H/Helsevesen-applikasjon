//
//
//
function adminDeleteUserView() {
    model.app.inView = `
    <div>
        <h1>Er du sikker på at du vil slette brukeren?</h1>
        <p>Trykk på slett bruker knappen for å slette brukeren</p>
        <button onclick="adminDeleteUserController()">Slett bruker</button>
    </div>
    `;
    updateView();
}

function adminPostDeleteUserPage() {
    model.app.inView = `
    <div>
        <h1>Du har nå slettet en bruker:</h1>
        <h1>Id på bruker du slettet: ${model.data.users.adminSeconPage.id}</h1>
        <h1>Navn på bruker du slettet: <br>${model.data.users.adminSeconPage.fname} <br> ${model.data.users.adminSeconPage.lname}</h1>
        <h3>Skjedde dette ved en feiltagelse, kontakt it avdelingen!</h3>
        <button onclick="adminDeleteUserGoBackToMainAdminPage()">Gå til bake til hoved admin siden</button>
    </div>
`;
    updateView();
}
