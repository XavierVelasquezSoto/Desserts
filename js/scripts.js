const optionsFilterElement = document.getElementById("options-filter");
const containerObjetcsElement = document.getElementById("container-objetcs");
const cartProductsElement = document.getElementById("cart-products");
const cartImgElement = document.getElementById("cart-img");
const cartOrderTotalPriceElement = document.getElementById(
  "cart-order-total-price"
);
const totalOrderContainerElement = document.getElementById(
  "total-order-container"
);
const accumulateProductsCartElement = document.getElementById(
  "accumulate-products-cart"
);
/* alternar comentario de linea = añadir tecla ctrl + }  si no lo tiene*/

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

const addProducts = () => {
  accumulateProductsCartElement.textContent = "";
  const fragment = document.createDocumentFragment();
  cartContainer.forEach((product) => {
    //
    const newCartFull = document.createElement("div");
    newCartFull.classList.add("cart-full");

    const newCartDescriptionDessert = document.createElement("span");
    newCartDescriptionDessert.classList.add("cart-description-dessert");
    newCartDescriptionDessert.textContent = `${product.name}`;

    const newCartTotal = document.createElement("div");
    newCartTotal.classList.add("cart-total");

    const newCartAdd = document.createElement("span");
    newCartAdd.classList.add("cart-add");
    newCartAdd.textContent = `${product.quantity}`;

    const newCartPrice = document.createElement("span");
    newCartPrice.classList.add("cart-price");
    newCartPrice.textContent = `@ $${product.price}`;

    const newcartAccumulatedPrice = document.createElement("span");
    newcartAccumulatedPrice.classList.add("cart-accumulated-price");
    newcartAccumulatedPrice.textContent = `$${
      product.quantity * product.price
    }`;

    const newCartRemoveDessert = document.createElement("img");
    newCartRemoveDessert.classList.add("cart-remove-dessert");
    newCartRemoveDessert.src = `./assets/img/icon-remove-item.svg`;

    // const newCartNeutralGreen = document.createElement("div");
    // newCartNeutralGreen.classList.add("cart-neutral-green");

    // const newCartNeutralGreenImg = document.createElement("img");
    // newCartNeutralGreenImg.src = `./assets/img/icon-carbon-neutral.svg`;

    // const newCarbonNeutral = document.createElement("span");
    // newCarbonNeutral.classList.add("carbon-neutral");

    // const newCartBuyOrder = document.createElement("button");
    // newCartBuyOrder.classList.add("cart-buy-order");

    newCartFull.append(newCartDescriptionDessert, newCartTotal); // span name deesert product y div container product
    newCartTotal.append(
      newCartAdd,
      newCartPrice,
      newcartAccumulatedPrice,
      newCartRemoveDessert
    );
    fragment.append(newCartFull, newCartDescriptionDessert, newCartTotal);
  });
  accumulateProductsCartElement.append(fragment);
};

//<div class="cart-full cart-full-hide">---
//<h2 class="cart-title">Your Cart (0)</h2>---
//<span class="cart-description-dessert">Classic Tiramisu</span>--
//<div class="cart-total">--
//<span class="cart-add">1x</span> --
//<span class="cart-price">@ $5.50</span>
//<span class="cart-accumulated-price">$5.50</span>
//<img
//class="cart-remove-dessert"
//src="./assets/img/icon-remove-item.svg"
//alt=""
///>
//</div>
//<div class="cart-order-flex">
//<span class="cart-order">Order Total</span>
//<span class="cart-price-total">$46.50</span>
//</div>
//<div class="cart-neutral-green">
//<img src="./assets/img/icon-carbon-neutral.svg" alt="" />
//<span class="carbon-neutral">
//This is a<span class="cart-span-color">carbon-neutral</span> delivery
//</span>
//</div>
//<button class="cart-buy-order">Confirm Order</button>
//</div>;

const removeEffectCartAdd = () => {
  cartImgElement.classList.add("hide");
};

const valorProductEffect = () => {
  if (cartContainer.length === 0) {
    cartImgElement.classList.remove("hide");
    totalOrderContainerElement.classList.add("hide");
  } else {
    cartImgElement.classList.add("hide");
    totalOrderContainerElement.classList.remove("hide");
    addProducts();
  }
};

const totalValorProducts = () => {
  const totalProductsPrice = cartContainer.reduce((acc, product) => {
    return acc + product.quantity * product.price;
  }, 0);
  return (cartOrderTotalPriceElement.textContent = `$${totalProductsPrice}`);
};

const cartAddProductsText = () => {
  const totalProducts = cartContainer.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);
  return (cartProductsElement.textContent = `Your Cart (${totalProducts})`);
};

const cartTextButton = (element, quantity) => {
  //console.log(quantity);

  element.children[1].textContent = quantity;
};

const addToCart = (name, price) => {
  //console.log(cartContainer);
  cartContainer.push({ name: name, price: price, quantity: 1 });
  cartAddProductsText();
  removeEffectCartAdd();
  totalValorProducts();
  valorProductEffect();
};

const removeFromCart = (name) => {
  cartContainer = cartContainer.filter((productCart) => {
    return productCart.name !== name;
  });
  cartAddProductsText();
  valorProductEffect();
  addProducts();
  //console.log(cartContainer);
};

const increaseQuantity = (element, name) => {
  const cartProduct = cartContainer.find((product) => {
    return product.name === name;
  });
  cartProduct.quantity++;

  //console.log(cartContainer);
  cartTextButton(element, cartProduct.quantity);
  totalValorProducts();
  addProducts();
};

const decreaseQuantity = (element, name) => {
  //console.log(element, name);
  const cartProduct = cartContainer.find((product) => {
    return product.name === name;
  });

  if (cartProduct.quantity === 1) {
    element.previousElementSibling.classList.remove("cart-container-hidden");
    element.previousElementSibling.previousElementSibling.classList.remove(
      "border-img-select"
    );
    element.classList.add("hide");
    element.children[1].textContent = 1;
    //Eliminar producto del array
    removeFromCart(name);
  } else {
    cartProduct.quantity--;
    cartAddProductsText();
    totalValorProducts();
    addProducts();
  }

  //console.log(cartContainer);

  cartTextButton(element, cartProduct.quantity);
};

const showEventsButton = (effectVisual, name, price) => {
  const buttonHidden = effectVisual; //hidden button
  buttonHidden.classList.add("cart-container-hidden");

  const buttonShow = effectVisual.nextElementSibling; //show button
  buttonShow.classList.remove("hide");

  const imgBorder = effectVisual.previousElementSibling; //dessert selector border
  imgBorder.classList.add("border-img-select");

  addToCart(name, price);
};

const containerObjetcs = (event) => {
  const type = event.target.dataset.type;
  //console.log(type);
  if (!type) return;

  const nameDessert = event.target.dataset.name;
  const priceDessert = event.target.dataset.price;

  if (type === "add") {
    showEventsButton(event.target, nameDessert, priceDessert);
    //console.log(event.target.dataset);
  }

  if (type === "increase") {
    const nameDessert = event.target.parentElement.dataset.name;
    const priceDessert = event.target.parentElement.dataset.price;

    increaseQuantity(event.target.parentElement, nameDessert, priceDessert);
    cartAddProductsText(event.target.parentElement.nameDessert);
  } else if (type === "decrease") {
    const nameDessert = event.target.parentElement.dataset.name;
    const priceDessert = event.target.parentElement.dataset.price;

    decreaseQuantity(event.target.parentElement, nameDessert, priceDessert);
  }
};

optionsFilterElement.addEventListener("click", filterSelection);
containerObjetcsElement.addEventListener("click", containerObjetcs);
