function creatHobbyOptions(){
    let list;
    for(let i = 0; i < model.data.users.userInterests.length; i++) 
        {
            list += `<option>${model.data.users.userInterests[i]}</option>`
        }
        return list
}

function addHobby(hobby)
{
    if(model.data.users.userInterests.includes(hobby) == false)
        {
            model.data.users.userInterests.push(hobby)
            console.log(model.data.users.userInterests)
        }
        else{alert('Din hobby eksisterer i oversikt listen, venligst huk av for ønskede hobbyer i listen først')}
}

function autogenId()
{
    model.input.registration.id = model.data.users.usr.length + 1
    console.log(model.input.registration.id)
}


function getInputFirstName(input)
{
    model.input.registration.firstname = input
}
function getInputLastName(input)
{
    model.input.registration.lastname = input
}
function getInputEmail(input)
{
    model.input.registration.email = input
}
function getInputPassword(input)
{
    model.input.registration.password = input
}
function getInputPhone(input)
{
    model.input.registration.phone = input
}
function getInputAge(input)
{
    model.input.registration.age = input
}
function getInputGender(input)
{
    model.input.registration.gender = input
}
function getInputEthnicity(input)
{
    model.input.registration.ethnicity = input
}
function getInputLicens(input)
{
    model.input.registration.driverLicence = input
}
function getInputPlace(input)
{
    model.input.registration.place = input
}
function getInputInterest(input)
{
    model.input.registration.interest = input
}
function getInputExp(input)
{
    model.input.registration.exp = input
}
function getInputTime(input)
{
    model.input.registration.time = input
}
function getInputTravel(input)
{
    model.input.registration.travel = input
}
function getInputInfo(input)
{
    model.input.registration.info = input
}
function getInputPic(input)
{
    model.input.registration.picture = input
}

function regisetr() 
{
    let p = model.input.registration


    model.data.users.usr.push(p)

    p = null
    
}