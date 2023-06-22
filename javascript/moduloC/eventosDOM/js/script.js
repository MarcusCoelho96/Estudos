var area = window.document.getElementById('area');
area.addEventListener('click', clicar);
area.addEventListener('mouseenter', entrar);
area.addEventListener('mouseout', sair);

function clicar(){
    area.innerText = 'Clicou';
    area.style.backgroundColor = 'red';
}
function entrar(){
    area.innerText = 'entrou';

}
function sair(){
    area.innerText = 'Saiu';
    area.style.backgroundColor = 'green';
}