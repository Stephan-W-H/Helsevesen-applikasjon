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
    
    <div class="items">Kontakt info</div>
    <div class="items">Kvalifikiasjoner</div>
    <div class="items">Sertifiseringer</div>
    <div class="items">Bio</div>
    <div class="items" onclick="editProfileView()">Rediger</div>
    <div class="items">Oppdrag</div>
    </div>
    `;
}

<<<<<<< HEAD

function profileHeader(){
    model.app.profileHeaderText = 'Din innsats teller! Takk for at du gir av din tid til de som trenger det mest';

=======
function profileHeader() {
    model.app.header = /*html*/ `
    <div>Din innsats teller! Takk for at du gir av din tid til de som trenger det mest.</div>
    `;
>>>>>>> b2b18d6 (edit user profile)
}

function profileFooter() {
    model.app.footer = /*html*/ `
    <div class="profileFooterText">Denne plattformen støtter eldreomsorg gjennom frivillig innsats. Sammen kan vi nå flere.</div>
    `;
}
