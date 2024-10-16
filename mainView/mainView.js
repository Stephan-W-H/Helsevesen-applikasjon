
function mainView(){
model.app.inView = /*HTML*/ `
    <img src="helsevesen logo til prosjekt.png">
    <div class="header">Home</div>
    <div onclick=" loginView()" class="headerBtn">Login</div>
    <div onclick="creatAccountView()" class="footer">Registrer Deg Nå!</div>
    <div class="mainDiv">
        Her kommer teksten for applikasjonen til helsevesnet...
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Labore, illo a cumque odit ea quo dignissimos non quos, 
        quae suscipit iusto blanditiis temporibus necessitatibus? 
        Dicta at quas consectetur eius molestiae?

        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Labore, illo a cumque odit ea quo dignissimos non quos, 
        quae suscipit iusto blanditiis temporibus necessitatibus? 
        Dicta at quas consectetur eius molestiae?
    </div>
    <button onclick="adminView()">admin</button>


`
updateView()
}