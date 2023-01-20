function eldenRingFetch() {
    fetch('https://eldenring.fanapis.com/api/bosses')
    .then(r => r.json())
    .then(data => renderMonsters(data))
}
eldenRingFetch();

function renderMonsters(monsters) {
    monsters.forEach((monster) =>  {
        console.log(monster);
    })
}