var PUNTUACION_CONFIG = {
    puntosBase: 1000,              // puntos por completar el juego
    bonoTiempoMax: 1000,           // bono maximo por rapidez (puntaje maximo posible = 2000)
    tiempoSinPenalizar: 300,       // segundos (5:00) hasta los que se da el bono completo
    penalizacionPorSegundo: 1,     // puntos que se pierden por cada segundo extra
    penalizacionPorDerrota: 150,   // puntos que se pierden por cada derrota

    umbralB: 700,                  // desde este puntaje: rango B
    umbralA: 1200,                 // desde este puntaje: rango A
    umbralS: 1600,                 // desde este puntaje: rango S (ademas de tener 0 derrotas)

    volumenMusicaEnResultados: 0.2,   // volumen (0 a 1) al que baja la música de los créditos mientras salen los resultados; 1 = default

    sonidosCambio: {
        B: "soundtrack/cambioC.mp3",
        A: "soundtrack/cambioB.mp3",
        S: "soundtrack/cambioA.mp3"
    },
    sonidoConteo: "soundtrack/score.mp3",
    sonidosRango: {
        C: "soundtrack/sonidoC.mp3",
        B: "soundtrack/sonidoB.mp3",
        A: "soundtrack/sonidoA.mp3",
        S: "soundtrack/sonidoS.mp3"
    }
}

var RANGOS = {
    C: { color: "#9aa5b1", mensaje: "¡SIGUE PRACTICANDO!" },
    B: { color: "#2ee66b", mensaje: "¡BIEN HECHO!" },
    A: { color: "#ffb020", mensaje: "¡EXCELENTE!" },
    S: { color: "#c13cff", mensaje: "¡PERFECTO!" }
}

var EstadisticasJuego = {
    iniciado: false,      // se activa al presionar JUGAR en el nivel 1
    terminado: false,     // se activa al vencer al jefe final
    derrotas: 0,
    segundosJugados: 0
}

var alertSinContar = window.alert.bind(window)
window.alert = function (mensaje) {
    if (EstadisticasJuego.iniciado && !EstadisticasJuego.terminado) {
        EstadisticasJuego.derrotas++
    }
    alertSinContar(mensaje)
}

;(function () {

    var ultimaMarca = Date.now()
    var pantallasPausa = ["Pausa_Pantalla", "Pausa_Pantallalvl2", "Pausa_Pantallalvl3", "Pausa_PantallaFinal"]

    function hayPausa() {
        for (var i = 0; i < pantallasPausa.length; i++) {
            var elemento = document.getElementById(pantallasPausa[i])
            if (elemento && window.getComputedStyle(elemento).display != "none") {
                return true
            }
        }
        return false
    }

    setInterval(function () {
        var ahora = Date.now()
        var delta = Math.min(ahora - ultimaMarca, 500)
        ultimaMarca = ahora

        if (EstadisticasJuego.iniciado && !EstadisticasJuego.terminado && !hayPausa()) {
            EstadisticasJuego.segundosJugados += delta / 1000
        }
    }, 250)

    var botonPlay = document.getElementById("Play")
    if (botonPlay) {
        botonPlay.addEventListener("click", function () {
            EstadisticasJuego.iniciado = true
        })
    }

})()

function CalcularPuntajeFinal() {
    var c = PUNTUACION_CONFIG
    var segundosExtra = Math.max(0, EstadisticasJuego.segundosJugados - c.tiempoSinPenalizar)
    var bonoTiempo = Math.max(0, c.bonoTiempoMax - segundosExtra * c.penalizacionPorSegundo)
    var penalizacion = EstadisticasJuego.derrotas * c.penalizacionPorDerrota

    return Math.max(0, Math.round(c.puntosBase + bonoTiempo - penalizacion))
}

function RangoParaPuntaje(puntaje, derrotas) {
    var c = PUNTUACION_CONFIG

    if (puntaje >= c.umbralS && derrotas == 0) { return "S" }   // el S exige una partida sin derrotas
    if (puntaje >= c.umbralA) { return "A" }
    if (puntaje >= c.umbralB) { return "B" }
    return "C"
}

function FormatearTiempo(segundos) {
    segundos = Math.floor(segundos)
    var h = Math.floor(segundos / 3600)
    var m = Math.floor((segundos % 3600) / 60)
    var s = segundos % 60

    return [h, m, s].map(function (n) { return (n < 10 ? "0" : "") + n }).join(":")
}

function ReproducirSonido(ruta) {
    var sonido = new Audio(ruta)
    sonido.play().catch(function (error) {
        console.log("No se pudo reproducir " + ruta, error)
    })
}

function PintarRango(elemento, rango) {
    elemento.textContent = rango
    elemento.style.color = RANGOS[rango].color
    elemento.style.textShadow = "0 0 20px " + RANGOS[rango].color

    // Reinicia la animacion "pop"
    elemento.classList.remove("rango-pop")
    void elemento.offsetWidth
    elemento.classList.add("rango-pop")
}

function BajarVolumenSuave(audio, volumenObjetivo) {
    var intervalo = setInterval(function () {
        if (audio.volume > volumenObjetivo + 0.03) {
            audio.volume = audio.volume - 0.03
        } else {
            audio.volume = volumenObjetivo
            clearInterval(intervalo)
        }
    }, 60)
}

function MostrarPuntuacionFinal(contenedor) {

    EstadisticasJuego.terminado = true
    var cfg = PUNTUACION_CONFIG

    var tablero = contenedor || document.getElementById("Startlvl3").parentElement
    var derrotas = EstadisticasJuego.derrotas
    var puntajeFinal = CalcularPuntajeFinal()
    var rangoFinal = RangoParaPuntaje(puntajeFinal, derrotas)

    var musica = document.getElementById("Musica_Final")
    if (musica) { BajarVolumenSuave(musica, cfg.volumenMusicaEnResultados) }

    var panel = document.createElement("div")
    panel.id = "PantallaPuntuacion"
    panel.innerHTML =
        '<h2 class="puntuacion-titulo">RESULTADOS</h2>' +
        '<div class="puntuacion-cuerpo">' +
            '<div class="puntuacion-rango-caja">' +
                '<div class="puntuacion-rango" id="PuntuacionRango">C</div>' +
                '<div class="puntuacion-mensaje" id="PuntuacionMensaje">&nbsp;</div>' +
            '</div>' +
            '<div class="puntuacion-datos">' +
                '<p>Puntaje: <span id="PuntuacionNumero">0</span></p>' +
                '<p>Veces perdidas: <span>' + derrotas + '</span></p>' +
                '<p>Tiempo jugado: <span>' + FormatearTiempo(EstadisticasJuego.segundosJugados) + '</span></p>' +
            '</div>' +
        '</div>' +
        '<button class="Boton" id="BotonVolverPuntuacion" style="display:none;">VOLVER AL INICIO</button>'

    tablero.appendChild(panel)
    void panel.offsetWidth
    panel.classList.add("visible")

    var elRango = document.getElementById("PuntuacionRango")
    var elMensaje = document.getElementById("PuntuacionMensaje")
    var elNumero = document.getElementById("PuntuacionNumero")
    var boton = document.getElementById("BotonVolverPuntuacion")

    PintarRango(elRango, "C")

    var sonidoConteo = new Audio(cfg.sonidoConteo)
    sonidoConteo.loop = true

    var rangoActual = "C"
    var duracion = Math.min(4500, Math.max(2000, puntajeFinal * 2.2))
    var inicio = null

    function paso(marca) {
        if (inicio === null) { inicio = marca }

        var t = Math.min((marca - inicio) / duracion, 1)
        var valor = Math.round(puntajeFinal * (1 - Math.pow(1 - t, 2)))
        elNumero.textContent = valor

        if (valor >= puntajeFinal) {
            sonidoConteo.pause()
            sonidoConteo.currentTime = 0
        }

        var rango = RangoParaPuntaje(valor, derrotas)
        if (rango !== rangoActual) {
            rangoActual = rango
            PintarRango(elRango, rango)
            ReproducirSonido(cfg.sonidosCambio[rango])
        }

        if (t < 1) {
            requestAnimationFrame(paso)
        } else {
            terminarConteo()
        }
    }

    function terminarConteo() {
        sonidoConteo.pause()
        sonidoConteo.currentTime = 0

        setTimeout(function () {
            ReproducirSonido(cfg.sonidosRango[rangoFinal])
            elMensaje.textContent = RANGOS[rangoFinal].mensaje
            elMensaje.style.color = RANGOS[rangoFinal].color

            setTimeout(function () {
                boton.style.display = "block"
            }, 800)
        }, 1000)
    }

    boton.addEventListener("click", function () {
        VolverInicio()
    })

    setTimeout(function () {
        if (puntajeFinal > 0) {
            sonidoConteo.play().catch(function (error) {
                console.log("No se pudo reproducir " + cfg.sonidoConteo, error)
            })
            requestAnimationFrame(paso)
        } else {
            terminarConteo()
        }
    }, 1200)
}