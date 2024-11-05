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
            <div class="profileHeaderText">${model.app.profileHeaderText}</div>
            <div onclick=" checkIfLoggedIn()" class="headerBtn">${model.app.loginBtnText}</div>
        </header>
        
        <article class="main">${model.app.inView}</article>
        <aside>${model.app.leftSideMenu}</aside>
        <nav>${model.app.rightSideMenu}</nav>

        <footer class="mainFooter">${model.app.footer}</footer>
        
    </main>
`;
}

function homeFunction() {
    if(model.app.userType == 'user')
        {
            model.app.page = "userView"
            pageSwitch();
        }
    else if(model.app.userType == 'admin')
        {
            model.app.page = "adminView"
            pageSwitch();  
        }
        else
        {
            model.app.page = "mainView";
            pageSwitch();
            errorMsg = "";
        }
}

function pageSwitch() {
    if(model.app.leftSideMenu != '') { model.app.leftSideMenu = ''}
    if(model.app.header != '') {model.app.header = ''}
    if(model.app.footer != '') {model.app.footer = ''}
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
