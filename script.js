const list = document.querySelector("ul");
const showAllButton = document.querySelector(".show-all");
const mapAllButton = document.querySelector(".map-all");

let myLi = "";

function showAll(productsArray) {
  let myLi = "";

  productsArray.forEach((product) => {
    myLi += `
    <li>
      <img src="${product.src}" alt="${product.name}">
      <p>${product.name}</p>
      <p class="item-price">R$ ${product.price}</p>
    </li>`;
  });

  list.innerHTML = myLi;
}

function mapProductPrices() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));

  showAll(newPrices);
}

showAllButton.addEventListener("click", () => showAll(menuOptions));
mapAllButton.addEventListener("click", mapProductPrices);
