function creatAccountView() {
    let p = model.input.registration
    model.app.inView = /*HTML*/ 
    `
    <div class="topText">Registrering</div>
    <div class="accountRegBox">
    <div class="containerDiv">
    <label for="firstName">Fornavn:</label>
    <input id="firstName" type="text" onchange="p.firstname = this.value">

    <label for="lastName">Etternavn:</label>
    <input id="lastName" type="text" onchange="p.lastname = this.value">

    <label for="gender">Kjønn:</label>
    <select id="gender" onchange="p.gender = this.value">
        <option value="Dame">Dame</option>
        <option value="Mann">Mann</option>
        <option value="Ikke-Binær">Ikke-Binær</option>
    </select>
    

    <label for="E-mail">Epost:</label>
    <input id="E-mail" type="email" placeholder="abc@abc.com" onchange="p.email = this.value"><br>
    <label for="password">Epost:</label>
    <input id="password" type="password" placeholder="********" onchange="p.password = this.value"><br>
    <label for="city">By:</label>
    <input id="city" type="text" onchange="p.place = this.value">

    <label for="number">Telefonnummer:</label>
    <input id="number" type="tel" onchange="p.phone = this.value">

    <label for="age">Alder:</label>
    <input id="age" type="text" onchange="p.age = this.value">

    <label for="ethnicity">Etnisitet:</label>
    <input id="ethnicity" type="text" onchange="p.ethnicity = this.value"><br>
    </div>

    <div class="containerDiv">
    <label for="licens">Førerkort Klasser:</label>
    <select id="licens" onchange="p.driverLicence = this.value">
    <option value="M"> M Moped</option>
    <option value="A1">A1 lett motorsykkel</option>
    <option value="A">A Motorsykkel</option>
    <option value="B">B</option>
    <option value="B96">B96 Automat</option>
    <option value="BE">BE B med henger</option>
    <option value="D1">D1 Minibuss</option>
    <option value="D">D Buss</option>
    </select>

    <label for="hobby">Hobbyer:</label>
    <select id="hobby" onchange="p.interest = this.value">
    <option></option>
    ${creatHobbyOptions()}
    </select>
    <label for="hobbyInput">Eller Skriv Her</label>
    <input id="hobbyinput" type="text" onchange="addHobby(this.value)">

    <label for="education">Utdanning/Kurs</label>
    <input id="education" type="text" onchange="p.exp = this.value"><br>

    <label for="availebilety">Tilgjengelighet</label>
    <input id="availebilety" type="date" onchange="">

    <label for="about">Om Deg:</label>
    <input id="about" type="text" onchange="p.info = this.value">

    <label for="pic">Link til bilde:</label>
    <input id="pic" type="text" onchange="p.picture = this.value">

    <label for="travelTime">Reisetid:</label>
    <input id="travelTime" type="number" placeholder="hele timer" onchange="p.travel = this.value"><br>
    </div>
</div>

    `
    updateView()
}