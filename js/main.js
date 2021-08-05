var valorX = '0';
var icone = ''; 
var valorY = '0';
var decimal = false;
var casa ='';
var ponto = '';
var output = document.querySelector('#output');

function numero(valor){
    if(valorX.length < 15 && icone == '') {
        if (valorX == 0) {
            valorX = valor;
        } else {
            valorX = valorX + valor;
        }
        output.innerHTML = valorX;
    }

    if(valorY.length < 15 && icone !== '') {
        if (valorY == 0) {
            valorY = valor;
        } else {
            valorY = valorY + valor;
        }
        output.innerHTML = valorY;
    }
}

function apagar(){
    valorX = '0';
    valorY = '0';
    icone = '';
    ponto = '';
    output.innerHTML = 0;

}

function simbolo(sinal){
    icone = sinal;
}

function virgula(sinal){
    if (valorX.length > 0 && ponto == ''){
    	ponto = sinal;
        valorX = valorX + sinal
        output.innerHTML = valorX;
    }
    if (valorY.length > 0 && icone !== ''){
    	ponto = sinal;
        valorY = valorY + sinal
        output.innerHTML = valorY;
    }
}

function resultado(){
    var resultado= '';
    valorX = parseFloat(valorX);
    valorY = parseFloat(valorY);

    switch(icone){ 
        case '+': 
            resultado = valorX + valorY;
            break; 
        case '-':
            resultado = valorX - valorY;
            break;
        case '*':
            resultado = valorX * valorY;
            break;
        case '/':
            resultado = valorX / valorY;
            break;
        case '%':
            resultado = valorX/100;
        }
    valorX = resultado;
    valorY = '0';
    output.innerHTML = resultado.toString().slice(0, 15);
}