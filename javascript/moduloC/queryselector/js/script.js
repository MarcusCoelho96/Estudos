/* var tag1 = document.getElementsByTagName('div')[0];
window.document.write("está escrito assim --> " + tag1.innerText);
tag1.style.backgroundColor = "red";
var tag01 = window.document.getElementById('msg');
tag01.innerText = 'Estou aguardando';
window.document.write("<br>" + tag01.innerText); */

var a = window.document.querySelector('div#msg');
window.document.write(a.innerHTML);
a.style.backgroundColor = "red";