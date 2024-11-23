const optionsFilter = document.getElementById("options-filter");

const filterSelection = (event) => {
  event.target.dataset.filters;
  //console.log(event.target.dataset.filters);
  if (!event.target.dataset.filters) {
    return;
  }

  for (const filters of optionsFilter.children) {
    filters.classList.remove("filter-desserts-active");
  }
  event.target.classList.add("filter-desserts-active");
};

optionsFilter.addEventListener("click", filterSelection);
