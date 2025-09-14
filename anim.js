// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  
  { text: "Hola Señorita de ojos lindos", time: 0 },
  { text: "que te parece esto sjsjjss ta bonito no ?", time: 5 },
  { text: "pero mas bonito es que cada dia,", time: 7 },
  { text: "te piense como si fueras mi elixir de vida", time: 10 },
  { text: "aun recuerdo el dia que te vi,", time: 13 },
  { text: "la verdad pense que no te caia", time: 16 },
  { text: "o que me ibas a mandar a volar jsjssj", time: 19 },
  { text: "pero cuando mire tus ojos lindos ", time: 23 },
  { text: "quede en shock omaga me fue como mirar una estrella", time: 27 },
  { text: "o como mirar el cielo despejado ", time: 33 },
  { text: "ahora puedo decir que el amor primera vista si exite", time: 38 },
  { text: "te prometo mi niña que dare todo", time: 41 },
  { text: "por ti ", time: 43 },
  { text: "te mereces el cielo mismo", time: 45 },
  { text: "te mereces mi corazon en un llavero", time: 48 },
  { text: "te mereces eso y mas ", time: 53 },
  { text: "ahora si modo romeo jajaj", time: 56 },
  { text: "Mi niña desde que te vi mi corazon se quedo en pausa", time: 62 },
  { text: "hiciste que mi vida se reiniciara", time: 70 },
  { text: "como si de una cura al alma se tratase", time: 73 },
  { text: "desde tu llegada mi vida suena como esta musica", time: 78 },
  { text: "desde que llegste mi vida cambio", time: 86 },
  { text: "tus ojos son como dos estrellas", time: 93 },
  { text: "que hasta la luna se inclina para verte", time: 103 },
  { text: "Vanesa eres poema entre letras de amor", time: 111 },
  { text: "y tu nombre en mi corazon late eterno", time: 118 },
  { text: "como un canto que nunca termina hsjsjsjs hay me falto inspiracionnpero ta bonito sjsjs", time: 125 },
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
