function FazerCalculo() {
    let valueF01 = document.getElementById("Faixa01").value;
    let valueF02 = document.getElementById("Faixa02").value
    let valueMulti = document.getElementById("Multi").value;
    let valueToler = document.getElementById("Toler").value;
    let operacao = parseFloat(valueF01+valueF02) * parseFloat(valueMulti);
    let TolerMax = operacao + (operacao*valueToler);
    let TolerMin = operacao - (operacao*valueToler);
    document.getElementById("final").value = operacao;
    document.getElementById("tolerancMax").value = TolerMax;
    document.getElementById("tolerancMin").value = TolerMin;
}