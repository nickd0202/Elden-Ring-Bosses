
function eldenRingFetch() {
    fetch('https://eldenring.fanapis.com/api/bosses')
    .then(r => r.json())
    .then(data => renderMonsters(data))
}
eldenRingFetch();


const displayImage = document.querySelector("body > div.display > div.img-display > img")//.style.display = 'block';


const statsName = document.querySelector("body > div.display > div.stats > p.name2")
const statsRegion = document.querySelector("body > div.display > div.stats > p.region")
const statsDes = document.querySelector("body > div.display > div.stats > p.description")
const statsLocation = document.querySelector("body > div.display > div.stats > p.location")
const statsDrop = document.querySelector("body > div.display > div.stats > p.drop")
const statsHealth = document.querySelector("body > div.display > div.stats > p.health")






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
            statsName.textContent = monster.name
            statsRegion.textContent = monster.region 
            statsDes.textContent = monster.description
            statsLocation.textContent = monster.location 
            statsDrop.textContent = monster.drops 
            statsHealth.textContent = monster.healthPoints
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


    // const largeImage = document.querySelector("body > div.display > div.img-display > img")
    // largeImage.addEventListener('mousemove', cardMouseMove)

    // function cardMouseMove(event) {
        // const picWidth = largeImage.offsetWidth;
        // const picHeight = largeImage.offsetHeight;
        // const centerX = largeImage.offsetLeft + picWidth/2;
        // const centerY = largeImage.offsetTop + picHeight/2;
        // const mouseX = event.clientX - centerX;
        // console.log(mouseX)
        // const mouseY = event.clientY - centerY;
        // const rotateX = ((+1)*8*mouseY/(picHeight/2)).toFixed(2);
        // const rotateY = ((-1)*8*mouseX/(picWidth/2)).toFixed(2);


        // largeImage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                                    // 
        // 
    // }
    
    //cardMouseMove()
