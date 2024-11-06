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
    model.app.leftSideMenu = /*html*/ `
    <div class="itemsContainer">
        <img class="profilepic" src=''>
        <div class="items">Kontakt info</div>
        <div class="items">Kvalifikiasjoner</div>
        <div class="items">Sertifiseringer</div>
        <div class="items">Bio</div>
        <div class="items" onclick="editProfileView()">Rediger</div>
        <div class="items">Oppdrag</div>
    </div>
    `;
}

function profileHeader() {
    model.app.profileHeaderText = 'Din innsats teller! Takk for at du gir av din tid til de som trenger det mest';
}

function profileFooter() {
    model.app.footer = /*html*/ `
    <div class="profileFooterText">Denne plattformen støtter eldreomsorg gjennom frivillig innsats. Sammen kan vi nå flere.</div>
    `;
}
