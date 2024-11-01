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
            model.input.registration.interest = hobby
            console.log(model.data.users.userInterests)
            console.log(model.input.registration.interest)

        }
        else{alert('Din hobby eksisterer i oversikt listen, venligst huk av for ønskede hobbyer i listen først')}
}
function genderPush(G)
{
    model.input.registration.gender = G
}

function licencePush(L)
{
    if(!model.input.registration.driverLicence.includes(L)){
    model.input.registration.driverLicence.push(L)}
    creatAccountView()
}
function dayPush(day) 
{
    model.input.registration.date.push(day)
}
function hobbyPush(hobby) 
{
    if(!model.input.registration.interest.includes(hobby)){
        model.input.registration.interest.push(hobby)}
    creatAccountView()
}


function regiseter() 
{
    let p = model.input.registration
    console.log(p.firstname, p.lastname, p.email, p.password)
    if(p.firstname != null && p.lastname != null && p.email != null && p.password != null){
    let newUser = {
            id: model.data.users.usr.length + 1,
            firstname: p.firstname,
            lastname: p.lastname,
            email: p.email,
            password: p.password,
            phone: p.phone,
            age: p.age,
            gender: p.gender,
            ethnicity: p.ethnicity,
            driverLicence: p.driverLicence,
            place: p.place,
            interest: p.interest,
            exp: p.exp,
            date: p.date,
            travel: p.travel,
            info: p.info,
            picture: p.picture,
    }  
    model.app.usrId = newUser.id
    model.data.users.usr.push(newUser)
    console.log( model.data.users.usr)
    p.id = null
    p.firstname = null
    p.lastname = null
    p.email = null
    p.password = null
    p.phone = null
    p.age = null
    p.gender = null
    p.ethnicity = null
    p.driverLicence = []
    p.place = null
    p.interest = []
    p.exp = null
    p.date = [],
    p.travel = null
    p.info = null
    p.picture = null

    model.app.page = 'userView'
    pageSwitch()
}
else{ alert('fyll ut Fornavn, Etternavn, Email og Passord for å registrere bruker')}
}

function myLicensesPrint()
{
    let print = '';
    for(let i = 0; i < model.input.registration.driverLicence.length; i++)
        {
            print += ` ${model.input.registration.driverLicence[i]},`
        }
    return print;
}

function hobbyPrint()
{
    let print = '';
    for(let i = 0; i < model.input.registration.interest.length; i++)
        {
            print += `  ${model.input.registration.interest[i]},`
        }
    return print;
}