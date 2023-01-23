
function eldenRingFetch() {
    fetch('https://eldenring.fanapis.com/api/bosses')
    .then(r => r.json())
    .then(data => renderMonsters(data))
}
eldenRingFetch();
const displayImage = document.querySelector("body > div.display > div.img-display > img");

const allMonsters = document.querySelector("#all")
function renderMonsters(monsters) {
    monsters.data.forEach((monster) =>  {
        const pName = document.createElement('p')
        const divCard = document.createElement('div')
        const contain = document.createElement('div')
        const img = document.createElement('img')
        pName.textContent = monster.name
        console.log(pName)
        img.src = monster.image
        img.alt = "Avatar"
        
        img.className = "profile"
        pName.className = "name"
        divCard.className = "card"
        contain.className = "container"
        
        contain.append(pName)
        divCard.append(img)
        divCard.append(contain)
        allMonsters.append(divCard) 

        divCard.addEventListener ("click", () => {
            displayImage.src = img.src

        })
    })
    //removes duplicate
    document.querySelector("#all > div:nth-child(3)").remove()
    document.querySelector("#all > div:nth-child(10)").remove()
    document.querySelector("#all > div:nth-child(1) > img").src = "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lesser_abductor_virgin_enemies_elden_ring_wiki_600px.jpg"
    
    //If we want to change out the images that are fuzzy
    //document.querySelector("#all > div:nth-child(2)").remove();
    //document.querySelector("#all > div:nth-child(2) > img").src = "https://www.gamerguides.com/assets/media/14/451/alecto_black_knife_ringleader.png"

    
}



