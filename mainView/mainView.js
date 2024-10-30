function mainView() {
    model.app.inView = /*HTML*/ `
    <div class="header">Home</div>
    <div onclick=" loginView()" class="headerBtn">Login</div>
    <button onclick="profileView()">Bruker sin side</button>
    <div onclick="creatAccountView()" class="footer">Registrer Deg Nå!</div>
    <div class="mainDiv">
 Bli en støttekontakt med Lysglimt – gjør en forskjell i andres liv

Har du lyst til å bidra i ditt lokalsamfunn og gjøre en positiv forskjell i noens hverdag? Gjennom Lysglimt kan du bli en støttekontakt og bruke litt av din tid til å hjelpe de som trenger det mest. Mange rundt oss opplever utfordringer som kan føles overveldende alene, men med en støttekontakt ved sin side kan de få den omsorgen og støtten de trenger.

Som frivillig støttekontakt i Lysglimt kan du velge når og hvordan du ønsker å bidra – enten det er en samtale, hjelp med små oppgaver, eller bare en trygg tilstedeværelse.

Hvordan du kan bidra som frivillig:

    Registrer deg som støttekontakt – Lag en profil og skriv litt om hva du kan bidra med.
    Velg hvordan du vil hjelpe – Bla gjennom ulike behov i appen og finn de oppdragene som passer for deg.
    Knytt kontakt – Start en samtale med personer som trenger din støtte, og avtal hvordan dere kan møtes eller holde kontakten.

Hvorfor bli en støttekontakt?

    Skap positive endringer – Gi støtte, trygghet og fellesskap til de som trenger det mest.
    Bygg meningsfulle relasjoner – Opplev gleden av å være en viktig støtte i andres liv.
    Fleksibilitet på dine premisser – Bidra når og hvordan det passer deg.

Bli en del av Lysglimt og ta steget mot å gjøre en forskjell. Din tid og tilstedeværelse kan bety mer enn du aner.  
        
    </div>
    <button onclick="adminView()">admin</button>


`;
    updateView();
}
