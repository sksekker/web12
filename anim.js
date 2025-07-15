// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  
  { text: "Hola Flor Angelica", time: 0 },
  { text: "yo se que tu estas traumada,", time: 5 },
  { text: "yo tmb los estaba xddddddd,", time: 7 },
  { text: "pero eso no impedira nuestro destino", time: 10 },
  { text: "tmb tienes bloqueo emocional,", time: 13 },
  { text: "yo tmb pero miraa", time: 16 },
  { text: "menos con menos da mas ves jaajjaja", time: 19 },
  { text: "ya pws siento en lo profundo de mi ", time: 23 },
  { text: "que tu sos una buena chica jssjs tipo para mi", time: 27 },
  { text: "xq espere tanto tiempo para encontrar ", time: 33 },
  { text: "a alguien como tu jssjjs nose", time: 38 },
  { text: "si te parece muy cursi no me hagas bullying xd", time: 41 },
  { text: "deja demostrar mi cariño aunque sea", time: 43 },
  { text: "por una pantalla", time: 45 },
  { text: "bueno en fin laiksito y abrazo jsjs", time: 48 },
  { text: "aveces pienso que estas enojada ", time: 53 },
  { text: "por como me miras pero a la vez me enamoro ", time: 56 },
  { text: "esque tienes unos ojos que me penetran en lo mas", time: 62 },
  { text: "profundo de mi corazon", time: 70 },
  { text: "XDddddd", time: 73 },
  { text: "waaaaaaaaa bueno xd ", time: 78 },
  { text: "cuando este listo te pedire matrimonio", time: 86 },
  { text: "espero que  me aceptes ajajaja", time: 93 },
  { text: "y si no que te caiga un rayo waaaaa", time: 103 },
  { text: "yayaa mucho amor talves te da cringe", time: 111 },
  { text: "laiksito, corazoncito, besitos y", time: 118 },
  { text: "y un chape wwaaaaaa", time: 125 },
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
