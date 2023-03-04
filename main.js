const url = `https://della-311b1-default-rtdb.europe-west1.firebasedatabase.app/.json`;
let productArray = [];
let itemToCartArray = [];
let itemsInCart = 0;

//Products
let candy = { name: "skittles", price: 10, stock: 1, url: "blabla", id: 1 };
let chips = { name: "estrella", price: 15, stock: 2, url: "blabla", id: 2 };
let cookie = { name: "marabou", price: 20, stock: 3, url: "blabla", id: 3 };
let gum = { name: "stimerol", price: 25, stock: 4, url: "blabla", id: 4 };
let soda = { name: "pepsi", price: 30, stock: 5, url: "blabla", id: 5 };

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
  console.log(itemToCartArray);
  localStorage.setItem("cartItems", JSON.stringify(itemToCartArray));
});

chipsBtn.addEventListener("click", () => {
  itemsInCart++;
  itemCounter.innerHTML = `${itemsInCart}`;
  itemToCartArray.push(chips);
  console.log(itemToCartArray);
  localStorage.setItem("cartItems", JSON.stringify(itemToCartArray));
});

cookieBtn.addEventListener("click", () => {
  itemsInCart++;
  itemCounter.innerHTML = `${itemsInCart}`;
  itemToCartArray.push(cookie);
  console.log(itemToCartArray);
  localStorage.setItem("cartItems", JSON.stringify(itemToCartArray));
});

gumBtn.addEventListener("click", () => {
  itemsInCart++;
  itemCounter.innerHTML = `${itemsInCart}`;
  itemToCartArray.push(gum);
  console.log(itemToCartArray);
  localStorage.setItem("cartItems", JSON.stringify(itemToCartArray));
});

sodaBtn.addEventListener("click", () => {
  itemsInCart++;
  itemCounter.innerHTML = `${itemsInCart}`;
  itemToCartArray.push(soda);
  console.log(itemToCartArray);
  localStorage.setItem("cartItems", JSON.stringify(itemToCartArray));
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
