let skorKen = 0;
let skorPlayer = 0;
let timeOut = "";

let ken = document.getElementById("ninja-ken");

let spalshScreen = document.getElementsByClassName("splash")[0];
let startGame = document.getElementsByClassName("start")[0];
let displaySkorKen = document.getElementsByClassName("skor-ken")[0];
let displaySkorPlayer =document.getElementsByClassName("skor-player")[0];

let reset = document.getElementById("reset");
let batu = document.getElementById("batu");
let gunting = document.getElementById("gunting");
let kertas = document.getElementById("kertas");

if(localStorage.getItem("skorKen")){
    skorKen = localStorage.getItem("skorKen");
    displaySkorKen.innerHTML = skorKen;
}

if(localStorage.getItem("skorPlayer")){
    skorKen = localStorage.getItem("skorPlayer");
    displaySkorKen.innerHTML = skorKen;
}


startGame.addEventListener("click", () => {
spalshScreen.style.top = "120vh";
spalshScreen.style.transition = "1s";
});

batu.addEventListener("click",() => {
    janken(0);
});

gunting.addEventListener("click",() => {
    janken(1);
});

kertas.addEventListener ("click",() => {
    janken(2);
});

reset.addEventListener ("click",() =>{
    if(confirm("Ini akan memulai ulang permainan, Anda yakin?")){
        skorKen = 0;
        skorPlayer = 0;
        displaySkorKen.innerHTML = skorKen;
        displaySkorPlayer.innerHTML = skorPlayer;
        localStorage.clear();
    };
});

function janken(tangan){
    let jariken = Math.floor(Math.random() * 3);

    switch(jariken) {
    case 0:
        ken.style.backgroundImage = "url(res/ken-batu.png)";
    break;
    case 1:
        ken.style.backgroundImage = "url(res/ken-gunting.png)";
    break;
    case 2:
        ken.style.backgroundImage = "url(res/ken-kertas.png)";
    break;
    }
    
ken.classList.remove("goyang");

switch (tangan) {
    case 0:
        if (jariken == 0) {
            result("draw");
        }else if (jariken == 1){
            result("player");
        }else {
            result("ken");
        }
        break;
    case 1:
        if (jariken == 0) {
            result("ken");
        }else if (jariken == 1) {
            result("draw");
        }else {
            result("player");
        }
        break;
default:
        if (jariken == 0) {
            result("player");
        }
        else if (jariken == 1) {
            result("ken");
        }
        else {
            result("draw");
        }
        break;
    }
}

function result (who) {
    clearTimeout(timeOut);

    switch (who) {
        case "ken":
        localStorage.setItem("skorken", skorKen);
        skorKen++;
        displaySkorKen.innerHTML = skorKen;
        console.log("Ninja Ken Menang");
    break;
        case "player":
        skorPlayer++;
        localStorage.setItem("skorPlayer", skorPlayer);
        displaySkorPlayer.innerHTML = skorPlayer;
        console.log("anda menang");
        break;
    default:
        console.log("seri");
        break;
    }

    timeOut = setTimeout(() => {
        ken.style.removeProperty("background-image");
        ken.classList.add("goyang");
    }, 3000);
}