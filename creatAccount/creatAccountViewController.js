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

function autogenId()
{
    model.input.registration.id = model.data.users.usr.length + 1
    console.log(model.input.registration.id)
}







function getInputTime(input)
{
    model.input.registration.time = input
}



function regisetr() 
{
    let p = model.input.registration


    model.data.users.usr.push(p)

    p = null
    
}