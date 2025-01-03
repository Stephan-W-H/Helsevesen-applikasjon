function wprofileView() {
    let html = "";
    for (let i = 0; i < model.data.users.usr.length; i++) {
        if (model.app.usrId == model.data.users.usr[i].id) {
            let p = model.data.users.usr[i];

            html = /*HTML*/ `
        <div class="header">
        <div>${p.fname}</div>
        <div>${p.lname}</div>
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
            console.log(model.app.usrId);
            console.log(html);
        }
    }
    return html;
}

function kontaktInfo() {
    const user = model.data.users.usr;

    const idOfUsr = model.app.usrId;
    const index = model.data.users.usr.findIndex((usr) => usr.id === idOfUsr);

    if (index !== -1) {
        model.app.inView = `
        <div>
        <img src="${user[index].picture}">
        <div>${user[index].fname}</div>
        <div>${user[index].lname}</div>
        <div>${user[index].email}</div>
        <div>${user[index].age}</div>
        <div>${user[index].place}</div>
        <div>${user[index].phone}</div>
        <div>${user[index].gender}</div>
        <div>${user[index].ethnicity}</div>
        </div>
        `;
    }
    updateView();
}

function kvalifikiasjoner() {
    const user = model.data.users.usr;
    let html = "";

    const idOfUsr = model.app.usrId;
    const index = model.data.users.usr.findIndex((usr) => usr.id === idOfUsr);

    if (index !== -1) {
        model.app.inView = /*html*/ `
        <div>${user[index].exp}</div>

        `;
    }
    updateView();
}

function sertifiseringer() {
    const user = model.data.users.usr;
    let html = "";

    const idOfUsr = model.app.usrId;
    const index = model.data.users.usr.findIndex((usr) => usr.id === idOfUsr);

    if (index !== -1) {
        model.app.inView = `
        <div>${user[index].info}</div>
        <div>${user[index].driverLicence}</div>
        `;
    }
    updateView();
}

function bio() {
    const user = model.data.users.usr;
    let html = "";

    const idOfUsr = model.app.usrId;
    const index = model.data.users.usr.findIndex((usr) => usr.id === idOfUsr);

    if (index !== -1) {
        model.app.inView = /*html*/ `
        <div>${user[index].interest}</div>
        `;
    }
    updateView();
}

function rediger() {
    const user = model.data.users.usr;
    let html = "";

    const idOfUsr = model.app.usrId;
    const index = model.data.users.usr.findIndex((usr) => usr.id === idOfUsr);

    if (index !== -1) {
        model.app.inView = /*html*/ `
        <div>${user[index].picture}</div>
        <div>${user[index].fname}</div>
        <div>${user[index].lname}</div>
        <div>${user[index].email}</div>
        <div>${user[index].age}</div>
        <div>${user[index].place}</div>
        <div>${user[index].phone}</div>
        <div>${user[index].gender}</div>
        <div>${user[index].ethnicity}</div>
        <div>${user[index].interest}</div>
        <div>${user[index].mission}</div>
        <div>${user[index].travel}</div>
        <div>${user[index].info}</div>
        <div>${user[index].driverLicence}</div>
        `;
    }
    updateView();
}

function oppdrag() {
    const user = model.data.users.usr;
    model.app.inView = "";

    const idOfUsr = model.app.usrId;
    const index = model.data.users.usr.findIndex((usr) => usr.id === idOfUsr);

    if (index !== -1) {
        for (let i = 0; i < model.data.users.usr[index].mission.length; i++) {
            model.app.inView += /*html*/ `
        <div>${user[index].mission[i].missionStatus}</div>
        <div>${user[index].travel}</div>
        <button onclick="model.data.users.usr[model.data.users.usr.findIndex((usr) => usr.id === model.app.usrId)].mission[${i}].missionStatus = 'Aksepter', oppdrag()">Aksepter</button>
        <button onclick="model.data.users.usr[model.data.users.usr.findIndex((usr) => usr.id === model.app.usrId)].mission[${i}].missionStatus = 'Avslått', oppdrag()">Avslått</button>
        <button onclick="model.data.users.usr[model.data.users.usr.findIndex((usr) => usr.id === model.app.usrId)].mission[${i}].missionStatus = 'Fullført', oppdrag()">Fullført</button>
        `;
            console.log(index);
            console.log(i);
        }
    }
    updateView();
}
