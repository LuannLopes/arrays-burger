const list = document.querySelector("ul");
const showAllButton = document.querySelector(".show-all");
let myLi = "";

function showAll() {
  menuOptions.forEach((product) => {
    myLi += `
    <li>
      <img src="${product.src}" alt="${product.name}">
      <p>${product.name}</p>
      <p class="item-price">R$ ${product.price}</p>
    </li>`;
  });

  list.innerHTML = myLi;
}

showAllButton.addEventListener("click", showAll);
