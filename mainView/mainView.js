function mainView() {
    model.app.inView = /*HTML*/ `
    <div class="header"></div>
    <button onclick="profileView()">Bruker sin side</button>
    
    <div class="mainDiv">

        <h2>Bli en støttekontakt med <b>Lysglimt</b> – gjør en forskjell i andres liv</h2>
        <p>Har du lyst til å bidra i ditt lokalsamfunn og gjøre en positiv forskjell i noens hverdag?
            Gjennom <b>Lysglimt</b> kan du bli en støttekontakt og bruke litt av din tid til å hjelpe de som trenger det mest. 
            Mange rundt oss opplever utfordringer som kan føles overveldende alene, 
            men med en støttekontakt ved sin side kan de få den omsorgen og støtten de trenger.
        </p>
        <p>Som frivillig støttekontakt i <b>Lysglimt</b> kan du velge når og hvordan du ønsker å bidra – enten 
            det er en samtale, hjelp med små oppgaver, eller bare en trygg tilstedeværelse.
        </p>
        <h3>Hvordan du kan bidra som frivillig:</h3>
        <ol>
            <li>Registrer deg som støttekontakt – Lag en profil og skriv litt om hva du kan bidra med.</li>
            <li>Velg hvordan du vil hjelpe – Bla gjennom ulike behov i appen og finn de oppdragene som passer for deg.</li>
            <li>Knytt kontakt – Start en samtale med personer som trenger din støtte, og avtal hvordan dere kan møtes eller holde kontakten.</li>
        </ol>
        <h3>Hvorfor bli en støttekontakt?</h3>
        <ul>
            <li>Skap positive endringer – Gi støtte, trygghet og fellesskap til de som trenger det mest.</li>
            <li>Bygg meningsfulle relasjoner – Opplev gleden av å være en viktig støtte i andres liv.</li>
            <li>Fleksibilitet på dine premisser – Bidra når og hvordan det passer deg.</li>
        </ul>
        <p>Bli en del av <b>Lysglimt</b> og ta steget mot å gjøre en forskjell. 
            Din tid og tilstedeværelse kan bety mer enn du aner.
        </p> 
            
    </div>
    <button onclick="adminView()">admin</button>
    <div onclick="creatAccountView()" class="footer">Registrer Deg Nå!</div>

`;
    updateView();
}
