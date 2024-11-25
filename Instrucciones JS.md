- El primer paso sería tener todos los data- con los datos correspondientes a cada producto, lo más cómodo es tener esos datos en los botones de añadir, incrementar y decrementar.

  - data-type: representa el tipo de acción que queremos realizar.
  - data-name: Nombre del producto
  - data-price: Precio del producto

```html
<button data-name="Vanilla Panna Cotta" data-price="6.50" data-type="add">Add to Cart</button>

<button data-name="Vanilla Panna Cotta" data-price="6.50">
  <img data-type="decrement" src="./assets/images/icon-decrement-quantity.svg" alt="icon cart" />
  <span>1</span>
  <img data-type="increment" src="./assets/images/icon-increment-quantity.svg" alt="icon cart" />
</button>
```

- Después necesitais detectar el click en todo el contenedor de productos para saber en qué botón habéis hecho click y de ahí extraer la información del producto.

- Una vez que tenéis eso el orden de acciones que os recomiendo es:

- Añadir producto al carrito. El carrito será un array vacío donde iremos añadiendo productos con su nombre, su precio y la cantidad de producto que queremos comprar.

```javascript
[
  {
    name: 'tortitas',
    price: 4.5,
    quantity: 1
  },
  {
    name: 'gofres',
    price: 7.5,
    quantity: 1
  }
];
```

- Cambiar el botón añadir por el botón de cantidad.

- Hacer la funcionalidad de sumar cantidad de producto en el array del carrito.

- Actualizar el número en la interfaz del producto correspondiente.

- Hacer la funcionalidad de restar cantidad de producto en el array del carrito.

- Actualizar el número en la interfaz del producto correspondiente.

- Si al quitar cantidad de productos llegamos a 0, en ese caso tendremos que eliminar el producto del carrito y hacer los cambios necesarios en la interfaz.

- Después de tener el array funcionando correctamente, podremos pintar el carrito en la interfaz de la página
