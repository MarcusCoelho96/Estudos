function calcular(event){
    event.preventDefault();

    let alcoolInput = document.getElementById("alcool").value;
    let gasolinaInput = document.getElementById("gasolina").value;
    let calculo = (alcoolInput / gasolinaInput);
    let contentResult = document.getElementById("content-result");
    let textResult = document.getElementById("text-result");
    let precoAlcool = document.getElementById("preco-alcool");
    let precoGasolina = document.getElementById("preco-gasolina");


    if(calculo < 0.7){
        textResult.innerHTML = "Compensa usar Alcool";
    }else{
        textResult.innerHTML = "Compensa usar Gasolina";
    }

    contentResult.classList.remove("hide");

    precoAlcool.innerHTML = "Alcool" + " R$" + alcoolInput;
    precoGasolina.innerHTML = "Gasolina" + " R$" + gasolinaInput;

}