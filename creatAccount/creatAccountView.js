function creatAccountView() {
    let p = model.input.registration
    model.app.inView = /*HTML*/ 
    `
    <div class="topText">Registrering</div>
    <div class="accountRegBox">
    <div class="containerDiv">
    <label for="firstName">Fornavn:</label>
    <input id="firstName" type="text" onchange="model.input.registration.firstname = this.value">

    <label for="lastName">Etternavn:</label>
    <input id="lastName" type="text" onchange="model.input.registration.lastname = this.value">

    <label for="gender">Kjønn:</label>
    <select id="gender" onchange="p.gender = this.value">
        <option value="Dame">Dame</option>
        <option value="Mann">Mann</option>
        <option value="Ikke-Binær">Ikke-Binær</option>
    </select>
    

    <label for="E-mail">Epost:</label>
    <input id="E-mail" type="email" placeholder="abc@abc.com" onchange="model.input.registration.email"><br>
    <label for="password">Epost:</label>
    <input id="password" type="password" placeholder="********" onchange="model.input.registration.password = this.value"><br>
    <label for="city">By:</label>
    <input id="city" type="text" onchange="model.input.registration.place = this.value">

    <label for="number">Telefonnummer:</label>
    <input id="number" type="tel" onchange="model.input.registration.phone = this.value">

    <label for="age">Alder:</label>
    <input id="age" type="text" onchange="model.input.registration.age = this.value">

    <label for="ethnicity">Etnisitet:</label>
    <input id="ethnicity" type="text" onchange="model.input.registration.ethnicity = this.value"><br>
    </div>

    <div class="containerDiv">
    <label for="licens">Førerkort Klasser:</label>
    <select id="licens" onchange="model.input.registration.driverLicence = this.value">
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
    <select id="hobby" onchange="$model.input.registration.interest = this.value">
    <option></option>
    ${creatHobbyOptions()}
    </select>
    <label for="hobbyInput">Eller Skriv Her</label>
    <input id="hobbyinput" type="text" onchange="addHobby(this.value)">

    <label for="education">Utdanning/Kurs</label>
    <input id="education" type="text" onchange="model.input.registration.exp = this.value"><br>

    <label for="availebilety">Tilgjengelighet</label>
    <label id="availebilety" for="From">Fra</label>
    <input id="From" type="date" onchange="model.input.registration.date.startTime = this.value">
    <label for="To">Til</label>
    <input id="To" type="date" onchange="model.input.registration.date.stoptime = this.value">
    <input id="availebilety" type="checkbox"  onchange="model.input.registration.date.days.sunday = 'Søndag'">
    <input id="availebilety" type="checkbox"  onchange="model.input.registration.date.days.saturday = 'Lørdag'">
    <input id="availebilety" type="checkbox"  onchange="model.input.registration.date.days.friday = 'Fredag'">
    <input id="availebilety" type="checkbox"  onchange="model.input.registration.date.days.thursday = 'Torsdag'">
    <input id="availebilety" type="checkbox"  onchange="model.input.registration.date.days.wedensday = 'Onsdag'">
    <input id="availebilety" type="checkbox"  onchange="model.input.registration.date.days.thusday = 'Tirsdag'">
    <input id="availebilety" type="checkbox"  onchange="model.input.registration.date.days.monday = 'Mandag'">
    

    <label for="about">Om Deg:</label>
    <input id="about" type="text" onchange="model.input.registration.info = this.value">

    <label for="pic">Link til bilde:</label>
    <input id="pic" type="text" onchange="model.input.registration.picture = this.value">

    <label for="travelTime">Reisetid:</label>
    <input id="travelTime" type="number" placeholder="hele timer" onchange="model.input.registration.travel = this.value"><br>
    </div>
</div>

    `
    updateView()
}