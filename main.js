const url = `https://della-311b1-default-rtdb.europe-west1.firebasedatabase.app/.json`;
let cartItems = JSON.parse(localStorage.getItem("cartItems"));
console.log(cartItems);
let productArray = [];
let itemToCartArray = [];
let itemsInCart = 0;

//Products
let candy = { name: "skittles", price: 10, stock: 1, url: "blabla" };
let chips = { name: "estrella", price: 10, stock: 1, url: "blabla" };
let cookie = { name: "marabou", price: 10, stock: 1, url: "blabla" };
let gum = { name: "stimerol", price: 10, stock: 1, url: "blabla" };
let soda = { name: "pepsi", price: 10, stock: 1, url: "blabla" };

//Cards pushed into the array
productArray.push(candy);
productArray.push(chips);
productArray.push(cookie);
productArray.push(gum);
productArray.push(soda);

//Cards
const itemCounter = document.getElementById("itemCounter");
const productCard = document.getElementById("productCard");
const candyCard = document.getElementById("candyCard");
const chipsCard = document.getElementById("chipsCard");
const cookieCard = document.getElementById("cookieCard");
const gumCard = document.getElementById("gumCard");
const sodaCard = document.getElementById("sodaCard");

//Buttons
const candyBtn = document.getElementById("candyBtn");
const chipsBtn = document.getElementById("chipsBtn");
const cookieBtn = document.getElementById("cookieBtn");
const gumBtn = document.getElementById("gumBtn");
const sodaBtn = document.getElementById("sodaBtn");

candyBtn.addEventListener("click", () => {
  itemsInCart++;
  itemCounter.innerHTML = `${itemsInCart}`;
  itemToCartArray.push(candy);
  localStorage.setItem("cartItems", JSON.stringify(itemToCartArray));
  candyBtn.disabled = true;
});

chipsBtn.addEventListener("click", () => {
  itemsInCart++;
  itemCounter.innerHTML = `${itemsInCart}`;
  itemToCartArray.push(chips);
  localStorage.setItem("cartItems", JSON.stringify(itemToCartArray));
  chipsBtn.disabled = true;
});

cookieBtn.addEventListener("click", () => {
  itemsInCart++;
  itemCounter.innerHTML = `${itemsInCart}`;
  itemToCartArray.push(cookie);
  localStorage.setItem("cartItems", JSON.stringify(itemToCartArray));
  cookieBtn.disabled = true;
});

gumBtn.addEventListener("click", () => {
  itemsInCart++;
  itemCounter.innerHTML = `${itemsInCart}`;
  itemToCartArray.push(gum);
  localStorage.setItem("cartItems", JSON.stringify(itemToCartArray));
  gumBtn.disabled = true;
});

sodaBtn.addEventListener("click", () => {
  itemsInCart++;
  itemCounter.innerHTML = `${itemsInCart}`;
  itemToCartArray.push(soda);
  localStorage.setItem("cartItems", JSON.stringify(itemToCartArray));
  sodaBtn.disabled = true;
});

//Post products
async function postProducts() {
  const init = {
    method: "PUT",
    body: JSON.stringify(productArray),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  const response = await fetch(url, init);
  const data = await response.json();
}
postProducts();

//Get products
async function getProducts() {
  const response = await fetch(url);
  const data = await response.json();

  candyCard.innerHTML = `
  ${data[0].name} 
  ${data[0].price} 
  ${data[0].stock}
  ${data[0].url}`;

  chipsCard.innerHTML = `
  ${data[1].name} 
  ${data[1].price} 
  ${data[1].stock}
  ${data[1].url}`;

  cookieCard.innerHTML = `
  ${data[2].name} 
  ${data[2].price} 
  ${data[2].stock}
  ${data[2].url}`;

  gumCard.innerHTML = `
  ${data[3].name} 
  ${data[3].price} 
  ${data[3].stock}
  ${data[3].url}`;

  sodaCard.innerHTML = `
  ${data[4].name} 
  ${data[4].price} 
  ${data[4].stock}
  ${data[4].url}`;
}
getProducts();
