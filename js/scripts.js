const optionsFilterElement = document.getElementById('options-filter');
const containerObjetcsElement = document.getElementById('container-objetcs');

let cartContainer = [];

const filterSelection = event => {
  event.target.dataset.filters;
  //console.log(event.target.dataset.filters);
  if (!event.target.dataset.filters) {
    return;
  }

  for (const filters of optionsFilterElement.children) {
    filters.classList.remove('filter-desserts-active');
  }
  event.target.classList.add('filter-desserts-active');
};

const cartTextButton = (element, quantity) => {
  console.log(quantity);

  element.children[1].textContent = quantity;
};

const addToCart = (name, price) => {
  cartContainer.push({ name: name, price: price, quantity: 1 });
};

const removeFromCart = name => {
  cartContainer = cartContainer.filter(productCart => {
    return productCart.name !== name;
  });
  console.log(cartContainer);
};

const increaseQuantity = (element, name) => {
  const cartProduct = cartContainer.find(product => {
    return product.name === name;
  });
  cartProduct.quantity++;

  //console.log(cartContainer);
  cartTextButton(element, cartProduct.quantity);
};

const decreaseQuantity = (element, name) => {
  console.log(element, name);
  const cartProduct = cartContainer.find(product => {
    return product.name === name;
  });

  if (cartProduct.quantity === 1) {
    element.previousElementSibling.classList.remove('cart-container-hidden');
    element.previousElementSibling.previousElementSibling.classList.remove('border-img-select');
    element.classList.add('hide');
    element.children[1].textContent = 1;
    //Eliminar producto del array
    removeFromCart(name);
  } else {
    cartProduct.quantity--;
  }

  console.log(cartProduct.quantity);

  cartTextButton(element, cartProduct.quantity);
};

const showEventsButton = (effectVisual, name, price) => {
  const buttonHidden = effectVisual; //hidden button
  buttonHidden.classList.add('cart-container-hidden');

  const buttonShow = effectVisual.nextElementSibling; //show button
  buttonShow.classList.remove('hide');

  const imgBorder = effectVisual.previousElementSibling; //dessert selector border
  imgBorder.classList.add('border-img-select');

  addToCart(name, price);
};

const containerObjetcs = event => {
  const type = event.target.dataset.type;
  //console.log(type);
  if (!type) return;

  const nameDessert = event.target.dataset.name;
  const priceDessert = event.target.dataset.price;

  if (type === 'add') {
    showEventsButton(event.target, nameDessert, priceDessert);
    //console.log(event.target.dataset);
  }

  if (type === 'increase') {
    const nameDessert = event.target.parentElement.dataset.name;
    const priceDessert = event.target.parentElement.dataset.price;

    increaseQuantity(event.target.parentElement, nameDessert, priceDessert);
  } else if (type === 'decrease') {
    const nameDessert = event.target.parentElement.dataset.name;
    const priceDessert = event.target.parentElement.dataset.price;

    decreaseQuantity(event.target.parentElement, nameDessert, priceDessert);
  }
};

optionsFilterElement.addEventListener('click', filterSelection);
containerObjetcsElement.addEventListener('click', containerObjetcs);
