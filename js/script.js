const pantallaRegalo =
document.getElementById("pantallaRegalo");

pantallaRegalo.addEventListener("click", () => {

    pantallaRegalo.style.display = "none";

    document.getElementById("inicio")
        .classList.remove("oculta");

});

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

const btnFinal =
document.getElementById("btnFinal");

btnFinal.addEventListener("click", () => {

    document.getElementById("razones")
        .classList.add("oculta");

    document.getElementById("sobre")
        .classList.remove("oculta");

    setTimeout(() => {

        document
            .getElementById("sobreAnimado")
            .classList.add("abierto");

    },500);

    setTimeout(() => {

        document.getElementById("sobre")
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

    },3000);

});

const btnReiniciar =
document.getElementById("btnReiniciar");

btnReiniciar.addEventListener("click", () => {

    document.getElementById("inicio")
        .classList.add("oculta");

    document.getElementById("recuerdos")
        .classList.add("oculta");

    document.getElementById("razones")
        .classList.add("oculta");

    document.getElementById("final")
        .classList.add("oculta");

    document.getElementById("pantallaRegalo")
        .style.display = "flex";

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

const btnVolverInicio =
document.getElementById("btnVolverInicio");

btnVolverInicio.addEventListener("click", () => {

    document.getElementById("recuerdos")
        .classList.add("oculta");

    document.getElementById("inicio")
        .classList.remove("oculta");

});

const btnVolverRecuerdos =
document.getElementById("btnVolverRecuerdos");

btnVolverRecuerdos.addEventListener("click", () => {

    document.getElementById("razones")
        .classList.add("oculta");

    document.getElementById("recuerdos")
        .classList.remove("oculta");

});

const btnVolverRazones =
document.getElementById("btnVolverRazones");

btnVolverRazones.addEventListener("click", () => {

    document.getElementById("final")
        .classList.add("oculta");

    document.getElementById("razones")
        .classList.remove("oculta");

});