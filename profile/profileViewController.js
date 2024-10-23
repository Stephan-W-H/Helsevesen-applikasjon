function profileView() {
    let html = "";
    for (let i = 0; i < model.data.users.usr.length; i++) {
        if (model.data.users.usr[i].id == model.app.usrId) {
            let p = model.data.users.usr[i];

            html = /*HTML*/ `
            <div class="header">
            <div>${p.fname}
            <div>${p.lname}
        </div>
    
        <div class="container">
        <div class="item1">Kontakt info</div>
        <div class="item2">Kvalifikiasjoner</div>
        <div class="item3">Sertifiseringer</div>
        <div class="item4">Bio</div>
        <div class="item5">Rediger</div>
        <div class="item6"></div>
        </div>
    
        <div class="bioText">
        <div>Her kommer Bio og Info</div>
        ${p.info}
        </div>
    
        <div class="foot">
        <div>Tilgjengelighet</div>
        ${p.date}
        </div>
            `;
        }
    }
    return html;
}
