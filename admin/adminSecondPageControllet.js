//
//
//
function adminSecondPageController() {
    const usr = model.data.users.adminSeconPage;
    // usr.picture = null;
    // usr.id = null;
    // usr.fname = null;
    // usr.lname = null;
    // usr.gender = null;
    // usr.email = null;
    // usr.phone = null;
    // usr.age = null;
    // usr.ethnicity = null;
    // usr.driverLicence = null;
    // usr.place = null;
    // usr.interest = null;
    // usr.exp = null;
    // usr.time = null;
    // usr.travel = null;
    // usr.info = null;
    // usr.missionStatus = null;
    // usr.mission = null;
    usr.note.adminUsername = [];
    usr.note.noteId = [];
    usr.note.noteText = [];
}

function adminSwapPage() {
    adminSecondPageController();
    model.app.page = "adminView";
    pageSwitch();
}
