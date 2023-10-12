//las variables son numf, numf2 y operación
function operaciones ()
{
    switch(operación)
    {
        case " + ": resultado = numf + numf2; document.getElementById("output").innerHTML = resultado; break
        case " - ": resultado = numf - numf2; document.getElementById("output").innerHTML = resultado; break
        case " x ": resultado = numf * numf2; document.getElementById("output").innerHTML = resultado; break
        case " ÷ ": resultado = numf / numf2; document.getElementById("output").innerHTML = resultado; break
        
        

    }
    numf=0;
    n=1;
    numf2=0;
    x = 0;
    operación = x;
    vacio="vacio";
    usadoans1 = false;
    usadoans2 = false;
    
}