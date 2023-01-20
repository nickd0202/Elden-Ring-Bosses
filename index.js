
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
        const contain = document.createElement('div')
        const img = document.createElement('img')
        p.textContent = monster.name
        console.log(p)
        img.src = monster.image
        img.alt = "Avatar"
        
        img.className = "profile"
        p.className = "name"
        div.className = "card"
        contain.className = "container"
        
        contain.append(p)
        div.append(img)
        div.append(contain)
        allMonsters.append(div) 
    })
    //removes duplicate
    document.querySelector("#all > div:nth-child(3)").remove()
    document.querySelector("#all > div:nth-child(10)").remove()
    document.querySelector("#all > div:nth-child(1) > img").src = "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lesser_abductor_virgin_enemies_elden_ring_wiki_600px.jpg"

}



