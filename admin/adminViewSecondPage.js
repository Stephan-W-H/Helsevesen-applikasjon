//
//
//
//adminViewSecondPage();

function adminSecondPagePrint() {
    const user = model.data.users.adminSeconPage;

    let html = `
        <img src="${user.picture}">
        <p>Bruker ID: ${user.id}</p>
        <p>For navn: ${user.fname}</p>
        <p>Etter navn: ${user.lname}</p>
        <p>Kjønn: ${user.gender}</p>
        <p>E-post: ${user.email}</p>
        <p>Telefon: ${user.phone}</p>
        <p>Alder: ${user.age}</p>
        <p>Etnisitet: ${user.ethnicity}</p>
        <p>Fører kort: ${user.driverlicence}</p>
        <p>Sted: ${user.place}</p>
        <p>Iteresser: ${user.interest}</p>
        <p>Erfaring: ${user.exp}</p>
        <p>Tid: ${user.time}</p>
        <p>Reise: ${user.travel}</p>
        <p>Information: ${user.info}</p>
        <p>Oppdrag status: ${user.missionstatus}</p>
        <p>Oppdrag: ${user.mission}</p>
        <h2>Notater: </h2>
        <p>Notat id: ${user.note.noteId}</p>
        <p>Notat skrevet av: ${user.note.adminUsername}</p>
        <p>Notat: ${user.note.noteText}</p>
        `;
    //<div>${produceNote()}</div>
    return html;
}

function adminViewSecondPage() {
    model.app.page = "adminSecondPage";
    model.app.inView = `
    <div id="adminSecondPageMain">
        ${adminSecondPagePrint()}
        <hr><br>
        <div>
           <button>Slett Bruker</button>
           <button>Rediger</button>
           <button>Opdrag</button>
           <button onclick="adminNoteView()">Lag et notat</button>
           <button onclick="adminSwapPage()">Tilbake til forige side</button>
        </div>
    </div>

`;

    updateView();
}
