var nuemero1;
var numero2;
var cal;
function llamar(){

    var tablero = document.getElementById("tablero");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");    
    var divd = document.getElementById("divd");

    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var mult = document.getElementById("mult");

    var uno = document.getElementById('uno');
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var restar = document.getElementById("restar");
    
    
    var cero = document.getElementById("cero");    
    var borrador = document.getElementById("borrar");    
    var igual = document.getElementById("igual");
    var sumar = document.getElementById("sumar")    

    uno.onclick = function(){
        tablero.value = tablero.value + "1";
    }
    dos.onclick = function(){
        tablero.value = tablero.value + "2";
    }
    tres.onclick = function(){
        tablero.value = tablero.value + "3";
    }
    cuatro.onclick = function(){
        tablero.value = tablero.value + "4";
    }
    cinco.onclick = function(){
        tablero.value = tablero.value + "5";
    }
    seis.onclick = function(){
        tablero.value = tablero.value + "6";
    }
    siete.onclick = function(){
        tablero.value = tablero.value + "7";
    }
    ocho.onclick = function(){
        tablero.value = tablero.value + "8";
    }
    nueve.onclick = function(){
        tablero.value = tablero.value + "9";
    }
    cero.onclick = function(){
        tablero.value = tablero.value + "0";
    }

    sumar.onclick = function (){
        numero1 = tablero.value;
        cal = "+"
        limpiar();
    }
    restar.onclick = function (){
        numero1 = tablero.value;
        cal = "-"
        limpiar();
    }
    mult.onclick = function (){
        numero1 = tablero.value;
        cal = "*"
        limpiar();
    }
    divd.onclick = function (){
        numero1 = tablero.value;
        cal = "/"
        limpiar();
    }
    function limpiar(){
        tablero.value = "";
    }

    igual.onclick = function(){
            numero2 = tablero.value;
            calcular();  
    }
    borrador.onclick = function (){
        borrar();
    }
    function borrar(){
        tablero.value = "";
        numero1 = 0;
        numero2 = 0;
        cal = "";
    }
    function calcular (){
        result = 0;
        switch(cal){
            case "+":
             result = parseFloat(numero1) + parseFloat(numero2)
             break;
            
             case "-":
             result = parseFloat(numero1) - parseFloat(numero2)
             break;

             case "*":
             result = parseFloat(numero1) * parseFloat(numero2)
             break;

             case "/":
             if(numero2 != 0){
                result = parseFloat(numero1) / parseFloat(numero2)
                break;
             }
             else{
                 alert("No se puede dividir entre cero");
             }
        default: tablero.value;     
        } 
        borrar();
    tablero.value = result;    
    }
}
