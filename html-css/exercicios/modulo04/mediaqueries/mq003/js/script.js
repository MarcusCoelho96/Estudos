function mostrarItens(){
    if(itens.style.display == 'none'){
        itens.style.display = 'block';
    }else{
        itens.style.display = 'none';
    }
}
function tirarBurguer(){
    if(window.screen.width >= 612){
        itens.style.display = 'block';
    }else if(window.screen.width < 612){
        itens.style.display = 'none';
    }
}