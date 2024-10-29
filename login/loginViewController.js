let errorMsg = "";
let adminLogin = false;
let userLogin = false;

function checkAdmin(){
    //check admin validation
    for(let i = 0; i < model.data.users.admin.length; i++){
        if(model.input.login.username == model.data.users.admin[i].email 
            && model.input.login.password == model.data.users.admin[i].password){
            adminLogin = true;
            model.app.page = 'adminView';
            model.app.usrId = model.data.users.admin[i].id;
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
                model.app.page = 'userView';
                model.app.usrId = model.data.users.usr[i].id;
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