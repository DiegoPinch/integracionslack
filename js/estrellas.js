  function abrirPantallaFlotante(num) {
    var pantallaFlotante = document.getElementById("pantallaFlotante" + num);
    pantallaFlotante.style.display = "flex";
  }
  
  function aplicarHoverAnteriores(event, num) {
    var estrellaSeleccionada = event.target;
    var estrellas = document.querySelectorAll("#estrellas" + num + " .estrella");
    var indiceSeleccionado = Array.from(estrellas).indexOf(estrellaSeleccionada);
  
    for (var i = 0; i <= indiceSeleccionado; i++) {
      estrellas[i].classList.add('hover-previous');
    }
  
    for (var j = indiceSeleccionado + 1; j < estrellas.length; j++) {
      estrellas[j].classList.remove('hover-previous');
    }
  }
  
  function calificar(event, num) {
    var estrellaSeleccionada = event.target;
    var estrellas = document.querySelectorAll("#estrellas" + num + " .estrella");
  
    // Obtener la calificación (número de estrellas seleccionadas)
    var calificacion = Array.prototype.indexOf.call(estrellas, estrellaSeleccionada) + 1;
  
    // Hacer algo con la calificación seleccionada
/*     alert("Calificación: " + calificacion + " estrellas"); */
  
    // Cerrar la pantalla flotante
    var pantallaFlotante = document.getElementById("pantallaFlotante" + num);
    pantallaFlotante.style.display = "none";
    var estrella = "cEstrellas" + num;
    document.getElementById(estrella).innerHTML = calificacion + "&#9733";
  }
  
  
  function mostrarWidgetsSeleccionados(selectedValue) {
    var restaurant1 = document.querySelector('.restaurant-1');
    var restaurant2 = document.querySelector('.restaurant-2');
    var restaurant3 = document.querySelector('.restaurant-3');
    var restaurant4 = document.querySelector('.restaurant-4');
    var restaurant5 = document.querySelector('.restaurant-5');
    var restaurant6 = document.querySelector('.restaurant-6');
    var restaurant7 = document.querySelector('.restaurant-7');
    var restaurant8 = document.querySelector('.restaurant-8');
    var restaurant9 = document.querySelector('.restaurant-9');
    var restaurant10 = document.querySelector('.restaurant-10');
    var lvhoy = document.querySelector('.nlugarVisita1');
    var lvsemana = document.querySelector('.nlugarVisita2');
    var lvmes = document.querySelector('.nlugarVisita3');
    var lvanio = document.querySelector('.nlugarVisita4');
    var lvhace = document.querySelector('.nlugarVisita5');
    var lvtodo = document.querySelector('.nlugarVisita6');
   
    // Ocultar todos los restaurantes
    restaurant1.style.display = 'none';
    restaurant2.style.display = 'none';
    restaurant3.style.display = 'none';
    restaurant4.style.display = 'none';
    restaurant5.style.display = 'none';
    restaurant6.style.display = 'none';
    restaurant7.style.display = 'none';
    restaurant8.style.display = 'none';
    restaurant9.style.display = 'none';
    restaurant10.style.display = 'none';
    lvhoy.style.display = 'none';
    lvsemana.style.display = 'none';
    lvmes.style.display = 'none';
    lvanio.style.display = 'none';
    lvhace.style.display = 'none';
    lvtodo.style.display = 'none';
  
    // Mostrar los restaurantes correspondientes a la opción seleccionada
    if (selectedValue === 'hoy') {
      restaurant1.style.display = 'block';
      lvhoy.style.display= 'block';
    } else if (selectedValue === 'esta_semana') {
      restaurant1.style.display = 'block';
      restaurant2.style.display = 'block';
      restaurant3.style.display = 'block';
      lvsemana.style.display = 'block';
    } else if (selectedValue === 'este_mes') {
      restaurant1.style.display = 'block';
      restaurant2.style.display = 'block';
      restaurant3.style.display = 'block';
      restaurant4.style.display = 'block';
      restaurant5.style.display = 'block';
      lvmes.style.display = 'block';
    } else if (selectedValue === 'este_anio') {
      restaurant1.style.display = 'block';
      restaurant2.style.display = 'block';
      restaurant3.style.display = 'block';
      restaurant4.style.display = 'block';
      restaurant5.style.display = 'block';
      restaurant6.style.display = 'block';
      restaurant7.style.display = 'block';
      restaurant8.style.display = 'block';
      lvanio.style.display = 'block';
    } else if (selectedValue === 'hace_mucho_tiempo') {
      restaurant9.style.display = 'block';
      restaurant10.style.display = 'block';
      lvhace.style.display = 'block';
    } else if (selectedValue === 'todos') {
      restaurant1.style.display = 'block';
      restaurant2.style.display = 'block';
      restaurant3.style.display = 'block';
      restaurant4.style.display = 'block';
      restaurant5.style.display = 'block';
      restaurant6.style.display = 'block';
      restaurant7.style.display = 'block';
      restaurant8.style.display = 'block';
      restaurant9.style.display = 'block';
      restaurant10.style.display = 'block';
      lvtodo.style.display = 'block';
    }
  
  
  
  // Obtener el elemento select
  var select = document.getElementById('seleccion');
  
  // Escuchar el evento change del select
  select.addEventListener('change', function() {
    var selectedValue = select.value;
    mostrarWidgetsSeleccionados(selectedValue);
  });
}

function mostrarPantallaFlotante(elemento) {
  var modal = document.getElementById('modal');
  var encabezadoResena = document.getElementById('encabezado-resena');
  var textoEncabezado = elemento.getAttribute('data-encabezado');
  encabezadoResena.textContent = textoEncabezado;
  modal.style.display = 'block';
}

function cerrarPantallaFlotante() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
  document.getElementById("texto-resena").value = "";
}

function guardarResena() {
  var resena = document.getElementById('texto-resena').value;
  alert("Reseña ingresada: " + resena);
  cerrarPantallaFlotante();
  document.getElementById("texto-resena").value = "";
}


function cambiarColor(corazon) {
  corazon.classList.toggle("clicked");

}




  



  