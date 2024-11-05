let errorMsg = "";
let adminLogin = false;
let userLogin = false;

function checkIfLoggedIn(){
    if(model.app.usrId != ""){
        model.app.page = 'mainView'
        model.app.usrId = "";
        model.app.loginBtnText = "Logg inn";
        model.input.login.username = null;
        model.input.login.password = null;
        model.app.profileHeaderText = '';
        model.app.userType = '';
        adminLogin = false;
        userLogin = false;
        pageSwitch()
    }
    else{
        loginView()
    }
}

function checkAdmin(){
    //check admin validation
    for(let i = 0; i < model.data.users.admin.length; i++){
        if(model.input.login.username == model.data.users.admin[i].email 
            && model.input.login.password == model.data.users.admin[i].password){
            adminLogin = true;
            model.app.userType = 'admin'
            model.app.page = 'adminView';
            model.app.usrId = model.data.users.admin[i].id;
            model.app.loginBtnText = "Logg ut";
            errorMsg = "";
            profileHeaderText = '';
            pageSwitch();               
            return
        }
    }
    checkUser();
}

function checkUser(){
    //check user validation
    for(let i = 0; i < model.data.users.usr.length; i++){
        if(model.input.login.username == model.data.users.usr[i].email
            && model.input.login.password == model.data.users.usr[i].password){
                userLogin = true;
                model.app.userType = 'user'
                model.app.page = 'userView';
                model.app.usrId = model.data.users.usr[i].id;
                model.app.loginBtnText = "Logg ut";
                errorMsg = "";
                pageSwitch();
                return
        } 
    } 
    loginIsIncorrect()  
}

function loginIsIncorrect(){
    if(!adminLogin && !userLogin){
        errorMsg = `<div class="errorBox">Email or password is inccorect</div>`;
        loginView();
    }
}