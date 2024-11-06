function profileView() {
    model.app.pages = "userView";
    model.app.inView = /*HTML*/ `
    <div>${wprofileView()}</div>
    `;
    leftSideMenu();
    profileHeader();
    profileFooter();
    updateView();
}

function leftSideMenu() {
    const usrId = model.app.usrId;
    const index = model.data.users.usr.findIndex((usr) => usr.id === usrId);
    model.app.leftSideMenu = /*html*/ `
    <div class="sideButtons">
        <img class="profilepic" src="${model.data.users.usr[index].picture}">
        <div class="sideButton" onclick="kontaktInfo()">Kontakt info</div>
        <div class="sideButton" onclick="kvalifikiasjoner()">Kvalifikiasjoner</div>
        <div class="sideButton" onclick="sertifiseringer()">Sertifiseringer</div>
        <div class="sideButton" onclick="bio()">Bio</div>
        <div class="sideButton" onclick="editProfileView()">Rediger</div>
        <div class="sideButton" onclick="oppdrag()">Oppdrag</div>
    </div>
    `;
}

function profileHeader() {
    model.app.profileHeaderText =
        "Din innsats teller! Takk for at du gir av din tid til de som trenger det mest";
}

function profileFooter() {
    model.app.footer = /*html*/ `
    <div class="profileFooterText">Denne plattformen støtter eldreomsorg gjennom frivillig innsats. Sammen kan vi nå flere.</div>
    `;
}
