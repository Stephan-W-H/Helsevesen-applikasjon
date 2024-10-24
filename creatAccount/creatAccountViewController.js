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




function regisetr() 
{
    let p = model.input.registration
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
            date: {
                startTime: p.date.startTime,
                stoptime: p.date.stoptime,
                days: p.date.days
            },
            travel: p.travel,
            info: p.info,
            picture: p.picture,
    }  

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
    p.driverLicence = null
    p.place = null
    p.interest = null
    p.exp = null
    p.date = {
        startTime: '',
        stoptime: '',
        days: [],
    },
    p.travel = null
    p.info = null
    p.picture = null
    
}