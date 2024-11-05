//
//
//
function adminMissionController(event) {
    event.preventDefault();

    const id = document.getElementById("adminMissionPatientId").value;
    model.input.adminInPut.patientId = id;
    const place = document.getElementById("adminMissionLocation").value;
    model.input.adminInPut.location = place;
    const time = document.getElementById("adminMissionTime").value;
    model.input.adminInPut.duration = time;
    const info = document.getElementById("adminMissionInfo").value;
    model.input.adminInPut.information = info;
    const status = document.getElementById("adminMissionStatus");
    model.input.adminInPut.missionStatus = status;

    const usrId = model.input.adminInPut.selectedUsrId;
    const usrIndex = model.data.users.usr.findIndex((usr) => usr.id === usrId);

    if (usrIndex !== -1) {
        /*model.data.users.usr[usrIndex].mission.patientId =
            model.input.adminInPut.patientId;

        model.data.users.usr[usrIndex].mission.location =
            model.input.adminInPut.location;

        model.data.users.usr[usrIndex].mission.duration =
            model.input.adminInPut.duration;

        model.data.users.usr[usrIndex].mission.information =
            model.input.adminInPut.information;

        model.data.users.usr[usrIndex].mission.missionStatus =
            model.input.adminInPut.missionStatus;*/
            let mission = {
                missionStatus: "Tildelt", 
                patientId: model.input.adminInPut.patientId,
                location: model.input.adminInPut.location,
                duration: model.input.adminInPut.duration,
                information: model.input.adminInPut.information,
            }
            model.data.users.usr[usrIndex].mission.push(mission)
        adminGoToSecondPage();
    } else {
        console.log("Could not find user index");
    }
}

function adminGoToSecondPage() {
    model.app.page = "adminSecondPage";
    pageSwitch();
}
