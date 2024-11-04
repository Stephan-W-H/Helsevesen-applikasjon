//
//
//
function adminEditUsr(event) {
    event.preventDefault();

    //const usrId = document.getElementById("adminEditUsrId").value;
    //model.input.registrationa.id = usrId;
    const fname = document.getElementById("adminEditFname").value;
    model.input.registration.firstname = fname;
    const lname = document.getElementById("adminEditLname").value;
    model.input.registration.lastname = lname;
    const password = document.getElementById("adminEditPassword").value;
    model.input.registration.password = password;
    const gender = document.getElementById("adminEditGender").value;
    model.input.registration.gender = gender;
    const email = document.getElementById("adminEditEmail").value;
    model.input.registration.email = email;
    const phone = document.getElementById("adminEditPhone").value;
    model.input.registration.phone = phone;
    const age = document.getElementById("adminEditAge").value;
    model.input.registration.age = age;
    const ethnicity = document.getElementById("adminEditEthnicity").value;
    model.input.registration.ethnicity = ethnicity;
    const dLicense = document.getElementById("adminEditDriverLicence").value;
    model.input.registration.driverLicence = dLicense;
    const place = document.getElementById("adminEditPlace").value;
    model.input.registration.place = place;
    const interest = document.getElementById("adminEditInterest").value;
    model.input.registration.interest = interest;
    const exp = document.getElementById("adminEditExp").value;
    model.input.registration.exp = exp;
    const date = document.getElementById("adminEditDate").value;
    model.input.registration.date = date;
    const travel = document.getElementById("adminEditTravel").value;
    model.input.registration.travel = travel;
    const info = document.getElementById("adminEditInfo").value;
    model.input.registration.info = info;

    const idOfUsr = model.data.users.adminSeconPage.id;
    const index = model.data.users.usr.findIndex((usr) => usr.id === idOfUsr);

    if (index !== -1) {
        //if (usrId !== null && usrId !== "") {
        //    model.data.users.usr[index].id = model.input.registration.id;
        //}
        if (fname !== null && fname !== "") {
            model.data.users.usr[index].fname =
                model.input.registration.firstname;
        }
        if (lname !== null && lname !== "") {
            model.data.users.usr[index].lname =
                model.input.registration.lastname;
        }
        if (password !== null && password !== "") {
            model.data.users.usr[index].password =
                model.input.registration.password;
        }
        if (gender !== null && gender !== "") {
            model.data.users.usr[index].gender =
                model.input.registration.gender;
        }
        if (email !== null && email !== "") {
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
        if (dLicense !== null && dLicense !== "") {
            model.data.users.usr[index].driverLicence =
                model.input.registration.driverLicence;
        }
        if (place !== null && place !== "") {
            model.data.users.usr[index].place = model.input.registration.place;
        }
        if (interest !== null && interest !== "") {
            model.data.users.usr[index].interest =
                model.input.registration.interest;
        }
        if (exp !== null && exp !== "") {
            model.data.users.usr[index].exp = model.input.registration.exp;
        }
        if (date !== null && date !== "") {
            model.data.users.usr[index].date = model.input.registration.date;
        }
        if (travel !== null && travel !== "") {
            model.data.users.usr[index].travel =
                model.input.registration.travel;
        }
        if (info !== null && info !== "") {
            model.data.users.usr[index].info = model.input.registration.info;
        }
    } else {
        console.log("ERROR");
    }
}
