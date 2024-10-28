//
//
//

function adminStoreUsrData(storedData) {
    model.data.users.adminSeconPage = model.data.users.usr[storedData];
    model.input.adminInPut.selectedUsrId = model.data.users.adminSeconPage.id;
    model.app.page = "adminSecondPage";
    pageSwitch();
}
