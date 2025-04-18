// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  
  { text: "Morena mía, voy a contarte hasta diez", time: 12 },
  { text: "Uno es el sol que te alumbra,", time: 17 },
  { text: "Dos tus piernas que matan,", time: 21 },
  { text: "Somos tres en tu cama (tres)", time: 25 },
  { text: "Morena mía, el cuarto viene después,", time: 29 },
  { text: "Cinco tus continentes", time: 33 },
  { text: "Seis las medias faenas de mis medios calientes,", time: 37 },
  { text: "Sigo contando ahorita", time: 42 },
  { text: "Bien, bien, bien, bien, bien, bien", time: 44 },
  { text: "Morena mía, siete son los pecados cometidos,", time: 49 },
  { text: "Suman ocho conmigo, nueve los que te cobro,", time: 53 },
  { text: "Más de diez he sentido", time: 58 },
  { text: "Y por mi parte,", time: 61 },
  { text: "Sobra el arte lo que me das,", time: 63 },
  { text: "Dámelo, dámelo bien,", time: 66 },
  { text: "Un poco aquí y un poco ¿a quién?", time: 69 },
  { text: "Cuando tu boca, me toca, me pone y me provoca,", time: 75 },
  { text: "Me muerde y me destroza, toda siempre es poca", time: 80 },
  { text: "Y muévete bien,", time: 85 },
  { text: "Que nadie como tú me sabe hacer café", time: 88 },
  { text: "Morena gata, ay me mata, me mata y me remata,", time: 92 },
  { text: "Vamos pa'l infierno, aunque no sea eterno,", time: 96 },
  { text: "Suave bien, bien que nadie como tú me sabe hacer café", time: 101 },
  { text: "Pero cuando tu boca, me toca, me pone y me provoca,", time: 106 },
  { text: "Me muerde y me destroza toda siempre es poca", time: 111 },
  { text: "Y muévete bien, bien, bien, bien", time: 116 },
  { text: "Que nadie como tú me sabe hacer", time: 120 },
  { text: "Mmm café", time: 123 },
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
