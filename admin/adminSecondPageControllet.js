//
//
//
function adminSecondPageController() {
    const usr = model.data.users.adminSeconPage;
    usr.note.adminUsername = [];
    usr.note.noteId = [];
    usr.note.noteText = [];
}

function adminSwapPage() {
    adminSecondPageController();
    model.app.page = "adminView";
    pageSwitch();
}

function printUserMissions()
{
    let html = '';
    for(let i = 0; i < model.data.users.usr[model.app.index].mission.length; i++) 
        {
            html += `
                <div>${model.data.users.usr[model.app.index].mission[i].patientId}</div>
                <div>${model.data.users.usr[model.app.index].mission[i].missionStatus}</div>
                <div>${model.data.users.usr[model.app.index].mission[i].location}</div>
                <div>${model.data.users.usr[model.app.index].mission[i].duration}</div>
                <div>${model.data.users.usr[model.app.index].mission[i].information}</div></br>
            `
        }
    return html
}