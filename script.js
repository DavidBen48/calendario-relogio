const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

});

const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

const calendario = setInterval(function time() {
    let dateObj = new Date();
    let dd = dateObj.getDate();
    var mm = dateObj.getMonth() +1;
    var yyyy = dateObj.getFullYear();

    dia.textContent = dd;
    mes.textContent = mm;
    ano.textContent = yyyy;
 
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    
});