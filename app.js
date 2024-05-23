let productos = [];

function guardar() {
    let nombreProducto = document.getElementById('nombreProducto').value;
    let valorProducto = parseFloat(document.getElementById('valorProducto').value);

    if (nombreProducto && !isNaN(valorProducto)) {
        let ivaProducto = valorProducto * 0.19;  
        let totalProducto = valorProducto + ivaProducto;

        productos.push({
            nombre: nombreProducto,
            valor: valorProducto,
            iva: ivaProducto,
            total: totalProducto
        });

        mostrarProductos();
        alert('Producto guardado');
        document.getElementById('formulario').reset();
    } else {
        alert('Por favor, complete todos los campos para guardar el producto');
    }
}

function mostrarProductos() {
    let tabla = document.getElementById('tablaProductos');
    tabla.innerHTML = '';

    productos.forEach(producto => {
        let fila = `
            <tr>
                <td>${producto.nombre}</td>
                <td>${producto.valor.toFixed(2)}</td>
                <td>${producto.iva.toFixed(2)}</td>
                <td>${producto.total.toFixed(2)}</td>
            </tr>
        `;
        tabla.innerHTML += fila;
    });
}
