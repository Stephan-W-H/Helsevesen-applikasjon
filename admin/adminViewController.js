//
//
//
function adminViewController() {
    let html;
    for (let i = 0; i < model.data.users.usr.length; i++) {
        html += `
        <div id="adminSearcResult" class="adminSearcResult" onclick="adminViewSecondPage()">
            <div>
                <img src="${model.data.users.usr[i].picture}" id="adminSearchImg" class="adminSearchImg">
                <ul>
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
