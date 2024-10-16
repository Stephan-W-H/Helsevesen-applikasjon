
function mainView(){
model.app.inView = /*HTML*/ `
    <img src="helsevesen logo til prosjekt.png">
    <div class="header">Home</div>
    <div onclick="" class="headerBtn">Login</div>
    <div onclick="creatAccountView()" class="footer"></div>
    <div class="mainDiv">
        Her kommer teksten for applikasjonen til helsevesnet...
        
    </div>

`
updateView();
}