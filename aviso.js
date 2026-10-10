(function () {

    var aviso = document.getElementById("PantallaAviso")
    var boton = document.getElementById("BotonContinuarAviso")

    if (sessionStorage.getItem("ReproducirIntro") == "si") {
        aviso.style.display = "none"
        return
    }

    aviso.addEventListener("click", function (evento) {
        evento.stopPropagation()
    })

    boton.addEventListener("click", function () {
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