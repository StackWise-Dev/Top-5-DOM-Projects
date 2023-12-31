import { data } from "./data.js";
let products = [...data.products];
let productSection = document.querySelector(".products-section");
let input = document.querySelector("#search");

// READING PRODUCTS
function readProducts(products) {
    productSection.innerHTML = "";
    if(products.length) {
        products.map((product, index) => {
            let card = document.createElement("div");
            card.classList.add("card");
            card.setAttribute("data-id", index);
            card.innerHTML = `<div class="image-sect">
            <img src="${product.thumbnail}" alt="proudct image">
            </div>
            <div class="prod-title">${product.title}</div>
            <div class="price">${product.price}</div>
            <a href="/">Visit Product</a>`;
            productSection.appendChild(card);
        });
    } else {
        productSection.append("Sorry! no product to display");
    }
}

readProducts(products);

// FILTER PRODUCTS
input.addEventListener("input", function(e) {
    let searchValue = e.target.value.toLowerCase();
    let result = products.filter(product => product.title.toLowerCase().includes(searchValue));
    readProducts(result);
});



