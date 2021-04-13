$.getJSON("data/listaDeProductos.json", function(datos, estado){
  console.log(datos)
})


for(let objeto of listaProductos){


$("#contenidoGenerado").append(`<div class="col mb-4">
                                <div class="card" id=${objeto.id}>
                                <img src="${objeto.avatar}" class="card-img-top" width='250' height='250'>
                                <div class="card-body">
                                <h5 class="card-title">${objeto.nombre}</h5>
                                <p class="card-text"> $ ${objeto.precio}</p>
                               <button id=${objeto.id} class="btn btn-warning btn-producto">Agregar</button>
                         </div>
                       </div>
                    </div>`);
}

// Funcion del botón y busqueda de objeto

$(".btn-producto").click(function(e){
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
  let productoEncontrado = listaProductos.find(function(elemento){ return elemento.id == e.target.id});
  SELECCIONADOS.push(productoEncontrado);
  $("#productos").empty();
  let total = 0;
  for (const comprado of SELECCIONADOS) {
    total = total + comprado.precio;

 // Boton borrar   
 $("#productos").append(`<p>${comprado.nombre} $ ${comprado.precio}</p><button class="btnDelete">Borrar</button>`);
  }
 

//Total en carrito
$("#productos").append(`<p>PRECIO TOTAL : ${total}</p>`)

//animacion por JQ de Carrito
  $("#productos").slideDown();
});

$("#dropdownMenuButton").click(function (e) {
$("#productos").toggle();
});





