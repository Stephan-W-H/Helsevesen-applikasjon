let errorMsg = "";
let adminLogin = false;
let userLogin = false;

function checkInputs(){
    errorMsg = "";
    //Check if the input fields are not empty
    console.log(model.input.login.username)
    console.log(model.input.login.password)
    if (!model.input.login.username || model.input.login.username == ''  && !model.input.login.password || model.input.login.password == '' ) {
        errorMsg = "Email and password cannot be empty";
        emptyInputs();
        loginView();
        return;
    } else if (!model.input.login.username || model.input.login.username == '') {
        errorMsg = "Email cannot be empty";
        emptyInputs();
        loginView();
        return;
    } else if (!model.input.login.password || model.input.login.password == '') {
        errorMsg = "Password cannot be empty";
        emptyInputs();
        loginView();
        return;
    }


    checkAdmin();
}

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
        errorMsg = "Email or password is inccorect";
        loginView();
    }
}

function emptyInputs(){
    model.input.login.username = null;
    model.input.login.password = null;
}
