function creatAccountView() {
    model.app.inView = /*HTML*/ 
    `
    <div>
    <label for="firstName">Fornavn:</label>
    <input id="firstName" type="text" onchange="">

    <label for="lastName">Etternavn:</label>
    <input id="lastName" type="text" onchange="">

    <label for="gender">Kjønn:</label>
    <select id="gender" onchange="">
        <option value="Dame">Dame</option>
        <option value="Mann">Mann</option>
        <option value="Ikke-Binær">Ikke-Binær</option>
    </select>
    

    <label for="E-mail">Epost:</label>
    <input id="E-mail" type="email" placeholder="abc@abc.com" onchange="">

    <label for="city">By:</label>
    <input id="city" type="text" onchange="">

    <label for="number">Telefonnummer:</label>
    <input id="number" type="tel" onchange="">

    <label for="age">Alder:</label>
    <input id="age" type="text" onchange="">

    <label for="ethnicity">Etnisitet:</label>
    <input id="ethnicity" type="text" onchange="">

    <label for="licens">Førerkort Klasser:</label>
    <select id="licens" onchange="">
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
    <select id="hobby" onchange="">
    <option></option>
    </select>
    <label for="hobbyInput">Eller Skriv Her</label>
    <input id="hobbyinput" type="text" onchange="">

    <label for="education">Utdanning/Kurs</label>
    <input id="education" type="text" onchange="">

    <label for="availebilety">Tilgjengelighet</label>
    <input id="availebilety" type="date" onchange="">

    <label for="about">Om Deg:</label>
    <input id="about" type="text" onchange="">

    <label for="pic">Link til bilde:</label>
    <input id="pic" type="text" onchange="">

    <label for="travelTime">Reisetid:</label>
    <input id="travelTime" type="number" placeholder="hele timer" onchange="">
</div>

    `
}