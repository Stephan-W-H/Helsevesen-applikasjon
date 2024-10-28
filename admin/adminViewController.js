//
//
//

function adminStoreUsrData(storedData) {
    model.data.users.adminSeconPage = model.data.users.usr[storedData];
    model.app.page = "adminSecondPage";
    pageSwitch();
}
