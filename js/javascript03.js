function convertirFarenheit(){
var temperatura =  document.getElementById('farenheit').value;
var resultado = parseInt(farenheit) * 1.8 + 32;
document.getElementById('farenheit').value = resultado;
}

function convertirCelsius(){
  var temperatura = document.getElementById('celsius').value;
  var resultado = parseInt((celsius)- 32) * 1.8;
  document.getElementById('celsius').value = resultado;
}
