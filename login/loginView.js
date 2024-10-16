function loginView() {
    model.app.page = 'loginView'
    model.app.inView = /*HTML*/`

    <div class="loginContainer">
        <div class="loginBox">
            <h2>Log in</h2>
            
            <div class= "inputStyle">
                <label for="email">Email</label>
                <input id="email" type="email" onchange=""> 
            </div>

            <div class= "inputStyle">
                <label for="pass">Password</label>
                <input id="pass" type="password" onchange=""> 
            </div>
                
            <button onclick="">Log in</button>
        </div>
    </div>
    `;
    updateView();
}