function eldenRingFetch() {
    fetch('https://eldenring.fanapis.com/api/bosses')
    .then(r => r.json())
    .then(data => renderMonsters(data))
}
eldenRingFetch();

function renderMonsters(monsters) {
    monsters.data.forEach((monster) =>  {
        console.log(monster);
        monsterImage = 
    })
}