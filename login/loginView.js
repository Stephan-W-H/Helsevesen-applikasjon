function loginView() {
    model.app.inView = /*HTML*/`

    <div class="loginContainer">
        <div class="loginStyleS">Log in</div>
        
        <div class= inputStyle>
            <label for="email">Email</label>
            <input id="email" type="email" onchange="" placeholder="Email"> 
        </div>

        <div>
            <label for="pass">Password</label>
            <input id="pass" type="password" onchange="" placeholder="Password"> 
        </div>

    </div>
        <button class="buttonStyle" onclick="">Log in</button>
    `;
    updateView()
}