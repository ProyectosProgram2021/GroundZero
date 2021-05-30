
tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
});

const mostrarProducto = function(){
    let verproducto = this.verproducto;
    const molde = document.querySelector(".molde-detalle").cloneNode(true);
    molde.querySelector(".nombre-sa-producto").innerText = verproducto.nombre;
    molde.querySelector(".descripcion-sa-producto").innerHTML = verproducto.descripcion;
    
    Swal.fire({
        html: molde.innerHTML,
        confirmButtonText: 'Cerrar',
    })
};

const productos = [];


document.querySelector("#producto-form").addEventListener('submit', (e)=>{
    e.preventDefault();
    let nombre = document.querySelector("#nombre-txt").value; 
    let descripcion = tinymce.get("descripcion-txt").getContent();
    let tipo = document.querySelector("#tipo-select").value;
    let artista = document.querySelector("#artista-txt").value; 
    let precio = document.querySelector("#precio-txt").value; 
   let esValido = true;
   document.querySelector("#nombre-txt").classList.remove("is-invalid");
  if(nombre.trim() == ""){
    document.querySelector("#nombre-txt").classList.add("is-invalid");
    esValido = false;
  }

  if(descripcion.trim() == ""){
    document.querySelector("#descripcion-txt").classList.add("is-invalid");
    esValido = false;
  }
  if(artista.trim() == ""){
    document.querySelector("#artista-txt").classList.add("is-invalid");
    esValido = false;
  }
  if(precio.trim() == ""){
    document.querySelector("#precio-txt").classList.add("is-invalid");
    esValido = false;
  }
  if (esValido){
    let producto ={};
    producto.nombre = nombre; 
    producto.descripcion = descripcion;
    producto.tipo = tipo;
    producto.artista = artista; 
    producto.precio = precio; 
    productos.push(producto);

    cargarProductos();
    Swal.fire("Registro Exitoso!","Producto Agregado", "info");

  } 
});

const cargarProductos = async function(){
    let contenedor = document.querySelector("#contenedor-producto");
    let molde  = document.querySelector(".molde-producto");
    
    
    /*molde.querySelector(".nombre-producto").innerText ="";
    molde.querySelector(".descripcion-producto").innerHTML = "";
    molde.querySelector(".imagen-producto").src = "";
    molde.querySelector(".nombre-artista").innerText = "";
    molde.querySelector(".producto-precio").innerText = "";*/
    
    productos.forEach(p =>{
        let copia = molde.cloneNode(true); 
        copia.querySelector(".nombre-producto").innerText = p.nombre;
        copia.querySelector(".descripcion-producto").innerHTML = p.descripcion;
        molde.querySelector(".imagen-producto").src;
        copia.querySelector(".nombre-artista").innerText = p.artista;
        copia.querySelector(".producto-precio").innerText = p.precio;
        copia.querySelector(".btn-ver-producto").verproducto = p;
        copia.querySelector(".btn-ver-producto").addEventListener("mouseover", mostrarProducto);
        contenedor.appendChild(copia);
    });
    
};



document.addEventListener("DOMContentLoaded", ()=>{

    cargarProductos();
});