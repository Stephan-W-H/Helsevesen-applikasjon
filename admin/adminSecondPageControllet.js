//
//
//
function adminSecondPageController() {
    const usr = model.data.users.adminSeconPage;
    usr.note.adminUsername = [];
    usr.note.noteId = [];
    usr.note.noteText = [];
}

function adminSwapPage() {
    adminSecondPageController();
    model.app.page = "adminView";
    pageSwitch();
}
