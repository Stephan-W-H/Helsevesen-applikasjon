//
//
//
function adminNoteController() {
    const notes = document.getElementById("adminNote").value;
    model.input.adminInPut.note.push(notes);
    const noteTitle = document.getElementById("adminNoteTitle");
    const noteAuthor = document.getElementById("adminNoteUsr");

    for (let i = 0; i < model.data.users.usr.length; i++) {
        model.data.users.usr[i].note.noteText = model.input.adminInPut.note;
        console.log(model.data.users.usr[i].note);
    }

    console.log(notes);

    updateView();
}

// function produceNote() {
//     const html = "";
//     const notes = model.data.users.adminSeconPage.note;
//     for (let i = 0; i < notes.noteId.length; i++) {
//         html += `
//         <div>
//         <p>Notat forfatter: ${notes[i].adminUsername}</p>
//         <p>Notat titel: ${notes[i].noteId}</p>
//         <p>Notat: ${notes[i].noteText}</p>
//         </div>
//         `;
//     }
//     return html;
// }
