Tiempolvl3 = 60 //VARIBLE DE INICIO TIEMPO
Puntajelvl3 = 0 //VARIABLE DE INICIO PUNTOS
Nivel3Ganado = false

function JUEGOlvl3() {

    function Tiempo_Disminurlvl3() { 
        Tiempolvl3--;
        document.getElementById("Tiempolvl3").innerHTML = Tiempolvl3

        if (Tiempolvl3 == 0) {
            Tiempolvl3 = 60
            Puntajelvl3 = 0
            document.getElementById("Puntajelvl3").innerHTML = Puntajelvl3 + " / 30"
            alert("Lo lamento perdiste")
        }
    }

    Restar_Tiempolvl3 = setInterval(Tiempo_Disminurlvl3, 1000)

    document.getElementById("Meteoritolvl3").addEventListener('mouseover', Aumentar_Puntoslvl3)
    document.getElementById("Meteorito2lvl3").addEventListener('mouseover', Aumentar_Puntoslvl3)
    document.getElementById("Meteorito3lvl3").addEventListener('mouseover', Aumentar_Puntoslvl3)
    document.getElementById("Meteorito4lvl3").addEventListener('mouseover', Aumentar_Puntoslvl3)

    function Aumentar_Puntoslvl3() {

        Puntajelvl3++;
        document.getElementById("Puntajelvl3").innerHTML = Puntajelvl3 + " / 30"

        if (Puntajelvl3 == 30) {

            Puntajelvl3 = 0
            Tiempolvl3 = 60
            Nivel3Ganado = true

            document.getElementById("Musica_Nivel3").pause()
            document.getElementById("Triunfo").play()

            function Ganaste_Pantallalvl3(){
                document.getElementById("Meteoritolvl3").style.left = "-70%"
                document.getElementById("Meteoritolvl3").style.transition = "0s"

                document.getElementById("Meteorito2lvl3").style.left = "-70%"
                document.getElementById("Meteorito2lvl3").style.transition = "0s"

                document.getElementById("Meteorito3lvl3").style.left = "-70%"
                document.getElementById("Meteorito3lvl3").style.transition = "0s"

                document.getElementById("Meteorito4lvl3").style.left = "-70%"
                document.getElementById("Meteorito4lvl3").style.transition = "0s"
            }

            Ganaste_Pantallalvl3();

            Tiempolvl3 = 60
            Puntajelvl3 = 0

            clearInterval(Intervalo_Dirlvl3)
            clearInterval(Intervalo_Dir2lvl3)
            clearInterval(Intervalo_Dir3lvl3)
            clearInterval(Intervalo_Dir4lvl3)
            clearInterval(Restar_Tiempolvl3)
            clearInterval(Intervalo_Rastrolvl3)

            document.getElementById("Triunfo").pause()
            document.getElementById("Triunfo").currentTime = 0

            document.getElementById("Musica_FinalBoss").play()

            document.getElementById("Pantalla_Ovnislvl3").classList.add("naves-malvadas")
            document.getElementById("Pantalla_Nodrizalvl3").classList.add("naves-malvadas")
            document.getElementById("Pantalla_Ovnis2lvl3").classList.add("naves-malvadas")

            document.getElementById("Pantalla_Ovnislvl3").style.left = "7%"
            document.getElementById("Pantalla_Ovnislvl3").style.transition = "6s"
            document.getElementById("Pantalla_Nodrizalvl3").style.left = "10%"
            document.getElementById("Pantalla_Nodrizalvl3").style.transition = "5s"
            document.getElementById("Pantalla_Ovnis2lvl3").style.left = "7%"
            document.getElementById("Pantalla_Ovnis2lvl3").style.transition = "6s"

            setTimeout(function(){
                document.getElementById("Pantalla_Ovnislvl3").classList.add("naves-desvanecidas")
                document.getElementById("Pantalla_Nodrizalvl3").classList.add("naves-desvanecidas")
                document.getElementById("Pantalla_Ovnis2lvl3").classList.add("naves-desvanecidas")

                setTimeout(function(){
                    document.getElementById("AgujeroNegro").classList.add("visible")
                    document.getElementById("NIVEL3").classList.add("modo-final")

                    setTimeout(function(){
                        document.getElementById("StartNivelFinal").style.display = "flex"
                    }, 3000)
                }, 3000)
            }, 8500)
        }
    }

    function Meteorito_Direccionlvl3() {
        Distancia1lvl3 = 80
        Altura1lvl3 = Math.round(Math.random() * 450)
        document.getElementById("Meteoritolvl3").style.left = Distancia1lvl3 + "%"
        document.getElementById("Meteoritolvl3").style.top = Altura1lvl3 + "px"
        document.getElementById("Meteoritolvl3").style.transition = "1.9s"
    }

    setTimeout(Meteorito_Direccionlvl3, 2200)
    Intervalo_Dirlvl3 = setInterval(Meteorito_Direccionlvl3, 2950)

    function Meteorito_Direccion2lvl3() {
        Distancia2lvl3 = 80
        Altura2lvl3 = Math.round(Math.random() * 450)
        document.getElementById("Meteorito2lvl3").style.left = Distancia2lvl3 + "%"
        document.getElementById("Meteorito2lvl3").style.top = Altura2lvl3 + "px"
        document.getElementById("Meteorito2lvl3").style.transition = "1.9s"
    }

    setTimeout(Meteorito_Direccion2lvl3, 2660)
    Intervalo_Dir2lvl3 = setInterval(Meteorito_Direccion2lvl3, 2750)

    function Meteorito_Direccion3lvl3() {
        Distancia3lvl3 = 80
        Altura3lvl3 = Math.round(Math.random() * 450)
        document.getElementById("Meteorito3lvl3").style.left = Distancia3lvl3 + "%"
        document.getElementById("Meteorito3lvl3").style.top = Altura3lvl3 + "px"
        document.getElementById("Meteorito3lvl3").style.transition = "1.9s"
    }

    setTimeout(Meteorito_Direccion3lvl3, 2900)
    Intervalo_Dir3lvl3 = setInterval(Meteorito_Direccion3lvl3, 2550)

    function Meteorito_Direccion4lvl3() {
        Distancia4lvl3 = 80
        Altura4lvl3 = Math.round(Math.random() * 450)
        document.getElementById("Meteorito4lvl3").style.left = Distancia4lvl3 + "%"
        document.getElementById("Meteorito4lvl3").style.top = Altura4lvl3 + "px"
        document.getElementById("Meteorito4lvl3").style.transition = "1.9s"
    }

    setTimeout(Meteorito_Direccion4lvl3, 3100)
    Intervalo_Dir4lvl3 = setInterval(Meteorito_Direccion4lvl3, 2150)

    document.getElementById("Meteoritolvl3").addEventListener('mouseover', Explulsarlvl3)
    document.getElementById("Meteorito2lvl3").addEventListener('mouseover', Explulsar2lvl3)
    document.getElementById("Meteorito3lvl3").addEventListener('mouseover', Explulsar3lvl3)
    document.getElementById("Meteorito4lvl3").addEventListener('mouseover', Explulsar4lvl3)

    function Explulsarlvl3() {
        document.getElementById("Puntos_sound").play()
        Distancialvl3 = "-500"
        Alturalvl3 = Math.round(Math.random() * 600)
        document.getElementById("Meteoritolvl3").style.left = Distancialvl3 + "px"
        document.getElementById("Meteoritolvl3").style.top = Alturalvl3 + "px"
        document.getElementById("Meteoritolvl3").style.transition = "1.7s"
    }

    function Explulsar2lvl3() {
        document.getElementById("Punto2").play()
        Distancialvl3 = "-500"
        Alturalvl3 = Math.round(Math.random() * 500)
        document.getElementById("Meteorito2lvl3").style.left = Distancialvl3 + "px"
        document.getElementById("Meteorito2lvl3").style.top = Alturalvl3 + "px"
        document.getElementById("Meteorito2lvl3").style.transition = "1.7s"
    }

    function Explulsar3lvl3() {
        document.getElementById("Punto3").play()
        Distancialvl3 = "-500"
        Alturalvl3 = Math.round(Math.random() * 600)
        document.getElementById("Meteorito3lvl3").style.left = Distancialvl3 + "px"
        document.getElementById("Meteorito3lvl3").style.top = Alturalvl3 + "px"
        document.getElementById("Meteorito3lvl3").style.transition = "1.7s"
    }

    function Explulsar4lvl3() {
        document.getElementById("Punto4").play()
        Distancialvl3 = "-500"
        Alturalvl3 = Math.round(Math.random() * 600)
        document.getElementById("Meteorito4lvl3").style.left = Distancialvl3 + "px"
        document.getElementById("Meteorito4lvl3").style.top = Alturalvl3 + "px"
        document.getElementById("Meteorito4lvl3").style.transition = "1.7s"
    }

    function CrearRastroCometa(meteoroId){
        var meteoro = document.getElementById(meteoroId)
        var rastro = document.createElement("div")
        rastro.className = "rastro-cometa"
        rastro.style.left = meteoro.offsetLeft + "px"
        rastro.style.top = (meteoro.offsetTop + 20) + "px"
        meteoro.parentElement.appendChild(rastro)
        setTimeout(function(){ rastro.remove() }, 500)
    }

    Intervalo_Rastrolvl3 = setInterval(function(){
        CrearRastroCometa("Meteoritolvl3")
        CrearRastroCometa("Meteorito2lvl3")
        CrearRastroCometa("Meteorito3lvl3")
        CrearRastroCometa("Meteorito4lvl3")
    }, 70)

    function perdistelvl3() {

        if (document.getElementById("Meteoritolvl3").offsetLeft > 630 ||
            document.getElementById("Meteorito2lvl3").offsetLeft > 630 ||
            document.getElementById("Meteorito3lvl3").offsetLeft > 630 ||
            document.getElementById("Meteorito4lvl3").offsetLeft > 630) {

            document.getElementById("Meteoritolvl3").style.left = "-70%"
            document.getElementById("Meteoritolvl3").style.transition = "0s"
            setTimeout(Meteorito_Direccionlvl3, 2000)

            document.getElementById("Meteorito2lvl3").style.left = "-70%"
            document.getElementById("Meteorito2lvl3").style.transition = "0s"
            setTimeout(Meteorito_Direccion2lvl3, 2000)

            document.getElementById("Meteorito3lvl3").style.left = "-70%"
            document.getElementById("Meteorito3lvl3").style.transition = "0s"
            setTimeout(Meteorito_Direccion3lvl3, 2600)

            document.getElementById("Meteorito4lvl3").style.left = "-70%"
            document.getElementById("Meteorito4lvl3").style.transition = "0s"
            setTimeout(Meteorito_Direccion4lvl3, 2900)

            Tiempolvl3 = 60
            Puntajelvl3 = 0
            document.getElementById("Puntajelvl3").innerHTML = Puntajelvl3 + " / 30"

            document.getElementById("Perdiste_sound").play()
            alert("YA ES DEMASIADO TARDE LOS METEORITOS DESTRUYERON GRAN PARTE DEL CONTINENTE LO MEJOR ES ESPERAR LO PEOR")
        }
    }

    setInterval(perdistelvl3, 100)
}

document.getElementById("Playlvl3").addEventListener('click', PLAYlvl3)

Conteolvl3 = 4

function PLAYlvl3() {

    document.getElementById("Musica_Nivel3").play()
    document.getElementById("Textolvl3").style.left = "-900px"
    document.getElementById("Playlvl3").style.left = "-900px"
    document.getElementById("Dificultadlvl3").style.left = "-900px"

    function ARRACARlvl3(){    
        JUEGOlvl3()
    }

    tiempo_de_arranquelvl3 = setTimeout(ARRACARlvl3, 4100)

    function ESPERARlvl3() {

        function Cuenta_rglvl3() {

            Conteolvl3--;
            document.getElementById("RGBlvl3").innerHTML = Conteolvl3

            if (Conteolvl3 == -1) {

                document.getElementById("Contenedor_contadorlvl3").style.display = "none"

                function Borrarlvl3() {
                    document.getElementById("Startlvl3").style.display = "none"
                    DETENER_JUEGOlvl3()
                }

                setTimeout(Borrarlvl3, 500)
            }
        }

        IntervaloCuenta = setInterval(Cuenta_rglvl3, 1000)
    }

    setTimeout(ESPERARlvl3, 350)
}

function DETENER_JUEGOlvl3() {

    document.getElementById("Pauselvl3").addEventListener('click', PAUSElvl3)

    Activolvl3 = 1

    function PAUSElvl3() {

        if (Nivel3Ganado) { return }

        if (Activolvl3 == 1) {

            document.getElementById("Pausa_Pantallalvl3").style.display = "table"

            clearInterval(Restar_Tiempolvl3)

            document.getElementById("Tiempolvl3").innerHTML = Tiempolvl3

            document.getElementById("Musica_Nivel3").pause()

            function Meteorito_detenerlvl3() {

                clearInterval(Intervalo_Dirlvl3)
                clearInterval(Intervalo_Dir2lvl3)
                clearInterval(Intervalo_Dir3lvl3)
                clearInterval(Intervalo_Dir4lvl3)

                document.getElementById("Meteoritolvl3").style.transition = "0s"
                document.getElementById("Meteorito2lvl3").style.transition = "0s"
                document.getElementById("Meteorito3lvl3").style.transition = "0s"
                document.getElementById("Meteorito4lvl3").style.transition = "0s"

                document.getElementById("Meteoritolvl3").style.left = document.getElementById("Meteoritolvl3").offsetLeft + "px"
                document.getElementById("Meteorito2lvl3").style.left = document.getElementById("Meteorito2lvl3").offsetLeft + "px"
                document.getElementById("Meteorito3lvl3").style.left = document.getElementById("Meteorito3lvl3").offsetLeft + "px"
                document.getElementById("Meteorito4lvl3").style.left = document.getElementById("Meteorito4lvl3").offsetLeft + "px"

                document.getElementById("Meteoritolvl3").style.top = document.getElementById("Meteoritolvl3").offsetTop + "px"
                document.getElementById("Meteorito2lvl3").style.top = document.getElementById("Meteorito2lvl3").offsetTop + "px"
                document.getElementById("Meteorito3lvl3").style.top = document.getElementById("Meteorito3lvl3").offsetTop + "px"
                document.getElementById("Meteorito4lvl3").style.top = document.getElementById("Meteorito4lvl3").offsetTop + "px"
            }

            Meteorito_detenerlvl3()
            Pause_offlvl3 = setInterval(Meteorito_detenerlvl3, 100)

            Activolvl3 = 2

        } else {

            document.getElementById("Pausa_Pantallalvl3").style.display = "none"

            document.getElementById("Musica_Nivel3").play()

            clearInterval(Pause_offlvl3)

            function Tiempo_Disminurlvl3() {

                Tiempolvl3--;

                document.getElementById("Tiempolvl3").innerHTML = Tiempolvl3

                if (Tiempolvl3 == 0) {

                    Tiempolvl3 = 60
                    Puntajelvl3 = 0
                    document.getElementById("Puntajelvl3").innerHTML = Puntajelvl3 + " / 30"
                    alert("Lo lamento perdiste")
                }
            }

            Restar_Tiempolvl3 = setInterval(Tiempo_Disminurlvl3, 1000)

            var Ancho_Juego = 900
            var Distancia_Total = Ancho_Juego * 0.9
            var Duracion_Total = 1.9

            function duracionRestantelvl3(elementoId, distanciaDestino){
                var actual = document.getElementById(elementoId).offsetLeft
                var meta = Ancho_Juego * (distanciaDestino / 100)
                var restante = Math.max(meta - actual, 0)
                return Math.max((restante / Distancia_Total) * Duracion_Total, 0.1)
            }

            var duracion1 = duracionRestantelvl3("Meteoritolvl3", Distancia1lvl3)
            document.getElementById("Meteoritolvl3").style.transition = duracion1 + "s"
            document.getElementById("Meteoritolvl3").style.left = Distancia1lvl3 + "%"

            var duracion2 = duracionRestantelvl3("Meteorito2lvl3", Distancia2lvl3)
            document.getElementById("Meteorito2lvl3").style.transition = duracion2 + "s"
            document.getElementById("Meteorito2lvl3").style.left = Distancia2lvl3 + "%"

            var duracion3 = duracionRestantelvl3("Meteorito3lvl3", Distancia3lvl3)
            document.getElementById("Meteorito3lvl3").style.transition = duracion3 + "s"
            document.getElementById("Meteorito3lvl3").style.left = Distancia3lvl3 + "%"

            var duracion4 = duracionRestantelvl3("Meteorito4lvl3", Distancia4lvl3)
            document.getElementById("Meteorito4lvl3").style.transition = duracion4 + "s"
            document.getElementById("Meteorito4lvl3").style.left = Distancia4lvl3 + "%"

            function Meteorito_Direccionlvl3() {

                Distancia1lvl3 = 80
                Altura1lvl3 = Math.round(Math.random() * 450)

                document.getElementById("Meteoritolvl3").style.left = Distancia1lvl3 + "%"
                document.getElementById("Meteoritolvl3").style.top = Altura1lvl3 + "px"
                document.getElementById("Meteoritolvl3").style.transition = "1.9s"
            }

            setTimeout(Meteorito_Direccionlvl3, 2000)
            Intervalo_Dirlvl3 = setInterval(Meteorito_Direccionlvl3, 2430)

            function Meteorito_Direccion2lvl3() {

                Distancia2lvl3 = 80
                Altura2lvl3 = Math.round(Math.random() * 450)

                document.getElementById("Meteorito2lvl3").style.left = Distancia2lvl3 + "%"
                document.getElementById("Meteorito2lvl3").style.top = Altura2lvl3 + "px"
                document.getElementById("Meteorito2lvl3").style.transition = "1.9s"
            }

            setTimeout(Meteorito_Direccion2lvl3, 2000)
            Intervalo_Dir2lvl3 = setInterval(Meteorito_Direccion2lvl3, 2350)

            function Meteorito_Direccion3lvl3() {

                Distancia3lvl3 = 80
                Altura3lvl3 = Math.round(Math.random() * 450)

                document.getElementById("Meteorito3lvl3").style.left = Distancia3lvl3 + "%"
                document.getElementById("Meteorito3lvl3").style.top = Altura3lvl3 + "px"
                document.getElementById("Meteorito3lvl3").style.transition = "1.9s"
            }

            setTimeout(Meteorito_Direccion3lvl3, 2000)
            Intervalo_Dir3lvl3 = setInterval(Meteorito_Direccion3lvl3, 2250)

            function Meteorito_Direccion4lvl3() {

                Distancia4lvl3 = 80
                Altura4lvl3 = Math.round(Math.random() * 450)

                document.getElementById("Meteorito4lvl3").style.left = Distancia4lvl3 + "%"
                document.getElementById("Meteorito4lvl3").style.top = Altura4lvl3 + "px"
                document.getElementById("Meteorito4lvl3").style.transition = "1.9s"
            }

            setTimeout(Meteorito_Direccion4lvl3, 2000)
            Intervalo_Dir4lvl3 = setInterval(Meteorito_Direccion4lvl3, 2150)

            Activolvl3 = 1
        }
    }
}