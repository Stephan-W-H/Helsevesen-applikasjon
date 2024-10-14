//
//
//
adminView();
function adminView() {
app.innerHTML = `
<header id="adminHeader">
    <p>Admin Side</p>
</header>
<main id="adminMain">
    <form id="adminSearch">
        <label for="search"></label>
        <input id="search" placeholder="Søk her">
    </form>
    <br><br>
    <div id="adminSearcResult" class="adminSearcResult">
        <div>
            <img src="image/bilde1.jpg" id="adminSearchImg" class="adminSearchImg">
        </div>
        <div id="daminUsrInfo" class="daminUsrInfo">
            <ul>
                <li>Navn:</li>
                <li>Kontakt info:</li>
                <li>Sted:</li>
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
    <div id="adminSearcResult" class="adminSearcResult">
        <div>
            <img src="image/bilde2.jpg" id="adminSearchImg" class="adminSearchImg">
        </div>
        <div id="daminUsrInfo" class="daminUsrInfo">
            <ul>
                <li>Navn:</li>
                <li>Kontakt info:</li>
                <li>Sted:</li>
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
</main>
`;
}
