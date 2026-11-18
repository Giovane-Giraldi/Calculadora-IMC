var inputPeso = document.getElementById('peso');
var inputAltura = document.getElementById('altura');
var resultado = document.getElementById('resultado');
const formulario = document.getElementById('form');


function calcularIMC() {
    
    var peso = parseFloat(inputPeso.value);
    if (isNaN(peso) || peso <= 0) {
        alert('Informe um peso válido, maior que zero.');
        return;
    }
    var alturaTexto = inputAltura.value.trim();
    var altura = parseFloat(alturaTexto.replace(',', '.'));
    
    // Verifica se é zero ou se não é um número válido
    if (isNaN(altura) || altura <= 0) {
        alert('Informe uma altura válida, maior que zero.');
        return;
        
    }

    if (!/^\d+[.,]\d+$/.test(alturaTexto)) {
        alert('Formato inválido. Ex.: 1,75');
        return;
    }


    var imc = peso / (altura * altura);
    console.log('IMC:', imc);
   resultado.textContent = 'Seu IMC é: ' + imc.toFixed(2);

}

        formulario.addEventListener('submit', function(event) {
            event.preventDefault()
            calcularIMC();
            
        });



