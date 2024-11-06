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
        <h2>Oppdrag</h2>
        ${printUserMissions()}
        <h2>Notater: </h2>
        <p>${adminProduceNote()}</p>
        <!-- <p>Notat id: ${user.note.noteId}</p> -->
        <!-- <p>Notat skrevet av: ${user.note.adminUsername}</p> -->
        <!-- <p>Notat: ${user.note.noteText}</p> -->
        `;

    return html;
}

function adminViewSecondPage() {
    model.app.page = "adminSecondPage";
    model.app.inView = `
    <div id="adminSecondPageMain">
        ${adminSecondPagePrint()}
        <hr><br>

    </div>

`;
    buttonsSidebarAdmin();
    updateView();
}

function buttonsSidebarAdmin() {
    model.app.leftSideMenu = /*html*/ `  
        <div class="sideButtons">
            <div onclick="adminDeleteUserView()" class="sideButton">Slett Bruker</div>
            <div onclick="adminEditProfileView()" class="sideButton">Rediger</div>
            <div onclick="adminMissionView()" class="sideButton">Oppdrag</div>
            <div onclick="adminNoteView()" class="sideButton">Lag et notat</div>
            <div onclick="model.app.leftSideMenu = '', adminSwapPage()" class="sideButton">Tilbake</div>
        </div>
    `;
}

function adminProduceNote() {
    const usr = model.data.users.adminSeconPage;
    let html = "";

    if (usr.note.noteText.length > 0) {
        for (let i = 0; i < usr.note.noteText.length; i++) {
            html += `
            <div>
                <p>Notat ID: ${usr.note.noteId[i]}</p>
                <p>Skrevet av: ${usr.note.adminUsername[i]}</p>
                <p>Notat: ${usr.note.noteText[i]}</p>
            </div>
            `;
        }
    } else {
        html += `
        <p>Ingen notater tilgjengelig.</p>
        `;
    }
    return html;
}
