//
//
//
function editProfileView() {
    model.app.inView = `
    <h1>Rediger din informasjon</h1>
    <form onsubmit="editProfileController(event)">
        <label for="usrFname">Fornavn: </label>
        <br>
        <input id="usrFname" placeholder="Fornavn">
        <br>
        <label for="usrLname">Etter navn: </label>
        <br>
        <input id="usrLname" placeholder="Etter navn">
        <br>
        <label for="usrPassword">Passord: </label>
        <br>
        <input id="usrPassword" placeholder="Passord">
        <br>
        <label for="usrGender">Kjønn: </label>
        <br>
        <input id="usrGender" placeholder="Kjønn">
        <br>
        <label for="usrEmail">Email: </label>
        <br>
        <input id="usrEmail" placeholder="Email">
        <br>
        <label for="usrTelephone">Telephone numer: </label>
        <br>
        <input id="usrTelephone" placeholder="Telephone">
        <br>
        <label for="usrAge">Alder: </label>
        <br>
        <input id="usrAge" placeholder="Alder">
        <br>
        <label for="usrEthnicity">Etnisitet: </label>
        <br>
        <input id="usrEthnicity" placeholder="Etnisitet">
        <br>
        <label for="usrEditDriverLicence">Fører kort: </label>
        <br>
        <input id="usrEditDriverLicence" placeholder="Fører kort">
        <br>
        <label for="usrPlace">Sted: </label>
        <br>
        <input id="usrPlace" placeholder="Sted">
        <br>
        <label for="usrInterest">Interesser: </label>
        <br>
        <input id="usrInterest" placeholder="Interesser">
        <br>
        <label for="usrExp">Erfaring: </label>
        <br>
        <input id="usrExp" placeholder="Erfaring">
        <br>
        <label for="usrDate">Dato: </label>
        <br>
        <input id="usrDate" placeholder="Dato">
        <br>
        <label for="usrTravel">Reise: </label>
        <br>
        <input id="usrTravel" placeholder="Reise">
        <br>
        <label for="usrinfo">Info: </label>
        <br>
        <input id="usrinfo" placeholder="Info">
        <br>
        <input type="submit" value="Lagre endringer">
        <hr>
    </form>
    `;
    updateView();
}
