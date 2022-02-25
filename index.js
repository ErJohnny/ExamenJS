function _id(ident){
    return document.getElementById(ident);
}

function factorial(){
    var numero = _id("entradaFactorial").value;
    var resultado = 1;
    var operacion = "";
    parseInt(numero)
    for(var i = 1; i <= numero; i++){
        resultado = resultado * i;
        operacion += i + "*"
    }
    _id("resultatFactorial").innerHTML = resultado;
    _id("operacionsFactorial").innerHTML = operacion;

}

function calculaIVA(){
    var preuAmbIVA = _id("preuAmbIVA").value;
    var preuSenseIVA;
    var IVA;
        if (tipusIVA == 21) {
                preuSenseIVA = preuAmbIVA / 1.21;
            }else if (tipusIVA == 10){ 
                preuSenseIVA = preuAmbIVA / 1.10;
            }else if (tipusIVA == 4) {
                preuSenseIVA = preuAmbIVA / 1.04;
                }
            preuSenseIVA = resultado.toPrecision(2);
            IVA = preuAmbIVA - preuSenseIVA
    
        _id("IVA").innerHTML = IVA
    _id("preuSenseIVA").innerHTML = preuSenseIVA
}

function canviaFons(tipus){
    var colorFondo;
    var colorTexto;
    if(tipus == "clear"){
        colorFondo = "white";
        colorTexto = "black";
    } else if (tipus == "random"){
        var gris = Math.floor(Math.random() * 255);
        colorFondo = "rgb(" + gris + "," + gris + "," + gris + ")";
    }

    _id("cos").style.backgroundColor = colorFondo;
    _id("cos").style.color = colorTexto;
}
