updateView();
pageSwitch();
function updateView() {
    app.innerHTML = /*HTML*/ `
    <main>
    
        <header class="header">
            <img class="logo" onclick="homeFunction()" src="image/helsevesen logo til prosjekt.png">
            ${model.app.header}
        </header>
        
        <article class="main">${model.app.inView}</article>
        <aside>Sidebar1 ${model.app.leftSideMenu}</aside>
        <nav>Sidebar2 ${model.app.rightSideMenu}</nav>

        <footer>Footer ${model.app.footer}</footer>
        
    </main>
`;
}

function homeFunction() {
    model.app.page = "mainView";
    pageSwitch();
}

function pageSwitch() {
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
