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
        print += `        <div id="adminSearcResult" class="adminSearcResult" onclick="adminStoreUsrData(${i})">
            <div>
                <img src="${model.data.users.usr[i].picture}" id="adminSearchImg" class="adminSearchImg" onclick="adminStoreUsrData(${i})">
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
                <p>Status: ${p[i].missionStatus}</p>
            </div>
        </div>
        <hr><br>`
    }
    return print
}


