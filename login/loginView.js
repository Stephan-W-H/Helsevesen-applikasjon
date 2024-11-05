function loginView() {
    model.app.page = 'loginView'
    model.app.inView = /*HTML*/`

        <div class="container">
            <div class="errorContainer">${errorMsg}</div>
            <form>
                <h2>Innlogging</h2>
                <div class= "formGroup">
                    <label for="email">E-post</label>
                    <input id="email" type="email" class="inputField" onchange="model.input.login.username = this.value" required> 
                </div>

                <div class= "formGroup">
                    <label for="pass">Passord</label>
                    <input id="pass" type="password" class="inputField" onchange="model.input.login.password = this.value" required> 
                </div>
                    
                
                <button class="btn" onclick="checkAdmin()">Logg inn</button>

                <div class="registerTextBox">Har du ikke konto?&nbsp;
                    <u class="registerText" onclick="creatAccountView()">Registrer deg</u>
                 </div>
            </form>    
        </div>

    `;
    updateView();
}