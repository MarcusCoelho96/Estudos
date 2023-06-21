/* alt - shift - a, para comentar o código.
window.alert('Minha primeira mensagem!');
window.confirm('Está gostando de JS?'); 
*/
alert("teste");

var nome = String(window.prompt("Digite o nome do aluno: "));

var idade = Number.parseInt(window.prompt("Digite a idade do aluno"));
var nota = Number.parseFloat(window.prompt("Digite a nota do aluno"));
window.alert(`O aluno ${nome} com ${idade} anos tirou a nota ${nota}`); /* Usar `crase` */