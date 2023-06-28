function verificar(){
    var txtPais = document.querySelector('input#txtPais').value;
    var res = document.querySelector('div#res');
    var br = 'Brasileiro';
    var est = 'Estrangeiro';

    if((txtPais == 'Brasil') || (txtPais == 'brasil')) {
        res.innerHTML = `<p>Você é ${br}</p>`;
    }else{
        res.innerHTML = `<p>Você é ${est}</p>`;
    }
}