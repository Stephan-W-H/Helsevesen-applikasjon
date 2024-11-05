//
//
//

function adminStoreUsrData(storedData) {
    // Store usr data in adminSeconPage (temp storage)
    model.app.index = storedData
    model.data.users.adminSeconPage = {
        ...model.data.users.usr[storedData], // ... aka spread operator to copy form one array to another
        note: {
            noteId: model.data.users.usr[storedData].note?.noteId || [],
            adminUsername:
                model.data.users.usr[storedData].note?.adminUsername || [],
            noteText: model.data.users.usr[storedData].note?.noteText || [],
        },
    };

    model.input.adminInPut.selectedUsrId = model.data.users.adminSeconPage.id;
    model.app.page = "adminSecondPage";
    pageSwitch();
}


function missionIndicator()
{let html = ''
    for(let i = 0; i < model.data.users.usr[model.app.index].mission.length; i++)
    if(model.data.users.usr[model.app.index].mission[i].missionStatus == 'Akseptert')
        {html += `
            <p>Pasient: ${model.data.users.usr[model.app.index].mission[i].patientId}<p>
            Status:</br> ${model.data.users.usr[model.app.index].mission[i].missionStatus} 
            <div class="missionStatus" style="background-color: green"></div>` }
    else if (model.data.users.usr[model.app.index].mission[i].missionStatus == 'Tildelt') 
        {html += `
            <p>Pasient: ${model.data.users.usr[model.app.index].mission[i].patientId}<p>
            Status:</br> ${model.data.users.usr[model.app.index].mission[i].missionStatus} 
            <div class="missionStatus" style="background-color: yellow"></div>` }
    else if(model.data.users.usr[model.app.index].mission[i].missionStatus == 'Avslått')
        {html += `
            <p>Pasient: ${model.data.users.usr[model.app.index].mission[i].patientId}<p>
            Status:</br> ${model.data.users.usr[model.app.index].mission[i].missionStatus} 
            <div class="missionStatus" style="background-color: red;"></div>`}
    return html
}