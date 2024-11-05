//
//
//
function editProfileController(event) {
    event.preventDefault();

    const fname = document.getElementById("usrFname").value;
    model.input.registration.firstname = fname;
    const lname = document.getElementById("usrLname").value;
    model.input.registration.lastname = lname;
    const password = document.getElementById("usrPassword").value;
    model.input.registration.lastname = password;
    const gender = document.getElementById("usrGender").value;
    model.input.registration.lastname = gender;
    const email = document.getElementById("usrEmail").value;
    model.input.registration.lastname = email;
    const phone = document.getElementById("usrTelephone").value;
    model.input.registration.lastname = phone;
    const age = document.getElementById("usrAge").value;
    model.input.registration.lastname = age;
    const ethnicity = document.getElementById("usrEthnicity").value;
    model.input.registration.lastname = ethnicity;
    const dLicence = document.getElementById("usrEditDriverLicence").value;
    model.input.registration.lastname = dLicence;
    const place = document.getElementById("usrPlace").value;
    model.input.registration.lastname = place;
    const interest = document.getElementById("usrInterest").value;
    model.input.registration.lastname = interest;
    const exp = document.getElementById("usrExp").value;
    model.input.registration.lastname = exp;
    const date = document.getElementById("usrDate").value;
    model.input.registration.lastname = date;
    const travel = document.getElementById("usrTravel").value;
    model.input.registration.lastname = travel;
    const info = document.getElementById("usrinfo").value;
    model.input.registration.lastname = info;

    const id = model.app.usrId;
    const index = model.data.users.usr.findIndex((usr) => usr.id === id);

    if (fname !== null && fname !== "") {
        model.data.users.usr[index].fname = model.input.registration.firstname;
    }
    if (lname !== null && lname !== "") {
        model.data.users.usr[index].lname = model.input.registration.lastname;
    }
    if (password !== null && password !== "") {
        model.data.users.usr[index].password =
            model.input.registration.password;
    }
    if (gender !== null && gender !== "") {
        model.data.users.usr[index].gender = model.input.registration.gender;
    }
    if ((email !== null) & (email !== "")) {
        model.data.users.usr[index].email = model.input.registration.email;
    }
    if (phone !== null && phone !== "") {
        model.data.users.usr[index].phone = model.input.registration.phone;
    }
    if (age !== null && age !== "") {
        model.data.users.usr[index].age = model.input.registration.age;
    }
    if (ethnicity !== null && ethnicity !== "") {
        model.data.users.usr[index].ethnicity =
            model.input.registration.ethnicity;
    }
    if (dLicence !== null && dLicence !== "") {
        model.data.users.usr[index].driverLicence =
            model.input.registration.driverLicence;
    }
    if (place !== null && place !== "") {
        model.data.users.usr[index].place = model.input.registration.place;
    }
    if (interest !== null && interest !== "") {
        model.data.users.usr[index].interest = model.input.registration.place;
    }
    if (exp !== null && exp !== "") {
        model.data.users.usr[index].exp = model.input.registration.exp;
    }
    if (date !== null && date !== "") {
        model.data.users.usr[index].date = model.input.registration.date;
    }
    if (travel !== null && travel !== "") {
        model.data.users.usr[index].travel = model.input.registration.travel;
    }
    if (info !== null && info !== "") {
        model.data.users.usr[index].info = model.input.registration.info;
    }
}
