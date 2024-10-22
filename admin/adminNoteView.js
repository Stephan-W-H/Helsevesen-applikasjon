//
//
//
function adminNoteView() {
    model.app.inView = `
    <div>
        <!-- <form onsubmit="adminNoteController()"> -->
            <label for="adminNote"></label>
            <textarea id="adminNote" onchange="adminNoteController(this.value)"></textarea>
            <button onclick="adminNoteController()">Lagre Notat</button>
            <!-- <input type="submit" value="Lagre Notat"> -->
            <!-- </form> -->
    </div>
    `;
    updateView();
}
