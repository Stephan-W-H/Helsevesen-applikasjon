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