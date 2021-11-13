
var padula =  document.getElementById('padula');
var guerrero =  document.getElementById('guerrero');
var pizarro =  document.getElementById('pizarro');

var preguntaUno = document.getElementById('uno');
var preguntaDos = document.getElementById('dos');

var lima = document.getElementById('lima');
var huanuco =  document.getElementById('huanuco');
var cuzco =  document.getElementById('cuzco');

var correcto =  document.getElementById('correcto');
var incorrecto =  document.getElementById('incorrecto');
var correcto2 =  document.getElementById('correcto2');
var incorrecto2 =  document.getElementById('incorrecto2');

var puntaje = 0;


guerrero.addEventListener("click", function (e) {
  e.preventDefault();
  guerrero.style.background = "red";
  incorrecto.style.display = "block";

  setTimeout(function name(params) {
    preguntaUno.style.display = "none";
    preguntaDos.style.display = "block";
    
  },1400)
})

padula.addEventListener("click", function (e) {
  e.preventDefault();
  padula.style.background = "green";
  correcto.style.display = "block";
    puntaje++;
    setTimeout(function name(params) {
    preguntaUno.style.display = "none";
    preguntaDos.style.display = "block";
    
  },1200)
})

pizarro.addEventListener("click", function (e) {
  e.preventDefault();
  pizarro.style.background = "red";
  incorrecto.style.display = "block";

  setTimeout(function name(params) {
    preguntaUno.style.display = "none";
    preguntaDos.style.display = "block";
    
  },1200)
})

lima.addEventListener("click", function (e) {
e.preventDefault();

lima.style.background = "green";
correcto2.style.display = "block";
puntaje++;

setTimeout(function name(params) {
    
  document.write(puntaje);


  },1200)

})

huanuco.addEventListener("click", function (e) {
e.preventDefault();

huanuco.style.background = "red";
incorrecto2.style.display = "block";


setTimeout(function name(params) {
    
  document.write(puntaje);


  },1200)

})

cuzco.addEventListener("click", function (e) {
e.preventDefault();

cuzco.style.background = "red";
incorrecto2.style.display = "block";


setTimeout(function name(params) {
    
  document.write(puntaje);


  },1200)

})