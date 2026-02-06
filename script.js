class GestorNotificaciones{
    enviar(){}
}

export class EmailService extends GestorNotificaciones{
    enviar(){
        console.log("Se envió un Email")
    }
}

export class SmsService extends GestorNotificaciones{
    enviar(){
        console.log("Se envió un sms")
    }
}

///////////////////////////

const productos = [
  { nombre: "Pan", stock: 10 },
  { nombre: "Leche", stock: 0 },
  { nombre: "Huevos", stock: 3 },
  { nombre: "Queso", stock: 0 }
];

function productosAgotados(listaProductos) {
  const agotados = [];

  for (const producto of listaProductos) {
    if (producto.stock === 0) {
      agotados.push(producto.nombre);
    }
  }

  return agotados;
}

const resultado = productosAgotados(productos);

console.log(resultado);
