const imagenempate = document.createElement("img");


function cambio()
{
    
    document.getElementById("botonjugar").remove();
    const botonpiedra = document.createElement ("button");
    botonpiedra.id = "botonesJuego";
    botonpiedra.innerHTML = "PIEDRA";
    botonpiedra.onclick = () => juego(1);

    const botonpapel = document.createElement ("button");
    botonpapel.id = "botonesJuego";
    botonpapel.innerHTML = "PAPEL";
    botonpapel.onclick = () => juego(2);

    const botontijeras = document.createElement ("button");
    botontijeras.id = "botonesJuego";
    botontijeras.innerHTML = "TIJERAS";
    botontijeras.onclick = () => juego(3);
    
    
    
    const div = document.getElementById("div");
    div.appendChild(botonpiedra);
    div.appendChild(botonpapel);
    div.appendChild(botontijeras);

    const parraforesultado = document.createElement ("p");                         //cambios div resultado
    parraforesultado.id = "parraforesultado";
    parraforesultado.innerHTML = "¿QUÉ ELIGES?";
    const div2 = document.getElementById("div2");
    div2.appendChild(parraforesultado);
    div2.id = "div3";




    

}

function juego (respuesta) {

    
    
    switch (respuesta){
        case 1: console.log(parraforesultado.innerHTML="Has sacado piedra."); resultadojuego(1); break;
        case 2: console.log(parraforesultado.innerHTML="Has sacado papel."); resultadojuego (2); break;
        case 3: console.log(parraforesultado.innerHTML="Has sacado tijeras."); resultadojuego (3); break;
    }

};


function resultadojuego(resultadojugador)
{
    let resultado, numerorandom = Math.random();

    switch (true)
        {
            case (numerorandom < (1/3)): resultado = "piedra"; break;
            case ((1/3) < numerorandom && numerorandom < (2/3)): resultado = "papel"; break;
            case (numerorandom > (2/3)): resultado = "tijeras"; break; 
        }

    parraforesultado.innerHTML = parraforesultado.innerHTML + "<br>" + ` Yo he sacado ${resultado}.`;

    switch (resultadojugador)
        {
            case 1: if(resultado == "piedra"){empate()}
                    else if (resultado == "papel"){pierdes()}
                    else if (resultado == "tijeras"){ganas()};
                    break;
            case 2: if(resultado == "piedra"){ganas()}
                    else if (resultado == "papel"){empate()}
                    else if (resultado == "tijeras"){pierdes()};
                    break;
            case 3: if(resultado == "piedra"){pierdes()}
                    else if (resultado == "papel"){ganas()}
                    else if (resultado == "tijeras"){empate()};
                    break;
        }
}

function empate(){parraforesultado.innerHTML = parraforesultado.innerHTML + "<br>" + "Hemos empatado."
imagenempate.src="https://i.imgur.com/RcVb73E.png";
imagenempate.height="600";
const divimg = document.getElementById("divimg");
divimg.appendChild(imagenempate);
};

function pierdes(){parraforesultado.innerHTML = parraforesultado.innerHTML + "<br>" + "Has perdido."
imagenempate.src="https://i.imgur.com/7A06RH3.png";
const divimg = document.getElementById("divimg");
divimg.appendChild(imagenempate);
};

function ganas(){parraforesultado.innerHTML = parraforesultado.innerHTML + "<br>" + "Has ganado."
imagenempate.src="https://imgur.com/aTxx3pJ.png";
const divimg = document.getElementById("divimg");
divimg.appendChild(imagenempate);
};
    
