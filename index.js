
function eldenRingFetch() {
    fetch('https://eldenring.fanapis.com/api/bosses')
    .then(r => r.json())
    .then(data => renderMonsters(data))
}
eldenRingFetch();


const monsterName = document.querySelector("#name")
function renderMonsters(monsters) {
    monsters.data.forEach((monster) =>  {
        const p = document.createElement('p')
        p.textContent = monster.name
        console.log(p)
        monsterName.append(p)
    })
    //removes duplicate
    document.querySelector("#name > p:nth-child(3)").remove()
}
