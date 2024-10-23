function loginValidation(){
   
//check admin validation
if(model.input.login.password != null && model.input.login.username != null ){
    for(let i = 0; i < model.data.users.admin.length; i++){
        if(model.input.login.username == model.data.users.admin[i].email
            && model.input.login.password == model.data.users.admin[i].password){
                model.app.page = 'adminView';
                model.app.usrId = model.data.users.admin[i].id;
                pageSwitch();               
            }
    }
}
else{
    //check user validation
    for(let i = 0; i < model.data.users.usr.length; i++){
        if(model.input.login.username == model.data.users.usr[i].email
            && model.input.login.password == model.data.users.usr[i].password){
                model.app.page = 'userView';
                model.app.usrId = model.data.users.usr[i].id;
                pageSwitch();
            } 
        else{
            
        }
    } 

}
}
