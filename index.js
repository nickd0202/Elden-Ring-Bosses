
function eldenRingFetch() {
    fetch('https://eldenring.fanapis.com/api/bosses')
    .then(r => r.json())
    .then(data => renderMonsters(data))
}
eldenRingFetch();


const displayImage = document.querySelector("body > div.display > div.img-display > img")


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

    //Changing images that are fuzzy
    document.querySelector("#all > div:nth-child(1) > img").src = "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lesser_abductor_virgin_enemies_elden_ring_wiki_600px.jpg"
    document.querySelector("#all > div:nth-child(2) > img").src = 'https://www.gamerguides.com/assets/media/14/451/alecto_black_knife_ringleader.png'
    document.querySelector("#all > div:nth-child(5) > img").src = 'https://i.ytimg.com/vi/ifZv-hggyV8/maxresdefault.jpg'
    document.querySelector("#all > div:nth-child(7) > img").src = 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ancient-hero-of-zamor-weeping-evergaol-elden-ring-wiki-guide.jpg'
    document.querySelector("#all > div:nth-child(8) > img").src = 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/gurranqbeast.jpg'
    document.querySelector("#all > div:nth-child(9) > img").src = 'https://files.cults3d.com/uploaders/14854341/illustration-file/0cea31d3-3600-4f2a-ac4d-8fb5f5e067a0/Untitled-1.jpg'
    document.querySelector("#all > div:nth-child(10) > img").src = 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/azula_beastman_2_enemies_elden_ring_wiki_600px.jpg'
    document.querySelector("#all > div:nth-child(11) > img").src = 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/elden-ring/b/b3/Elden_DragonB_BellHunter.jpg'
    document.querySelector("#all > div:nth-child(12) > img").src = 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/black-blade-kindred-1-hq-elden-ring-wiki-guide.jpg'
    document.querySelector("#all > div:nth-child(14) > img").src = 'https://lh4.googleusercontent.com/DBL8c2zAhtu6_iB0kZz1lvMoUV04BQ0yP3hBjDzfxpTwkutjdieOeVJgqpqbKRWAOpno53gaR7zd2EP-BGeEAk-PgK8ApJn3smWjvHnP7izhf3pZqd-e_FVVV_kArkMMhbOkDEWNiyHkjGmChw'
    document.querySelector("#all > div:nth-child(15) > img").src = 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/burial_watchdog_bosses_elden_ring_wiki_600px.jpg'
    document.querySelector("#all > div:nth-child(16) > img").src = 'https://www.gamerguides.com/assets/media/14/2253/cleanrot_knight.png'
    document.querySelector("#all > div:nth-child(17) > img").src = 'https://staticg.sportskeeda.com/editor/2022/06/7c130-16563483853112-1920.jpg'
    document.querySelector("#all > div:nth-child(18) > img").src = 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/07/elden-ring-commander-niall-1.jpg'

}   


    const largeImage = document.querySelector("body > div.display > div.img-display > img")
    largeImage.addEventListener('mousemove', cardMouseMove)

    function cardMouseMove(event) {
        const picWidth = largeImage.offsetWidth;
        const picHeight = largeImage.offsetHeight;
        const centerX = largeImage.offsetLeft + picWidth/2;
        const centerY = largeImage.offsetTop + picHeight/2;
        const mouseX = event.clientX - centerX;
        console.log(mouseX)
        const mouseY = event.clientY - centerY;
        const rotateX = ((+1)*6*mouseY/(picHeight/2)).toFixed(2);
        const rotateY = ((-1)*6*mouseX/(picWidth/2)).toFixed(2);


        largeImage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                                    
        
    }
    cardMouseMove()
