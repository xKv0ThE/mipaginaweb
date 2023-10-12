let num, n = 1, numf = 0, a, x = "", operación, numf2 = 0, vacio = "vacio", resultado, usadoans1 = false, usadoans2 = false;

function leer(num) {
    x=this.innerHTML;      //asigno la variable x al contenido del botón.
    num=parseFloat(x);      //tranformo x en un número. si x no era un número me devolverá NaN.

    if (!isNaN(num))        //si num es un número leerá el código para leer los números a operar. si num no es un número tomará la operación a realizar.
    {   if (typeof operación !== 'string')  //si aún no ha leido la operación (operación no será un string) los números pulsados serán el primer número a operar.
        {
            if (numf<10e14){
                if (usadoans1 == true){}    //para que al usar un número después de ans no escriba "ans19482384" por ejemplo
                else {
                    numf = (numf*10)+num;                               //mientras pulsemos números se ejecutará esta fórmula y escribirá el resultante. Si pulsamos una operación o llegamos al límite para.
                    document.getElementById("output").innerHTML = numf;
                    n=n*10;
                    }
                }
                else {} //si numf es mayor que 10e14 no hará nada porque es el valor máximo que hemos dado
        }
        else {              //si la operación ya ha sido leida (operación == 'string') ahora tomará el segundo número a operar, con la misma fórmula que el primero.
            if (numf2<10e14){
                if (usadoans2 == true){}
                else{
                numf2 = (numf2*10)+num;
                document.getElementById("output").innerHTML = numf + operación + numf2;
                n=n*10;
                vacio = numf2;} //usamos la variable vacio para que (typeof vacio === "number"). Si esto es true al pulsar una operación después de haber escrito el segundo número no pasará nada.
                }
                else {}
            }
    }
    
    
    
    else 
    {
        if(typeof vacio === "string"){
            if (usadoans2==true){}
            else{
            document.getElementById("output").innerHTML = numf + x;
            operación=x;}
        
    }
        else{}
        
    };
}

