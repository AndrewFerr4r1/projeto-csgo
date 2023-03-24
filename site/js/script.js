const team1 = "FALLEN";
const team2 = "TRYBE";

let turn = team1;

let mapPool = ['Train', 'Mirage', 'Cache', 'Inferno', 'Cobblestone'];


const turnText = document.querySelector("#turnText");
turnText.innerHTML = `É a vez da equipe ${turn} banir o mapa`;

const maps = document.querySelectorAll(".card");

function choosemap(event){
    if(turn == team1){
        turn = team2;
    }else{
        turn = team1;
    }
    turnText.innerHTML = `É a vez da equipe ${turn} banir o mapa`;

    event.currentTarget.classList.add("selected");

    event.currentTarget.removeEventListener("click", choosemap);

    event.currentTarget.querySelector('.accept').innerHTML = `VETADO`;

    const clickedMap = event.currentTarget.querySelector(".map-name").innerText;

    mapPool = mapPool.filter(map => map != clickedMap);

    if(mapPool.length === 1){
        const decideMap = document.querySelector(".card:not(.selected)");
        decideMap.classList.add("picked");
        decideMap.removeEventListener("click", choosemap);
        decideMap.classList.add("disable-hover");
        turnText.innerHTML = `O mapa da partida será ${mapPool[0]}`;
    }
}

for(let index = 0; index < maps.length; index++) {
    maps[index].addEventListener("click", choosemap);
}