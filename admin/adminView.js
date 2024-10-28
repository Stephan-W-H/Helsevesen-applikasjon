//
//
//
//adminView();
function adminView() {
    model.app.inView = `
    <div id="adminMain">
        <form id="adminSearch">
            <label for="search"></label>
            <input id="search" placeholder="Søk her">
        </form>
        <br><br>
        <div>
            ${adminViewDispInfo()}
        </div>
    </div>
`;

    updateView();
}

function adminViewDispInfo() {
    let html;
    for (let i = 0; i < model.data.users.usr.length; i++) {
        html += `
        <div id="adminSearcResult" class="adminSearcResult" onclick="adminStoreUsrData(${i})">
            <div>
                <img src="${model.data.users.usr[i].picture}" id="adminSearchImg" class="adminSearchImg" onclick="adminStoreUsrData(${i})">
                <ul>
                    <li>ID: ${model.data.users.usr[i].id}</li>
                    <li>Navn: ${model.data.users.usr[i].fname}</li>
                    <li>Telefon: ${model.data.users.usr[i].phone}</li>
                    <li>Setd: ${model.data.users.usr[i].place}</li>
                </ul>
            </div>
            <hr>
            <div id="adminUsrBio" class="adminUsrBio">
                <p>Info: ${model.data.users.usr[i].info}</p>
                <p>Status: ${model.data.users.usr[i].missionStatus}</p>
            </div>
        </div>
        <hr><br>
        `;
    }
    return html;
}
