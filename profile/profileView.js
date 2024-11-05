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
    <img class="">
    <div onclick="kontaktInfo()" class="items">Kontakt info</div>
    <div onclick="kvalifikiasjoner()" class="items">Kvalifikiasjoner</div>
    <div onclick="sertifiseringer()" class="items">Sertifiseringer</div>
    <div onclick="bio()" class="items">Bio</div>
    <div onclick="rediger()" class="items" onclick="editProfileView()">Rediger</div>
    <div onclick="oppdrag()" class="items">Oppdrag</div>
    </div>
    `;
}

function profileHeader() {
<<<<<<< HEAD
    model.app.header = /*html*/ `
    <div class="headerDiv">Din innsats teller! Takk for at du gir av din tid til de som trenger det mest.</div>
    `;
=======
    model.app.profileHeaderText = 'Din innsats teller! Takk for at du gir av din tid til de som trenger det mest';
   
>>>>>>> 9e6067d60f34b4e4181e151b47e778a0fd86f399
}

function profileFooter() {
    model.app.footer = /*html*/ `
    <div class="profileFooterText">Denne plattformen støtter eldreomsorg gjennom frivillig innsats. Sammen kan vi nå flere.</div>
    `;
}
