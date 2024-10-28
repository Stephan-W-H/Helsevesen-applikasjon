//
//
//

function adminDeleteUserController() {
    const id = model.input.adminInPut.selectedUsrId;
    const usrIndex = model.data.users.usr.findIndex((usr) => usr.id === id);

    if (usrIndex !== -1) {
        model.data.users.usr[usrIndex] = null;
        adminPostDeleteUserPage();
    } else {
        console.log("Could not find user index!");
    }
}

function adminDeleteUserGoBackToMainAdminPage() {
    model.app.page = "adminView";
    pageSwitch();
}
