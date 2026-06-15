const btnRecuerdos = document.getElementById("btnRecuerdos");

btnRecuerdos.addEventListener("click", () => {

    document.getElementById("inicio").classList.add("oculta");

    document.getElementById("recuerdos").classList.remove("oculta");

});

const btnRazones = document.getElementById("btnRazones");

btnRazones.addEventListener("click", () => {

    document.getElementById("recuerdos")
        .classList.add("oculta");

    document.getElementById("razones")
        .classList.remove("oculta");

});

function abrirCarta(carta){

    carta.classList.toggle("abierta");

    crearCorazon();

}

const btnVideo = document.getElementById("btnVideo");

btnVideo.addEventListener("click", () => {

    document.getElementById("razones")
        .classList.add("oculta");

    document.getElementById("video")
        .classList.remove("oculta");

});

const btnFinal = document.getElementById("btnFinal");

btnFinal.addEventListener("click", () => {

    document.getElementById("video")
        .classList.add("oculta");

    document.getElementById("final")
        .classList.remove("oculta");
confetti({

    particleCount:150,

    spread:100,

    origin:{
        y:0.6
    }

});
});

const btnReiniciar = document.getElementById("btnReiniciar");

btnReiniciar.addEventListener("click", () => {

    document.getElementById("final")
        .classList.add("oculta");

    document.getElementById("inicio")
        .classList.remove("oculta");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

function crearCorazon(){

    const corazon = document.createElement("div");

    corazon.classList.add("corazon");

    corazon.innerHTML = "❤️";

    corazon.style.left = Math.random()*100 + "vw";

    document
        .getElementById("corazones-container")
        .appendChild(corazon);

    setTimeout(() => {

        corazon.remove();

    },8000);

}

setInterval(crearCorazon,800);
