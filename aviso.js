// =====================================================================
//  AVISO INICIAL
//  Este script va justo debajo del bloque HTML de #PantallaAviso
// =====================================================================
(function () {

    var aviso = document.getElementById("PantallaAviso")
    var boton = document.getElementById("BotonContinuarAviso")

    // Si venimos del boton "Volver al inicio", el aviso no se vuelve a mostrar
    // (JavaScript.js se encarga de reproducir la musica de intro en ese caso)
    if (sessionStorage.getItem("ReproducirIntro") == "si") {
        aviso.style.display = "none"
        return
    }

    // Los clics sobre el aviso no deben llegar al resto de la pagina,
    // asi la musica de intro no arranca antes de presionar CONTINUAR
    aviso.addEventListener("click", function (evento) {
        evento.stopPropagation()
    })

    boton.addEventListener("click", function () {
        // Este clic ya cuenta como "interaccion" para el navegador, asi que el audio puede sonar
        var intro = document.getElementById("Musica_Intro")
        intro.play().catch(function (error) {
            console.log("Error al reproducir:", error)
        })

        aviso.classList.add("oculto-aviso")
        setTimeout(function () {
            aviso.style.display = "none"
        }, 800)
    })

})()