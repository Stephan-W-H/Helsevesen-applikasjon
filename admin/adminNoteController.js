//
//
//
function adminNoteController() {
    const noteId = document.getElementById("adminNote").value;
    model.input.adminInPut.note.push(noteId);
    for (let i = 0; i < noteId; i++) {
        model.data.users.usr[i].note[2].noteText = noteId;
        console.log(model.data.users.usr[i].note[2].noteText);
    }
    console.log(noteId);

    updateView();
}
