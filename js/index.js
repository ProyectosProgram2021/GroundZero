const mostrarPersonaje = function(){
    
    const molde = document.querySelector(".molde-detalle").cloneNode(true);
    Swal.fire({
        html: molde.innerHTML
    })
};
const cargarProductos = function(){
    const contenedor = document.querySelector("#contenedor-personajes");
    const molde = document.querySelector(".molde-personaje");
    let copia = molde.cloneNode(true); 
    copia.querySelector(".btn-ver-producto").addEventListener("mouseover", mostrarPersonaje);
    contenedor.appendChild(copia);
    
};


document.addEventListener("DOMContentLoaded", ()=>{

    cargarProductos();
});

/*
let copia = molde.cloneNode(true); 
        copia.querySelector(".nombre-personaje").innerText = p.name;
        copia.querySelector(".imagen-personaje").src = p.image;
        copia.querySelector(".btn-ver-personaje").personaje = p;
        copia.querySelector(".btn-ver-personaje").addEventListener("click", mostrarPersonaje);
        contenedor.appendChild(copia);
    });
*/