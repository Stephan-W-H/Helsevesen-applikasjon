function loginView() {
    model.app.page = 'loginView'
    model.app.inView = /*HTML*/`

        <div class="container">
            <div class="errorContainer">${errorMsg}</div>
            <form>
                <h2>Log in</h2>
                <div class= "formGroup">
                    <label for="email">Email</label>
                    <input id="email" type="email" class="inputField" onchange="model.input.login.username = this.value" required> 
                </div>

                <div class= "formGroup">
                    <label for="pass">Password</label>
                    <input id="pass" type="password" class="inputField" onchange="model.input.login.password = this.value" required> 
                </div>
                    
                <button class="btn" onclick="checkAdmin()">Log in</button>
            </form>    
        </div>

    `;
    updateView();
}