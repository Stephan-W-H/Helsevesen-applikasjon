//
//
//
function adminSecondPageController() {
    const user = model.data.users.adminSeconPage;

    let html = `
        <img src="${user.picture}">
        <p>Bruker ID: ${user.id}</p>
        <p>For navn: ${user.fname}</p>
        <p>Etter navn: ${user.lname}</p>
        <p>Kjønn: ${user.gender}</p>
        <p>E-post: ${user.email}</p>
        <p>Telefon: ${user.phone}</p>
        <p>Alder: ${user.age}</p>
        <p>Etnisitet: ${user.ethnicity}</p>
        <p>Fører kort: ${user.driverlicence}</p>
        <p>Sted: ${user.place}</p>
        <p>Iteresser: ${user.interest}</p>
        <p>Erfaring: ${user.exp}</p>
        <p>Tid: ${user.time}</p>
        <p>Reise: ${user.travel}</p>
        <p>Information: ${user.info}</p>
        <p>Oppdrag status: ${user.missionstatus}</p>
        <p>Oppdrag: ${user.mission}</p>
        `;
    return html;
}
