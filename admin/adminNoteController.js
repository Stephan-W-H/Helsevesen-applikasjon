//
//
//
function adminNoteController(event) {
    event.preventDefault();

    const notes = document.getElementById("adminNote").value;
    model.input.adminInPut.note = notes;
    const noteTitle = document.getElementById("adminNoteTitle").value;
    model.input.adminInPut.noteId = noteTitle;
    const noteAuthor = document.getElementById("adminNoteUsr").value;
    model.input.adminInPut.noteAuthor = noteAuthor;

    for (let i = 0; i < model.data.users.usr.length; i++) {
        model.data.users.usr[i].note.noteText.push(model.input.adminInPut.note);
        model.data.users.usr[i].note.noteId.push(model.input.adminInPut.noteId);
        model.data.users.usr[i].note.adminUsername.push(
            model.input.adminInPut.noteAuthor,
        );
        //model.data.users.usr[i].note.noteText = model.input.adminInPut.note;
        //model.data.users.usr[i].note.noteId = model.input.adminInPut.noteId;
        //model.data.users.usr[i].note.adminUsername =
        //model.input.adminInPut.noteAuthor;
        console.log(model.data.users.usr[i].note);
    }

    model.input.adminInPut.note = null;
    model.input.adminInPut.noteAuthor = null;
    model.input.adminInPut.noteId = null;

    updateView();
}
