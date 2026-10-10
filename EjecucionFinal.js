TiempoFinal = 45 //VARIABLE DE INICIO TIEMPO
PuntajeFinal = 0 //VARIABLE DE INICIO PUNTOS
NivelFinalGanado = false

function JUEGOFinal() {

    function EfectoDañoAgujero(){
        var hitOriginal = document.getElementById("Hit_sound")
        var hitClon = hitOriginal.cloneNode(true)
        hitClon.volume = hitOriginal.volume
        hitClon.play()

        document.getElementById("AgujeroNegro").classList.add("dañado")
        setTimeout(function(){
            document.getElementById("AgujeroNegro").classList.remove("dañado")
        }, 150)
    }
    function Tiempo_DisminurFinal() {
        TiempoFinal--;
        document.getElementById("Tiempolvl3").innerHTML = TiempoFinal

        if (TiempoFinal == 0) {
            TiempoFinal = 45
            PuntajeFinal = 0
            document.getElementById("Puntajelvl3").innerHTML = PuntajeFinal + " / 20"
            document.getElementById("Perdiste_sound").play()
            alert("Lo lamento, el agujero negro te alcanzó. Inténtalo de nuevo")
        }
    }

    Restar_TiempoFinal = setInterval(Tiempo_DisminurFinal, 1000)

    document.getElementById("MeteoritoFinal").addEventListener('mouseover', Aumentar_PuntosFinal)
    document.getElementById("Meteorito2Final").addEventListener('mouseover', Aumentar_PuntosFinal)
    document.getElementById("Meteorito3Final").addEventListener('mouseover', Aumentar_PuntosFinal)
    document.getElementById("Meteorito4Final").addEventListener('mouseover', Aumentar_PuntosFinal)

    PuedeSumarF1 = true
    PuedeSumarF2 = true
    PuedeSumarF3 = true
    PuedeSumarF4 = true

    function Aumentar_PuntosFinal(evento) {
        if (evento.target.id == "MeteoritoFinal" && PuedeSumarF1 == false) { return }
        if (evento.target.id == "Meteorito2Final" && PuedeSumarF2 == false) { return }
        if (evento.target.id == "Meteorito3Final" && PuedeSumarF3 == false) { return }
        if (evento.target.id == "Meteorito4Final" && PuedeSumarF4 == false) { return }

        if (evento.target.id == "MeteoritoFinal") { PuedeSumarF1 = false; ExplulsarFinal1() }
        if (evento.target.id == "Meteorito2Final") { PuedeSumarF2 = false; ExplulsarFinal2() }
        if (evento.target.id == "Meteorito3Final") { PuedeSumarF3 = false; ExplulsarFinal3() }
        if (evento.target.id == "Meteorito4Final") { PuedeSumarF4 = false; ExplulsarFinal4() }

        PuntajeFinal++;
        document.getElementById("Puntajelvl3").innerHTML = PuntajeFinal + " / 20"

        if (PuntajeFinal == 20) {

            PuntajeFinal = 0
            TiempoFinal = 45
            NivelFinalGanado = true
            EstadisticasJuego.terminado = true

            document.getElementById("Musica_FinalBoss").pause()
            document.getElementById("Triunfo").play()

            clearInterval(Intervalo_DirF1)
            clearInterval(Intervalo_DirF2)
            clearInterval(Intervalo_DirF3)
            clearInterval(Intervalo_DirF4)
            clearInterval(Restar_TiempoFinal)

            document.getElementById("MeteoritoFinal").style.left = "-70%"
            document.getElementById("MeteoritoFinal").style.transition = "0s"
            document.getElementById("Meteorito2Final").style.left = "-70%"
            document.getElementById("Meteorito2Final").style.transition = "0s"
            document.getElementById("Meteorito3Final").style.left = "-70%"
            document.getElementById("Meteorito3Final").style.transition = "0s"
            document.getElementById("Meteorito4Final").style.left = "-70%"
            document.getElementById("Meteorito4Final").style.transition = "0s"

            document.getElementById("AgujeroNegro").classList.remove("visible")

            setTimeout(function () {
                document.getElementById("Pantalla_Ovnislvl3").classList.remove("naves-malvadas")
                document.getElementById("Pantalla_Nodrizalvl3").classList.remove("naves-malvadas")
                document.getElementById("Pantalla_Ovnis2lvl3").classList.remove("naves-malvadas")

                document.getElementById("Pantalla_Ovnislvl3").style.transition = "0s"
                document.getElementById("Pantalla_Ovnislvl3").style.left = "-100%"
                document.getElementById("Pantalla_Nodrizalvl3").style.transition = "0s"
                document.getElementById("Pantalla_Nodrizalvl3").style.left = "-100%"
                document.getElementById("Pantalla_Ovnis2lvl3").style.transition = "0s"
                document.getElementById("Pantalla_Ovnis2lvl3").style.left = "-100%"

                document.getElementById("Pantalla_Ovnislvl3").classList.remove("naves-desvanecidas")
                document.getElementById("Pantalla_Nodrizalvl3").classList.remove("naves-desvanecidas")
                document.getElementById("Pantalla_Ovnis2lvl3").classList.remove("naves-desvanecidas")

                void document.getElementById("Pantalla_Ovnislvl3").offsetWidth

                document.getElementById("Pantalla_Ovnislvl3").style.transition = "6s"
                document.getElementById("Pantalla_Ovnislvl3").style.left = "7%"
                document.getElementById("Pantalla_Nodrizalvl3").style.transition = "5s"
                document.getElementById("Pantalla_Nodrizalvl3").style.left = "10%"
                document.getElementById("Pantalla_Ovnis2lvl3").style.transition = "6s"
                document.getElementById("Pantalla_Ovnis2lvl3").style.left = "7%"

                document.getElementById("Musica_Final").play()

                setTimeout(function () {
                    IniciarCreditos()
                }, 7000)

            }, 3000)
        }
    }

    function Meteorito_DireccionF1() {
        DistanciaF1 = 80
        AlturaF1 = Math.round(Math.random() * 450)
        document.getElementById("MeteoritoFinal").style.transition = "3.0s"
        document.getElementById("MeteoritoFinal").style.left = DistanciaF1 + "%"
        document.getElementById("MeteoritoFinal").style.top = AlturaF1 + "px"
        PuedeSumarF1 = true
    }
    setTimeout(Meteorito_DireccionF1, 2000)
    Intervalo_DirF1 = setInterval(Meteorito_DireccionF1, 3200) // antes 2900

    function Meteorito_DireccionF2() {
        DistanciaF2 = 80
        AlturaF2 = Math.round(Math.random() * 450)
        document.getElementById("Meteorito2Final").style.transition = "2.3s" // antes 1.9s
        document.getElementById("Meteorito2Final").style.left = DistanciaF2 + "%"
        document.getElementById("Meteorito2Final").style.top = AlturaF2 + "px"
        PuedeSumarF2 = true
    }
    setTimeout(Meteorito_DireccionF2, 2300)
    Intervalo_DirF2 = setInterval(Meteorito_DireccionF2, 2600) // antes 2300

    function Meteorito_DireccionF3() {
        DistanciaF3 = 80
        AlturaF3 = Math.round(Math.random() * 450)
        document.getElementById("Meteorito3Final").style.transition = "1.6s" // antes 1.3s
        document.getElementById("Meteorito3Final").style.left = DistanciaF3 + "%"
        document.getElementById("Meteorito3Final").style.top = AlturaF3 + "px"
        PuedeSumarF3 = true
    }
    setTimeout(Meteorito_DireccionF3, 2600)
    Intervalo_DirF3 = setInterval(Meteorito_DireccionF3, 2200) // antes 1900

    function Meteorito_DireccionF4() {
        DistanciaF4 = 80
        AlturaF4 = Math.round(Math.random() * 450)
        document.getElementById("Meteorito4Final").style.transition = "1.2s" // antes 0.9s
        document.getElementById("Meteorito4Final").style.left = DistanciaF4 + "%"
        document.getElementById("Meteorito4Final").style.top = AlturaF4 + "px"
        PuedeSumarF4 = true
    }
    setTimeout(Meteorito_DireccionF4, 2900)
    Intervalo_DirF4 = setInterval(Meteorito_DireccionF4, 1800) // antes 1500

    function ExplulsarFinal1() {
        document.getElementById("Puntos_sound").play()
        EfectoDañoAgujero()
        DistanciaF1 = "-500"
        AlturaF1 = Math.round(Math.random() * 450)
        document.getElementById("MeteoritoFinal").style.transition = "1.2s"
        document.getElementById("MeteoritoFinal").style.left = DistanciaF1 + "px"
        document.getElementById("MeteoritoFinal").style.top = AlturaF1 + "px"
    }

    function ExplulsarFinal2() {
        document.getElementById("Punto2").play()
        EfectoDañoAgujero()
        DistanciaF2 = "-500"
        AlturaF2 = Math.round(Math.random() * 450)
        document.getElementById("Meteorito2Final").style.transition = "1.2s"
        document.getElementById("Meteorito2Final").style.left = DistanciaF2 + "px"
        document.getElementById("Meteorito2Final").style.top = AlturaF2 + "px"
    }

    function ExplulsarFinal3() {
        document.getElementById("Punto3").play()
        EfectoDañoAgujero()
        DistanciaF3 = "-500"
        AlturaF3 = Math.round(Math.random() * 450)
        document.getElementById("Meteorito3Final").style.transition = "1.2s"
        document.getElementById("Meteorito3Final").style.left = DistanciaF3 + "px"
        document.getElementById("Meteorito3Final").style.top = AlturaF3 + "px"
    }

    function ExplulsarFinal4() {
        document.getElementById("Punto4").play()
        EfectoDañoAgujero()
        DistanciaF4 = "-500"
        AlturaF4 = Math.round(Math.random() * 450)
        document.getElementById("Meteorito4Final").style.transition = "1.2s"
        document.getElementById("Meteorito4Final").style.left = DistanciaF4 + "px"
        document.getElementById("Meteorito4Final").style.top = AlturaF4 + "px"
    }

    function perdisteFinal() {
        if (document.getElementById("MeteoritoFinal").offsetLeft > 630 ||
            document.getElementById("Meteorito2Final").offsetLeft > 630 ||
            document.getElementById("Meteorito3Final").offsetLeft > 630 ||
            document.getElementById("Meteorito4Final").offsetLeft > 630) {

            document.getElementById("MeteoritoFinal").style.left = "-70%"
            document.getElementById("MeteoritoFinal").style.transition = "0s"

            document.getElementById("Meteorito2Final").style.left = "-70%"
            document.getElementById("Meteorito2Final").style.transition = "0s"

            document.getElementById("Meteorito3Final").style.left = "-70%"
            document.getElementById("Meteorito3Final").style.transition = "0s"

            document.getElementById("Meteorito4Final").style.left = "-70%"
            document.getElementById("Meteorito4Final").style.transition = "0s"

            TiempoFinal = 45
            PuntajeFinal = 0
            document.getElementById("Puntajelvl3").innerHTML = PuntajeFinal + " / 20"

            document.getElementById("Perdiste_sound").play()
            alert("EL AGUJERO NEGRO ABSORBIÓ TUS DEFENSAS. ¡INTÉNTALO DE NUEVO!")
        }
    }

    setInterval(perdisteFinal, 100)
}

document.getElementById("PlayFinal").addEventListener('click', PLAYFinal)

ConteoFinal = 4

function PLAYFinal() {
    document.getElementById("Musica_FinalBoss").play()
    document.getElementById("TextoFinal").style.left = "-900px"
    document.getElementById("PlayFinal").style.left = "-900px"
    document.getElementById("DificultadFinal").style.left = "-900px"

    document.getElementById("Tiempolvl3").innerHTML = 45
    document.getElementById("Puntajelvl3").innerHTML = "0 / 20"

    function ARRACARFinal() {
        JUEGOFinal()
    }

    tiempo_de_arranqueFinal = setTimeout(ARRACARFinal, 4100)

    function ESPERARFinal() {
        function Cuenta_rgFinal() {
            ConteoFinal--;
            document.getElementById("RGBFinal").innerHTML = ConteoFinal
            if (ConteoFinal == -1) {
                document.getElementById("Contenedor_contadorFinal").style.display = "none"

                function BorrarFinal() {
                    document.getElementById("StartNivelFinal").style.display = "none"
                    DETENER_JUEGOFinal()
                }
                setTimeout(BorrarFinal, 500)
            }
        }
        setInterval(Cuenta_rgFinal, 1000)
    }

    setTimeout(ESPERARFinal, 350)
}

function DETENER_JUEGOFinal() {

    document.getElementById("Pauselvl3").addEventListener('click', PAUSEFinal)

    ActivoFinal = 1

    function PAUSEFinal() {
        if (NivelFinalGanado) { return }

        if (ActivoFinal == 1) {

            document.getElementById("Pausa_PantallaFinal").style.display = "table"
            clearInterval(Restar_TiempoFinal)
            document.getElementById("Tiempolvl3").innerHTML = TiempoFinal
            document.getElementById("Musica_FinalBoss").pause()

            function Meteorito_detenerFinal() {
                clearInterval(Intervalo_DirF1)
                clearInterval(Intervalo_DirF2)
                clearInterval(Intervalo_DirF3)
                clearInterval(Intervalo_DirF4)

                document.getElementById("MeteoritoFinal").style.transition = "0s"
                document.getElementById("Meteorito2Final").style.transition = "0s"
                document.getElementById("Meteorito3Final").style.transition = "0s"
                document.getElementById("Meteorito4Final").style.transition = "0s"

                document.getElementById("MeteoritoFinal").style.left = document.getElementById("MeteoritoFinal").offsetLeft + "px"
                document.getElementById("Meteorito2Final").style.left = document.getElementById("Meteorito2Final").offsetLeft + "px"
                document.getElementById("Meteorito3Final").style.left = document.getElementById("Meteorito3Final").offsetLeft + "px"
                document.getElementById("Meteorito4Final").style.left = document.getElementById("Meteorito4Final").offsetLeft + "px"

                document.getElementById("MeteoritoFinal").style.top = document.getElementById("MeteoritoFinal").offsetTop + "px"
                document.getElementById("Meteorito2Final").style.top = document.getElementById("Meteorito2Final").offsetTop + "px"
                document.getElementById("Meteorito3Final").style.top = document.getElementById("Meteorito3Final").offsetTop + "px"
                document.getElementById("Meteorito4Final").style.top = document.getElementById("Meteorito4Final").offsetTop + "px"
            }

            Meteorito_detenerFinal()
            Pause_offFinal = setInterval(Meteorito_detenerFinal, 100)

            ActivoFinal = 2

        } else {

            document.getElementById("Pausa_PantallaFinal").style.display = "none"
            document.getElementById("Musica_FinalBoss").play()
            clearInterval(Pause_offFinal)

            function Tiempo_DisminurFinal() {
                TiempoFinal--;
                document.getElementById("Tiempolvl3").innerHTML = TiempoFinal
                if (TiempoFinal == 0) {
                    TiempoFinal = 45
                    PuntajeFinal = 0
                    document.getElementById("Puntajelvl3").innerHTML = PuntajeFinal + " / 20"
                    document.getElementById("Perdiste_sound").play()
                    alert("Lo lamento, el agujero negro te alcanzó. Inténtalo de nuevo")
                }
            }

            Restar_TiempoFinal = setInterval(Tiempo_DisminurFinal, 1000)

            var Ancho_Juego = 900
            var Distancia_Total = Ancho_Juego * 0.9

            function duracionRestanteFinal(elementoId, distanciaDestino, duracionBase) {
                var actual = document.getElementById(elementoId).offsetLeft
                var meta = Ancho_Juego * (distanciaDestino / 100)
                var restante = Math.max(meta - actual, 0)
                return Math.max((restante / Distancia_Total) * duracionBase, 0.1)
            }

            var duracionF1 = duracionRestanteFinal("MeteoritoFinal", DistanciaF1, 3.0) // antes 2.6
            document.getElementById("MeteoritoFinal").style.transition = duracionF1 + "s"
            document.getElementById("MeteoritoFinal").style.left = DistanciaF1 + "%"

            var duracionF2 = duracionRestanteFinal("Meteorito2Final", DistanciaF2, 2.3) // antes 1.9
            document.getElementById("Meteorito2Final").style.transition = duracionF2 + "s"
            document.getElementById("Meteorito2Final").style.left = DistanciaF2 + "%"

            var duracionF3 = duracionRestanteFinal("Meteorito3Final", DistanciaF3, 1.6) // antes 1.3
            document.getElementById("Meteorito3Final").style.transition = duracionF3 + "s"
            document.getElementById("Meteorito3Final").style.left = DistanciaF3 + "%"

            var duracionF4 = duracionRestanteFinal("Meteorito4Final", DistanciaF4, 1.2) // antes 0.9
            document.getElementById("Meteorito4Final").style.transition = duracionF4 + "s"
            document.getElementById("Meteorito4Final").style.left = DistanciaF4 + "%"

            function Meteorito_DireccionF1() {
                DistanciaF1 = 80
                AlturaF1 = Math.round(Math.random() * 450)
                document.getElementById("MeteoritoFinal").style.transition = "3.0s" // antes 2.6s
                document.getElementById("MeteoritoFinal").style.left = DistanciaF1 + "%"
                document.getElementById("MeteoritoFinal").style.top = AlturaF1 + "px"
                PuedeSumarF1 = true
            }
            setTimeout(Meteorito_DireccionF1, 2000)
            Intervalo_DirF1 = setInterval(Meteorito_DireccionF1, 3200) // antes 2900

            function Meteorito_DireccionF2() {
                DistanciaF2 = 80
                AlturaF2 = Math.round(Math.random() * 450)
                document.getElementById("Meteorito2Final").style.transition = "2.3s" // antes 1.9s
                document.getElementById("Meteorito2Final").style.left = DistanciaF2 + "%"
                document.getElementById("Meteorito2Final").style.top = AlturaF2 + "px"
                PuedeSumarF2 = true
            }
            setTimeout(Meteorito_DireccionF2, 2000)
            Intervalo_DirF2 = setInterval(Meteorito_DireccionF2, 2600) // antes 2300

            function Meteorito_DireccionF3() {
                DistanciaF3 = 80
                AlturaF3 = Math.round(Math.random() * 450)
                document.getElementById("Meteorito3Final").style.transition = "1.6s" // antes 1.3s
                document.getElementById("Meteorito3Final").style.left = DistanciaF3 + "%"
                document.getElementById("Meteorito3Final").style.top = AlturaF3 + "px"
                PuedeSumarF3 = true
            }
            setTimeout(Meteorito_DireccionF3, 2000)
            Intervalo_DirF3 = setInterval(Meteorito_DireccionF3, 2200) // antes 1900

            function Meteorito_DireccionF4() {
                DistanciaF4 = 80
                AlturaF4 = Math.round(Math.random() * 450)
                document.getElementById("Meteorito4Final").style.transition = "1.2s" // antes 0.9s
                document.getElementById("Meteorito4Final").style.left = DistanciaF4 + "%"
                document.getElementById("Meteorito4Final").style.top = AlturaF4 + "px"
                PuedeSumarF4 = true
            }
            setTimeout(Meteorito_DireccionF4, 2000)
            Intervalo_DirF4 = setInterval(Meteorito_DireccionF4, 1800) // antes 1500

            ActivoFinal = 1
        }
    }
}