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
    <div id="adminSearcResult" class="adminSearcResult" onclick="adminViewSecondPage()">
        <div id="adminUsrInfo" class="adminUsrInfo">
        <div>
            <img src="${model.data.users.usr[0].picture}" id="adminSearchImg" class="adminSearchImg">
        </div>
            <ul>
                <li>Navn: ${model.data.users.usr[0].fname}</li>
                <li>Kontakt info: ${model.data.users.usr[0].phone}</li>
                <li>Sted: ${model.data.users.usr[0].place}</li>
            </ul>
        </div>
        <hr>
        <div id="adminUsrBio" class="adminUsrBio">
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.<br>
                Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.<br>
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.<br>
                Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl.<br>
                <div>Status</div>
            </p>
        </div>
    </div>
    <br>
    <div id="adminSearcResult" class="adminSearcResult" onclick="adminViewSecondPage()">
<div>
        <div id="adminUsrInfo" class="adminUsrInfo">
        <div>
            <img src="${model.data.users.usr[1].picture}" id="adminSearchImg" class="adminSearchImg">
        </div>
            <ul>
                <li>Navn: ${model.data.users.usr[1].fname}</li>
                <li>Kontakt info: ${model.data.users.usr[1].phone}</li>
                <li>Sted: ${model.data.users.usr[1].place}</li>
            </ul>
        </div>
</div>
        <hr>
        <div id="adminUsrBio" class="adminUsrBio">
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.<br>
                Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.<br>
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.<br>
                Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl.<br>
                <div>Status</div>
            </p>
        </div>
    </div>
</div>
`;
    updateView();
}
