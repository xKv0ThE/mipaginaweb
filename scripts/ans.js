function ans(){

    if (resultado==undefined){}
    
    else
    {
        if (typeof operación !== 'string') {
            numf = resultado;
            document.getElementById("output").innerHTML = numf;
            usadoans1=true;
        }
        else {
            numf2 = resultado;
            document.getElementById("output").innerHTML = numf + operación + numf2;
            usadoans2 = true
        }
    }
}