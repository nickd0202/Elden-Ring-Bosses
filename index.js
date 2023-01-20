
function eldenRingFetch() {
    fetch('https://eldenring.fanapis.com/api/bosses')
    .then(r => r.json())
    .then(data => renderMonsters(data))
}
eldenRingFetch();


const allMonsters = document.querySelector("#all")
function renderMonsters(monsters) {
    monsters.data.forEach((monster) =>  {
        const p = document.createElement('p')
        const div = document.createElement('div')
        p.textContent = monster.name
        console.log(p)
        p.className = "name"
        div.className = "card"
        div.append(p)
        allMonsters.append(div) 
    })
    //removes duplicate
    document.querySelector("#all > div:nth-child(3) > p").remove()
}



