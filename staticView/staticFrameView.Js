updateView()
pageSwitch()
function updateView() {
    
    app.innerHTML = /*HTML*/ `
    <main>

        <header class="header">Header</header>
        
        <article class="main">${model.app.inView}</article>
        <aside>Sidebar1</aside>
        <nav>Sidebar2</nav>

        <footer>Footer</footer>
        
    </main>
`;

}

function pageSwitch() 
{
    let p = model.app.page
    switch(p)
    {
        case 'mainView':
            mainView();
        break;
        case 'loginView':
            loginView()
            break;
        case 'registrationView':
            creatAccountView()
            break;
        case 'userView':
            userView()
            break;
        case 'adminView':
            adminView()
            break;
        case 'adminUserView':
            adminUserView()
            break;
    }
    

}
