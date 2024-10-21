function loginView() {
    model.app.page = 'loginView'
    model.app.inView = /*HTML*/`

    <div class="bodyContainer">
        <div class="container">
            <form>
                <h2>Log in</h2>
                
                <div class= "formGroup">
                    <label for="email">Email</label>
                    <input id="email" type="email" class="inputField" onchange=""> 
                </div>

                <div class= "formGroup">
                    <label for="pass">Password</label>
                    <input id="pass" type="password" class="inputField" onchange=""> 
                </div>
                    
                <button class="btn" onclick="loginValidation()">Log in</button>
            </form>    
        </div>
    </div>
    `;
    updateView();
}