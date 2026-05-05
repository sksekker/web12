// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  
 { text: "Hola amorcito bello :3 ¿cómo estás?", time: 0 },
{ text: "¿Qué te parece esto? jaja, está bonito ¿no?", time: 5 },
{ text: "Pero más bonito es que cada día,", time: 7 },
{ text: "te pienso como si fueras mi vida misma", time: 10 },
{ text: "eres lo más importante para mí,", time: 13 },
{ text: "y lo mejor que me ha pasado, amor", time: 16 },
{ text: "siempre te amaré como el primer día", time: 19 },
{ text: "cuando miré tus ojos lindos", time: 23 },
{ text: "quedé en shock, omg, fue como ver una estrella", time: 27 },
{ text: "o como mirar el cielo despejado", time: 33 },
{ text: "ahora puedo decir que encontré al amor de mi vida", time: 38 },
{ text: "te prometo mi niña que daré todo", time: 41 },
{ text: "por ti", time: 43 },
{ text: "te mereces el cielo mismo", time: 45 },
{ text: "te mereces mi corazón en un llavero", time: 48 },
{ text: "te mereces eso y más", time: 53 },
{ text: "ahora sí, modo romeo jaja", time: 56 },
{ text: "mi niña, desde que te vi mi corazón se quedó en pausa", time: 62 },
{ text: "hiciste que mi vida empezara de nuevo", time: 70 },
{ text: "como una cura para el alma", time: 73 },
{ text: "desde tu llegada mi vida suena como esta música", time: 78 },
{ text: "desde que llegaste mi vida cambió", time: 86 },
{ text: "tus ojos son como dos estrellas", time: 93 },
{ text: "que hasta la luna se inclina para verte", time: 103 },
{ text: "mi amor eres un poema de amor", time: 111 },
{ text: "y tu nombre en mi corazón late siempre", time: 118 },
{ text: "como un canto que nunca termina jaja me inspiré está bonito no? te amooo", time: 125 },
{ text: "TE AMOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO", time: 130 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
