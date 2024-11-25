const optionsFilterElement = document.getElementById("options-filter");
const containerObjetcsElement = document.getElementById("container-objetcs");

let cartContainer = [];

const filterSelection = (event) => {
  event.target.dataset.filters;
  //console.log(event.target.dataset.filters);
  if (!event.target.dataset.filters) {
    return;
  }

  for (const filters of optionsFilterElement.children) {
    filters.classList.remove("filter-desserts-active");
  }
  event.target.classList.add("filter-desserts-active");
};

const addToCart = (name, price) => {
  cartContainer.push({ name: name, price: price, quantity: 1 });
  //console.log(cartContainer);
};

const increaseQuantity = (name) => {
  console.log(name);
  cartContainer = cartContainer.map((product) => {
    if (product.name === name) {
      product.quantity++;
    }
    return product;
  });
  console.log(cartContainer);
};

const showEventsButton = (effectVisual, name, price) => {
  const buttonHidden = effectVisual; //hidden button
  buttonHidden.classList.add("cart-container-hidden");
  const buttonShow = effectVisual.nextElementSibling; //show button
  buttonShow.classList.remove("cart-flex-hidden");
  const imgBorder = effectVisual.previousElementSibling; //dessert selector border
  imgBorder.classList.add("border-img-select");
  addToCart(name, price);
};

const containerObjetcs = (event) => {
  const type = event.target.dataset.type;
  //console.log(type);
  if (!type) return;
  const priceDessert = event.target.dataset.price;
  const nameDessert = event.target.dataset.name;
  console.log(type);
  if (type === "add") {
    showEventsButton(event.target, nameDessert, priceDessert);
    //console.log(event.target.dataset);
  }

  if (type === "increase") {
    const nameDessert = event.target.parentElement.dataset.name;
    const priceDessert = event.target.parentElement.dataset.price;
    increaseQuantity(nameDessert, priceDessert);
  } else if (type === "decrease") {
  }
};

/* const decreasePrice = (price) => {
  const decreasePrice = priceValorContainer.map((decreaseValor) => {
    if (decreaseValor.name === price) {
      decreasePrice = decreaseValor--;
    }
    console.log(decreasePrice);
  });
}; */

optionsFilterElement.addEventListener("click", filterSelection);
containerObjetcsElement.addEventListener("click", containerObjetcs);
