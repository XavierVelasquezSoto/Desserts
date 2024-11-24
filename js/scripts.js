const optionsFilterElement = document.getElementById("options-filter");
const containerObjetcsElement = document.getElementById("container-objetcs");

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

const containerObjetcs = (event) => {
  const button = event.target.dataset.button;
  //console.log(button);
  if (!button) return;

  if (button === "add") {
    showEventsButton(event.target);
    //console.log(event.target.dataset);
  }
};

const showEventsButton = (effectVisual) => {
  const buttonHidden = effectVisual; //hidden button
  buttonHidden.classList.add("cart-container-hidden");
  const buttonShow = effectVisual.nextElementSibling; //show button
  buttonShow.classList.remove("cart-flex-hidden");
  const imgBorder = effectVisual.previousElementSibling; //dessert selector border
  imgBorder.classList.add("border-img-select");
};

optionsFilterElement.addEventListener("click", filterSelection);
containerObjetcsElement.addEventListener("click", containerObjetcs);
