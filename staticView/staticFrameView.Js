updateView();
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
