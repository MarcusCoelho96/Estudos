function mostrarItens(){
    if(itens.style.display == 'none'){
        itens.style.display = 'block';
    }else{
        itens.style.display = 'none';
    }
}
function tamanhoTela(){
    if(window.innerWidth >= 789){
        menu.style.display = 'none';
        itens.style.display = 'block';
    }else{
        menu.style.display = 'block';
        itens.style.display = 'none';
    }
}