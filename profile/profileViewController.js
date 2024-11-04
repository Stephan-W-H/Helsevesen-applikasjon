function wprofileView(){
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
        
    `
    console.log(model.app.usrId)
    console.log(html)
    }
}
return html;
}
    
function kontaktInfo(){
    const user = model.data.users.usr
    
    const idOfUsr = model.app.usrId;
    const index = model.data.users.usr.findIndex((usr) => usr.id === idOfUsr);
    
    if (index !== -1) {
        <div>
        <div>${model.data.users.usr[index].fname}</div>
        <div>${model.data.users.usr[index].lname}</div>
        <div>${model.data.users.usr[index].gender}</div>
        <div>${model.data.users.usr[index].email}</div>
        <div>${model.data.users.usr[index].phone}</div>
        <div>${model.data.users.usr[index].age}</div>
        <div>${model.data.users.usr[index].ethnicity}</div>
        <div>${model.data.users.usr[index].driverLicence}</div>
        <div>${model.data.users.usr[index].place}</div>
        <div>${model.data.users.usr[index].interest}</div>
        <div>${model.data.users.usr[index].travel}</div>
        <div>${model.data.users.usr[index].picture}</div>
        <div>${model.data.users.usr[index].mission}</div>
        </div>
    }
}

function kvalifikiasjoner(){
    const user = model.data.users.usr
    
    const idOfUsr = model.app.usrId;
    const index = model.data.users.usr.findIndex((usr) => usr.id === idOfUsr);
    
    if (index !== -1) {
        <div>${model.data.users.usr[index].exp}</div>
    
    }

}

function sertifiseringer(){
    const user = model.data.users.usr
    
    const idOfUsr = model.app.usrId;
    const index = model.data.users.usr.findIndex((usr) => usr.id === idOfUsr);
    
    if (index !== -1) {
<div>${model.data.users.usr[index].info}</div>
    }
}

function sertifiseringer(){
    const user = model.data.users.usr
    
    const idOfUsr = model.app.usrId;
    const index = model.data.users.usr.findIndex((usr) => usr.id === idOfUsr);
    
    if (index !== -1) {

    }
}

function bio(){
    const user = model.data.users.usr
    
    const idOfUsr = model.app.usrId;
    const index = model.data.users.usr.findIndex((usr) => usr.id === idOfUsr);
    
    if (index !== -1) {

    }        
}

function rediger(){
    const user = model.data.users.usr
    
    const idOfUsr = model.app.usrId;
    const index = model.data.users.usr.findIndex((usr) => usr.id === idOfUsr);
    
    if (index !== -1) {

    }
}


function oppdrag(){
    const user = model.data.users.usr
    
    const idOfUsr = model.app.usrId;
    const index = model.data.users.usr.findIndex((usr) => usr.id === idOfUsr);
    
    if (index !== -1) {

    }
}



