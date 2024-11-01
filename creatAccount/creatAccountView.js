function creatAccountView() {
    let p = model.input.registration
    model.app.inView = /*HTML*/ 
    `
<div class="topText">Registrering</div>

<div class="accountRegBox">
    <div class="containerDiv">    
        <div>
            <label for="firstName">Fornavn:</label><br>
            <input id="firstName" type="text" onchange="model.input.registration.firstname = this.value">
        </div>
        <div>
            <label for="lastName">Etternavn:</label><br>
            <input id="lastName" type="text" onchange="model.input.registration.lastname = this.value">
        </div>
        <div>
            <label for="gender">Kjønn:</label><br>
            <select id="gender" onchange="genderPush(this.value)">
                <option ></option>
                <option value="Dame">Dame</option>
                <option value="Mann">Mann</option>
                <option value="Ikke-Binær">Ikke-Binær</option>
            </select>
        </div> 
        <div>
            <label for="E-mail">Epost:</label><br>
            <input id="E-mail" type="email" placeholder="abc@abc.com" onchange="model.input.registration.email = this.value"><br>
        </div> 
        <div>
            <label for="password">Passord:</label><br>
            <input id="password" type="password" placeholder="********" onchange="model.input.registration.password = this.value"><br>
        </div> 
        <div> 
            <label for="city">By:</label><br>
            <input id="city" type="text" onchange="model.input.registration.place = this.value">
        </div> 
        <div> 
            <label for="number">Telefonnummer:</label><br>
            <input id="number" type="tel" onchange="model.input.registration.phone = this.value">
        </div> 
        <div> 
            <label for="age">Alder:</label><br>
            <input id="age" type="text" onchange="model.input.registration.age = this.value">
        </div> 
        <div>
            <label for="ethnicity">Etnisitet:</label><br>
            <input id="ethnicity" type="text" onchange="model.input.registration.ethnicity = this.value"><br>
        </div>
    </div>

    <div class="containerDiv">
        <div>
            <label for="licens">Førerkort Klasser:</label><br>
            <select id="licens" onchange="licencePush(this.value)">
                <option></option>
                <option value="M"> M Moped</option>
                <option value="A1" >A1 lett motorsykkel</option>
                <option value="A" >A Motorsykkel</option>
                <option value="B"  >B</option>
                <option value="B96"  >B96 Automat</option>
                <option value="BE"  >BE B med henger</option>
                <option value="D1"  >D1 Minibuss</option>
                <option value="D"  >D Buss</option>
            </select>
            <div>${myLicensesPrint()}</div>
        </div> 
        <div class="miniContainer">
            <div class="miniContainerBox">
            <label for="hobby">Hobbyer:</label><br>
            <select id="hobby" onchange="hobbyPush(this.value)">
                <option></option>
                ${creatHobbyOptions()}
            </select><br>
            <div>${hobbyPrint()}</div>
            </div>
            <div class="miniContainerBox">
            <label for="hobbyInput">Eller Skriv Her</label><br>
            <input id="hobbyinput" type="text" onchange="addHobby(this.value)">
            </div> 
        </div> 
        <div>
            <label for="education">Utdanning/Kurs</label><br>
            <input id="education" type="text" onchange="model.input.registration.exp = this.value"><br>
        </div> 
        <div>
            <label for="availebilety">Tilgjengelighet</label><br>
            <label id="availebilety" for="From">Fra</label><br>
            <input id="From" type="date" onchange="model.input.registration.date.startTime = this.value">
            <label for="To">Til</label>
            <input id="To" type="date" onchange="model.input.registration.date.stoptime = this.value">
        </div> 
        <div class="days">
            <div class="day">
            <input id="allDays" type="checkbox" value="Alle dager" onchange="dayPush(this.value)">
            <label for="allDays">Alle Dager</label>
            </div> 
            <div class="day">
            <input id="monday" type="checkbox" value="Mandag" onchange="dayPush(this.value)">
            <label for="monday">Mandag</label>
            </div> 
            <div class="day">
            <input id="thusday" type="checkbox" value="Tirsdag" onchange="dayPush(this.value)">
            <label for="thusday">Tirsdag</label>
            </div>
            <div class="day">
            <input id="wedensday" type="checkbox" value="Onsdag" onchange="dayPush(this.value)">
            <label for="wedensday">Onsdag</label>
            </div>
            </div>
            <div class="days">
            <div class="day">
            <input id="thursday" type="checkbox" value="Torsdag" onchange="dayPush(this.value)">
            <label for="thursday">Torsdag</label>
            </div>
            <div class="day">
            <input id="friday" type="checkbox" value="Fredag" onchange="dayPush(this.value)">
            <label for="friday">Fredag</label>
            </div>
            <div class="day">
            <input id="saturday" type="checkbox" value="Lørdag" onchange="dayPush(this.value)">
            <label for="saturday">Lørdag</label>
            </div>
            <div class="day">
            <input id="sunday" type="checkbox" value="Søndag" onchange="dayPush(this.value)">
            <label for="sunday">Søndag</label>
            </div>
        </div>
            <div>
                <label for="about">Om Deg:</label><br>
                <input id="about" type="text" onchange="model.input.registration.info = this.value">

            </div>
            <div>
                <label for="pic">Link til bilde:</label><br>
                <input id="pic" type="text" onchange="model.input.registration.picture = this.value">
            </div>  
            <div>
                <label for="travelTime">Reisetid:</label><br>
                <input id="travelTime" type="number" placeholder="hele timer" onchange="model.input.registration.travel = this.value"><br>
            </div>
        </div>
    </div>
</div>
<footer class="cavFooter"><button class="cavButton" onclick="regiseter()">Registrer</button></footer>
    `
    console.log(model.data.users.usr)
    updateView()
}