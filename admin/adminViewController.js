//
//
//

function adminStoreUsrData(storedData) {
    // Store usr data in adminSeconPage (temp storage)
    model.data.users.adminSeconPage = {
        ...model.data.users.usr[storedData], // ... aka spread operator to copy form one array to another
        note: {
            noteId: model.data.users.usr[storedData].note?.noteId || [],
            adminUsername:
                model.data.users.usr[storedData].note?.adminUsername || [],
            noteText: model.data.users.usr[storedData].note?.noteText || [],
        },
    };

    model.input.adminInPut.selectedUsrId = model.data.users.adminSeconPage.id;
    model.app.page = "adminSecondPage";
    pageSwitch();
}
