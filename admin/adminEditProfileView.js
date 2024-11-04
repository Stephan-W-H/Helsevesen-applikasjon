//
//
//
function adminEditProfileView() {
    model.app.inView = `
    <div>
        <h1>Rediger bruker</h1>
        <form onsubmit="adminEditUsr(event)">
            <!-- <label for="adminEditUsrId">Bruker id:</label> -->
            <!-- <br> -->
            <!-- <input id="adminEditUsrId" placeholder="Bruker id"> -->
            <br>
            <label for="adminEditFname">Fornavn:</label>
            <br>
            <input id="adminEditFname" placeholder="Fornavn">
            <br>
            <label for="adminEditLname">Etter navn</label>
            <br>
            <input id="adminEditLname" placeholder="For navn">
            <br>
            <label for="adminEditPassword">Password</label>
            <br>
            <input id="adminEditPassword" placeholder="Password">
            <br>
            <label for="adminEditGender">Kjønn</label>
            <br>
            <input id="adminEditGender" placeholder="Kjønn">
            <br>
            <label for="adminEditEmail">Email</label>
            <br>
            <input id="adminEditEmail" placeholder="Email">
            <br>
            <label for="adminEditPhone">Telephone numer</label>
            <br>
            <input id="adminEditPhone" placeholder="Telephone numer">
            <br>
            <label for="adminEditAge">Alder</label>
            <br>
            <input id="adminEditAge" placeholder="Alder">
            <br>
            <label for="adminEditEthnicity">Etnisitet</label>
            <br>
            <input id="adminEditEthnicity" placeholder="Etnisitet">
            <br>
            <label for="adminEditDriverLicence">Fører kort</label>
            <br>
            <input id="adminEditDriverLicence" placeholder="Fører kort">
            <br>
            <label for="adminEditPlace">Sted</label>
            <br>
            <input id="adminEditPlace" placeholder="Sted">
            <br>
            <label for="adminEditInterest">Interesser</label>
            <br>
            <input id="adminEditInterest" placeholder="Interesser">
            <br>
            <label for="adminEditExp">Erfaring</label>
            <br>
            <input id="adminEditExp" placeholder="Erfaring">
            <br>
            <label for="adminEditDate">Dato</label>
            <br>
            <input id="adminEditDate" placeholder="Dato">
            <br>
            <label for="adminEditTravel">Reise</label>
            <br>
            <input id="adminEditTravel" placeholder="Reise">
            <br>
            <label for="adminEditInfo">Info</label>
            <br>
            <input id="adminEditInfo" placeholder="Info">
            <br>
            <!-- <label for="adminEditPicture">Bilde</label> -->
            <!-- <br> -->
            <!-- <input id="adminEditPicture" placeholder="Bilde"> -->
            <!-- <br> -->
            <input type="submit" value="Lagre endring">
        </form>
    </div>
`;
    updateView();
}
