//
//
//
function adminNoteView() {
    model.app.inView = `
    <div>
        <form onsubmit="adminNoteController()">
            <hr>
            <label for="adminNoteTitle">Notat titel</label>
            <input id="adminNoteTitle" placeholder="Notat titel">
            <label for="adminNoteUsr">Skrevet av</label>
            <input id="adminNoteUsr" placeholder="Skrevet av">
            <label for="adminNote"></label>
            <hr><br>
            <textarea id="adminNote" rows="10" cols="100"></textarea>
            <hr><br>
            <!-- <button onclick="adminNoteController()">Lagre Notat</button> -->
            <button onclick="adminViewSecondPage()">Til bake</button>
            <input type="submit" value="Lagre Notat">
        </form>
    </div>
    `;
    updateView();
}
