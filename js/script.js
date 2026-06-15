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

const cartas = {

    1:{
        titulo:"❤️ Tu sonrisa",
        texto:"Porque tiene la capacidad de alegrar incluso mis días más difíciles."
    },

    2:{
        titulo:"❤️ Tu forma de ser",
        texto:"Porque eres una persona increíble y auténtica."
    },

    3:{
        titulo:"❤️ Tu apoyo",
        texto:"Porque siempre estás ahí cuando te necesito."
    },

    4:{
        titulo:"❤️ Tu compañía",
        texto:"Porque cualquier lugar es mejor si estoy contigo."
    },

    5:{
        titulo:"❤️ Tu manera de cuidarme",
        texto:"Porque siempre encuentras una forma de hacerme sentir querido."
    },

    6:{
        titulo:"❤️ Porque eres tú",
        texto:"Porque no necesito ninguna razón complicada para amarte."
    }

};

function abrirSobre(id){

    document.getElementById(
        "tituloCarta"
    ).innerText =
    cartas[id].titulo;

    document.getElementById(
        "textoCarta"
    ).innerText =
    cartas[id].texto;

    document.getElementById(
        "modalCarta"
    ).style.display =
    "flex";
}

function cerrarCarta(){

    document.getElementById(
        "modalCarta"
    ).style.display =
    "none";
}

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

