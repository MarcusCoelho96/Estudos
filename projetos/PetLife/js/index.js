 
/* var elementosDuvida = document.querySelectorAll('.duvida');

 elementosDuvida.forEach(function (duvida){
    duvida.addEventListener('click', function (){
        duvida.classList.toggle('ativa');
    })
}) */
const elementosDuvida = document.querySelectorAll('.duvida');

function toggleAtiva() {
    this.classList.toggle('ativa');
}

elementosDuvida.forEach(function(duvida) {
    duvida.addEventListener('click', toggleAtiva);
});