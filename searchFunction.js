function searchView()
{
    model.app.inView = /*html*/ `
    <input type="text" onchange="search(this.value)" placeholder="search for user">

    <div>${printReslut()}</div>`
    updateView()
}

function search(input)
{
    let result = []
    for(let i = 0; i< model.data.users.usr.length; i++){
        if      (Object.values(model.data.users.usr[i]).includes(input))
                {result.push(model.data.users.usr[i])}
        else if (Object.values(model.data.users.usr[i].interest).includes(input))
                {result.push(model.data.users.usr[i])}
        else if (Object.values(model.data.users.usr[i].driverLicence).includes(input))
                {result.push(model.data.users.usr[i])}

    console.log(result)
}
 model.input.searchResult = result
 searchView()
}

function printReslut()
{
    let print = ''
    for(let i = 0; i< model.input.searchResult.length; i++)
    {
        print += `<div>${model.input.searchResult[i].fname}</div>`
    }
    return print
}

