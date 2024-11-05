updateView();
pageSwitch();
function updateView() {
    app.innerHTML = /*HTML*/ `
    <main>
    
        <header>
            ${model.app.header}
            <div class="logoBox" onclick="homeFunction()">
                <img class="logo" src="image/Logo4.png">
                <div class="logoText">LysGlimt</div>
            </div>
            <div onclick=" checkIfLoggedIn()" class="headerBtn">${model.app.loginBtnText}</div>
        </header>
        
        <article class="main">${model.app.inView}</article>
        <aside>${model.app.leftSideMenu}</aside>
        <nav>${model.app.rightSideMenu}</nav>

        <footer>${model.app.footer}</footer>
        
    </main>
`;
}

function homeFunction() {
    model.app.page = "mainView";
    pageSwitch();
}

function pageSwitch() {
    if(model.app.leftSideMenu != '') { model.app.leftSideMenu = ''}
    switch (model.app.page) {
        case "mainView":
            mainView();
            break;
        case "loginView":
            loginView();
            break;
        case "registrationView":
            creatAccountView();
            break;
        case "userView":
            profileView();
            break;
        case "adminView":
            adminView();
            break;
        case "adminSecondPage":
            adminViewSecondPage();
            break;
        case "adminUserView":
            adminUserView();
            break;
    }
}
