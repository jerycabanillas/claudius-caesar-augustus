// FECHA FINAL (CAMBIA ESTO)
var countDownDate = new Date("December 31, 2025 23:59:59").getTime();

// Actualizar la cuenta regresiva cada 1 segundo
var x = setInterval(function () {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  // Cálculos de tiempo
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar countdown
  document.getElementById("demo").innerHTML =
    "<p class='d'>" + days + "<br><span>Días</span></p>" +
    "<p class='h'>" + hours + "<br><span>Horas</span></p>" +
    "<p class='m'>" + minutes + "<br><span>Minutos</span></p>" +
    "<p class='s'>" + seconds + "<br><span>Segundos</span></p>";

  // CUANDO TERMINA
  if (distance <= 0) {
    clearInterval(x);

    // Ocultar contador
    document.getElementById("demo").style.display = "none";

    // Mostrar contenido final
    var info = document.getElementsByClassName("info");
    if (info.length > 0) {
      info[0].style.display = "block";
      info[0].style.height = "100vh";
      info[0].innerHTML =
        "<div class='mensaje-final'>" +
        "🗝️ El tiempo ha terminado. La verdad ha sido revelada." +
        "</div>";
    }

    // Ocultar h3 si existe
    const nodeList = document.querySelectorAll("h3");
    if (nodeList.length > 0) {
      nodeList[0].style.display = "none";
    }
  }

}, 1000);
