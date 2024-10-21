//
//
//
function adminViewController() {
    let html;
    for (let i = 0; i < model.data.users.usr.length; i++) {
        html += `
        <div>
            <div>
                <img src="${model.data.users.usr[i].picture}">
                <ul>
                    <li>Navn: ${model.data.users.usr[i].fname}</li>
                    <li>Telefon: ${model.data.users.usr[i].phone}</li>
                    <li>Setd: ${model.data.users.usr[i].place}</li>
                </ul>
            </div>
            <hr>
            <div>
                <p>Info: ${model.data.users.usr[i].info}</p>
                <p>Status: ${model.data.users.usr[i].mission}</p>
            </div>
        </div>
        `;
        return html;
    }
}
