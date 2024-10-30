//
//
//

function adminDeleteUserController() {
    const id = model.input.adminInPut.selectedUsrId;
    const usrIndex = model.data.users.usr.findIndex((usr) => usr.id === id); // find the index if the selected id

    // we check if findIndex returns -1 meaning it found nothing.
    if (usrIndex !== -1) {
        model.data.users.usr.splice(usrIndex, 1); // splice arguments; usrIndex = index of what we want to delete. 1; we want to delete 1 item from the array.
        adminPostDeleteUserPage();
    } else {
        console.log("Could not find user index!");
    }
}

function adminDeleteUserGoBackToMainAdminPage() {
    model.app.page = "adminView";
    pageSwitch();
}
