function searchView()
{
    model.app.inView = /*html*/ `
    <input type="text" onchange="search(this.value)" placeholder="search for user">

    <div>${printReslut()}</div>`
    updateView()
}

function search(input)
{
    let result = []
    for(let i = 0; i< model.data.users.usr.length; i++){
        if      (Object.values(model.data.users.usr[i]).includes(input))
                {result.push(model.data.users.usr[i])}
        else if (Object.values(model.data.users.usr[i].interest).includes(input))
                {result.push(model.data.users.usr[i])}
        else if (Object.values(model.data.users.usr[i].driverLicence).includes(input))
                {result.push(model.data.users.usr[i])}

    console.log(result)
}
 model.input.searchResult = result
 searchView()
}

function printReslut()
{
    let p = model.input.searchResult
    let print = ''
    for(let i = 0; i< model.input.searchResult.length; i++)
    {
        model.app.index = i
        print += `        <div id="adminSearcResult" class="adminSearcResult" onclick="adminStoreUsrDataSearchResult(${i})">
            <div>
                <img src="${model.input.searchResult[i].picture}" id="adminSearchImg" class="adminSearchImg" onclick="adminStoreUsrData(${i})">
                <ul>
                    <li>ID: ${p[i].id}</li>
                    <li>Navn: ${p[i].fname}</li>
                    <li>Telefon: ${p[i].phone}</li>
                    <li>Setd: ${p[i].place}</li>
                </ul>
            </div>
            <hr>
            <div id="adminUsrBio" class="adminUsrBio">
                <p>Info: ${p[i].info}</p>
                <p>Status: ${missionIndicatorForSearch()}</p>
            </div>
        </div>
        <hr><br>`
    }
    return print
}

function missionIndicatorForSearch()
{let html = ''
    for(let i = 0; i < model.input.searchResult[model.app.index].mission.length; i++)
    if(model.input.searchResult[model.app.index].mission[i].missionStatus == 'Akseptert')
        {html += `
            <p>Pasient: ${model.input.searchResult[model.app.index].mission[i].patientId}<p>
            Status:</br> ${model.input.searchResult[model.app.index].mission[i].missionStatus} 
            <div class="missionStatus" style="background-color: green"></div>` }
    else if (model.input.searchResult[model.app.index].mission[i].missionStatus == 'Tildelt') 
        {html += `
            <p>Pasient: ${model.input.searchResult[model.app.index].mission[i].patientId}<p>
            Status:</br> ${model.input.searchResult[model.app.index].mission[i].missionStatus} 
            <div class="missionStatus" style="background-color: yellow"></div>` }
    else if(model.input.searchResult[model.app.index].mission[i].missionStatus == 'Avslått')
        {html += `
            <p>Pasient: ${model.input.searchResult[model.app.index].mission[i].patientId}<p>
            Status:</br> ${model.input.searchResult[model.app.index].mission[i].missionStatus} 
            <div class="missionStatus" style="background-color: red;"></div>`}
    else if(model.input.searchResult[model.app.index].mission[i].missionStatus == 'Fullført')
        {html += `
            <p>Pasient: ${model.input.searchResult[model.app.index].mission[i].patientId}<p>
            Status:</br> ${model.input.searchResult[model.app.index].mission[i].missionStatus} 
            <div class="missionStatus" style="background-color: black;"></div>`}
    return html
}

function adminStoreUsrDataSearchResult(storedData) {
    // Store usr data in adminSeconPage (temp storage)
    model.app.index = storedData
    model.data.users.adminSeconPage = {
        ...model.input.searchResult[storedData], // ... aka spread operator to copy form one array to another
        note: {
            noteId: model.input.searchResult[storedData].note?.noteId || [],
            adminUsername:
            model.input.searchResult[storedData].note?.adminUsername || [],
            noteText: model.input.searchResult[storedData].note?.noteText || [],
        },
    };

    model.input.adminInPut.selectedUsrId = model.data.users.adminSeconPage.id;
    model.app.page = "adminSecondPage";
    pageSwitch();
}

