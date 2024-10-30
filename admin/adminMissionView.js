//
//
//
function adminMissionView() {
    model.app.inView = `
    <div>
        <form onsubmit="adminMissionController(event)">
            <label for="adminMissionPatientId">Pasient Id</label>
            <br>
            <input id="adminMissionPatientId" placeholder="Pasient Id">
            <br>
            <label for="adminMissionLocation">Oppdrags sted</label>
            <br>
            <input id="adminMissionLocation" placeholder="Opdrags sted">
            <br>
            <label for="adminMissionTime">Oppdrags tid</label>
            <br>
            <input id="adminMissionTime" placeholder="Opdrags tid">
            <br>
            <label for="adminMissionStatus">Set status</label>
            <br>
            <input id="adminMissionStatus" placeholder="Opdrags status">
            <br>
            <label for="adminMissionInfo">Oppdrags info</label>
            <br>
            <textarea id="adminMissionInfo" rows="10" cols="100" placeholder="Oppdrags info"></textarea>
            <br>
            <input id="submitMission" value="Send på opdrag" type="submit">
        </form>
    </div>
    `;
    updateView();
}
