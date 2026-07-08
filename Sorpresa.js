// Carta
const regalo = document.querySelector(".regalo");
const regalos = document.querySelector(".regalos");
const modalCarta = document.getElementById("modalCarta");

const tituloCarta = document.getElementById("tituloCarta");
const textoCarta = document.getElementById("textoCarta");
const imagenCarta = document.getElementById("imagenCarta");

const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

const paginaActualTexto = document.getElementById("paginaActual");

let paginaActual = 0;

const paginas = [

{
titulo:"Aurora ❤️",
texto:"Otro año más que comparto un cumpleaños contigo aurorita y me siento afortunado de poder estar aquí.",
imagen:"/recursos/flork/1.png"
},

{
titulo:"Gracias 🌸",
texto:"Gracias por cada sonrisa, por cada conversación, por cada mensaje de apoyo en momentos buenos y dificiles que me han alegrado los días.",
imagen:"/recursos/flork/2.png"
},

{
titulo:"Tu luz ✨",
texto:"Siempre he admirado la forma en que sigues adelante y luchas por tus sueños, te mereces todas las alegrías del mundo eres una gran persona con una gran luz en su interior.",
imagen:"/recursos/flork/3.png"
},

{
titulo:"Tu sonrisa 😊",
texto:"Una mujer llena de vida sinceridad humildad que despierta cada día y da lo mejor de si y que con su sonrisa ha sido capaz de alegrar más días de los que imaginas.",
imagen:"/recursos/flork/4.png"
},

{
titulo:"Un recuerdo ❤️",
texto:"Todo este tiempo junto a ti han significado mucho para mí y guardo con cariño muchos momentos compartidos, siempre te estare agradecido por darme la oportunidad de estar contigo desde el primer momento.",
imagen:"/recursos/flork/5.png"
},

{
titulo:"Mi deseo 🎂",
texto:"Espero que este nuevo año de vida te traiga felicidad, salud y muchas metas cumplidas, muchos exitos en lo que te propongas y que luches sin rendirte.",
imagen:"/recursos/flork/6.png"
},

{
titulo:"Para ti 🌹",
texto:"Este detalle es para ti porque me pareció algo bonito para una persona especial.",
imagen:"/recursos/flork/7.png"
},

{
titulo:"Feliz Cumpleaños ❤️",
texto:"Gracias por llegar hasta aquí. Espero que este pequeño regalo pueda sacarte una sonrisa. Feliz cumpleaños Aurora.",
imagen:"/recursos/flork/8.png"
}

];

function mostrarPagina() {

tituloCarta.textContent =
paginas[paginaActual].titulo;

textoCarta.textContent =
paginas[paginaActual].texto;

imagenCarta.src =
paginas[paginaActual].imagen;

paginaActualTexto.textContent =
paginaActual + 1;

if (paginaActual === 0) {
btnAnterior.style.visibility = "hidden";
}
else {
btnAnterior.style.visibility = "visible";
}

if (paginaActual === paginas.length - 1) {
btnSiguiente.textContent = "Finalizar ❤️";
}
else {
btnSiguiente.textContent = "Siguiente ▶";
}

}

btnSiguiente.addEventListener("click", () => {

if (paginaActual < paginas.length - 1) {

paginaActual++;

mostrarPagina();

}
else {

modalCarta.classList.remove("activo");

paginaActual = 0;

mostrarPagina();

}

});

btnAnterior.addEventListener("click", () => {

if (paginaActual > 0) {

paginaActual--;

mostrarPagina();

}

});

regalo.addEventListener("click", () => {

paginaActual = 0;

mostrarPagina();

modalCarta.classList.add("activo");

});

regalos.addEventListener("click", () => {

paginaActual = 0;

mostrarPagina();

modalCarta.classList.add("activo");

});

modalCarta.addEventListener("click", (e) => {

if (e.target === modalCarta) {

modalCarta.classList.remove("activo");

}

});

mostrarPagina();

// Todo Oscuro + Soplido + Canción

const overlay = document.querySelector(".overlay");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");
const llama = document.querySelector(".llama");

llama.addEventListener("click", () => {

soplido.currentTime = 0;

soplido.play();

llama.style.animation = "apagar 0.5s forwards";

setTimeout(() => {

cancion.currentTime = 0;

cancion.play();

overlay.classList.add("hidden");

}, 1000);

});