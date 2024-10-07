function isNumberKey(evt) {
    const charCode = evt.which ? evt.which : evt.keyCode;
    
    
    if (charCode != 44 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}


document.getElementById('calcular').addEventListener('click', function() {
    
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    
    num1 = num1.replace(',', '.');
    num2 = num2.replace(',', '.');

    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    const soma = numero1 + numero2;

   
    alert("A soma é: " + soma.toString().replace('.', ','));
});
