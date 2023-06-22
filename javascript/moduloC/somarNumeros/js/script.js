function somar(){

var tn1 = window.document.getElementById('txtn1');
var tn2 = window.document.getElementById('txtn2');
var res = window.document.getElementById('res');
var n1 = Number(tn1.value);
var n2 = Number(tn2.value);
var soma = n1 + n2;
res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${soma}</strong>`;
}

function enviar(){
    var vNome = document.getElementById('nome').value;
    var vTelefone = document.getElementById('telefone').value;
    var vEmail = document.getElementById('email').value;
    var vAno = document.getElementById('ano').value;

                /*ano atual pelo sistema*/
    var idade = new Date().getFullYear() - Number(vAno);

    var valor1 = document.getElementById('valor1');
    var valor2 = document.getElementById('valor2');
    var valor3 = document.getElementById('valor3');
    var valor4 = document.getElementById('valor4');

    valor1.innerHTML = `<h1>${vNome}</h1>`;
    valor2.innerHTML = `<h1>${vTelefone}</h1>`;
    valor3.innerHTML = `<h1>${vEmail}</h1>`
    valor4.innerHTML = `<h1>você tem ${idade} anos de idade</h1>`;
}
