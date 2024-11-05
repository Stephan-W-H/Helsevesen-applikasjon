//
//
//
//adminView();
function adminView() {
    model.app.inView = `
    <div id="adminMain">
        <form id="adminSearch">
            <label for="searching"></label>
            <input id="searching" onchange="search(this.value)" placeholder="Søk her">
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
        model.app.index = i
        html += `
        <div id="adminSearcResult" class="adminSearcResult" onclick="adminStoreUsrData(${i})">
            <div>
                <img src="${model.data.users.usr[model.app.index].picture}" id="adminSearchImg" class="adminSearchImg" onclick="adminStoreUsrData(${i})">
                <ul>
                    <li>ID: ${model.data.users.usr[model.app.index].id}</li>
                    <li>Navn: ${model.data.users.usr[model.app.index].fname}</li>
                    <li>Telefon: ${model.data.users.usr[model.app.index].phone}</li>
                    <li>Setd: ${model.data.users.usr[model.app.index].place}</li>
                </ul>
            </div>
            <hr>
            <div id="adminUsrBio" class="adminUsrBio">
                 <p>Info: ${model.data.users.usr[model.app.index].info}</p>
                ${missionIndicator()}
            </div>
        </div>
        <hr><br>
        `;
    }
    return html;
}
