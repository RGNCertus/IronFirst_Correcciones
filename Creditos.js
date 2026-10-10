// =====================================================================
//  CREDITOS FINALES
//  Cargalo en el index.html ANTES de JavaScript.js
// =====================================================================


// ---------- CONFIGURACION: aqui editas los nombres y textos ----------
var CREDITOS_CONFIG = {
    equipo: "3x3 Studios",
    logo: "IMG/equipo_logo.png",

    participantes: [
        "Rodrigo Grimaldo",
        "Mirian Guadalupe ",
        "Victor Lopez",
        "Angelo Daza"
        // ,"Participante 5"   <-- para agregar un 5to participante, borra las // y cambia el nombre
    ],

    textoBase: "Basado en el proyecto <b>IRON FIST</b><br>del grupo Omega",
    mensajeFinal: "¡GRACIAS POR JUGAR!",
    proximamente: "Próximamente: Iron Fist 2",

    velocidad: 45    // velocidad del desplazamiento en pixeles por segundo (menos = mas lento)
}


function IniciarCreditos() {

    var cfg = CREDITOS_CONFIG
    var tablero = document.getElementById("Startlvl3").parentElement   // la caja del juego del nivel 3
    var triunfo = document.getElementById("Triunfo")
    if (triunfo) {
        triunfo.pause()
        triunfo.currentTime = 0
    }

    var nombres = cfg.participantes.map(function (nombre) {
        return '<p class="creditos-nombre">' + nombre + '</p>'
    }).join("")

    var pantalla = document.createElement("div")
    pantalla.id = "PantallaCreditos"
    pantalla.innerHTML =
        '<div id="CreditosRodillo">' +
            '<img src="' + cfg.logo + '" class="creditos-logo" alt="Logo del equipo">' +
            '<h2 class="creditos-equipo">' + cfg.equipo + '</h2>' +
            '<div class="creditos-linea"></div>' +
            '<h3 class="creditos-subtitulo">PARTICIPANTES</h3>' +
            nombres +
            '<div class="creditos-linea"></div>' +
            '<p class="creditos-base">' + cfg.textoBase + '</p>' +
        '</div>' +
        '<div id="CreditosFinalBloque">' +
            '<h2 class="creditos-gracias">' + cfg.mensajeFinal + '</h2>' +
            '<p class="creditos-proximamente">' + cfg.proximamente + '</p>' +
        '</div>'

    tablero.appendChild(pantalla)
    void pantalla.offsetWidth
    pantalla.classList.add("visible")

    // La musica epica de los creditos arranca aqui
    var musica = document.getElementById("Musica_Final")
    if (musica) {
        musica.play().catch(function (error) {
            console.log("Error al reproducir:", error)
        })
    }

    // Cuando termina el fundido a negro, empieza a subir el texto
    setTimeout(function () {

        var rodillo = document.getElementById("CreditosRodillo")
        var alturaCaja = tablero.clientHeight
        var alturaRodillo = rodillo.offsetHeight
        var distancia = alturaCaja + alturaRodillo
        var duracion = distancia / cfg.velocidad * 1000

        var animacion = rodillo.animate(
            [
                { transform: "translateY(0px)" },
                { transform: "translateY(-" + distancia + "px)" }
            ],
            { duration: duracion, easing: "linear", fill: "forwards" }
        )

        animacion.onfinish = function () {
            var bloqueFinal = document.getElementById("CreditosFinalBloque")
            bloqueFinal.classList.add("visible")

            // El mensaje final se queda 3.5s, se desvanece y recien ahi aparecen los resultados dentro de los creditos
            setTimeout(function () {
                bloqueFinal.classList.remove("visible")

                setTimeout(function () {
                    MostrarPuntuacionFinal(pantalla)
                }, 1500)
            }, 3500)
        }

    }, 1800)
}