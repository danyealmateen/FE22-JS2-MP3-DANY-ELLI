const url = `https://della-311b1-default-rtdb.europe-west1.firebasedatabase.app/.json`;
getProducts();

let cartItems = JSON.parse(localStorage.getItem("cartItems"));
console.log(cartItems);
let productArray = [];
let itemToCartArray = [];
const itemCounter = document.getElementById("itemCounter");
let itemsInCart = 0;

//Checking if cart is empty or not and displaying items in the cart from the last session.
if (cartItems !== null) {
  cartItems.forEach((item) => {
    if (item <= 0) {
      itemsInCart++;
    } else {
      itemsInCart++;
      itemCounter.innerHTML = `Items from last session ${itemsInCart}`;
    }
  });
}

//Get the current stock value from localstorage if true - set it to 1 if false
let candyStock = localStorage.getItem("candyStock") || 1;
let chipsStock = localStorage.getItem("chipsStock") || 1;
let cookieStock = localStorage.getItem("cookieStock") || 1;
let gumStock = localStorage.getItem("gumStock") || 1;
let sodaStock = localStorage.getItem("gumStock") || 1;

//Products
let candy = { name: "skittles", price: 10, stock: candyStock, url: "blabla" };
let chips = { name: "estrella", price: 10, stock: chipsStock, url: "blabla" };
let cookie = { name: "marabou", price: 10, stock: cookieStock, url: "blabla" };
let gum = { name: "stimerol", price: 10, stock: gumStock, url: "blabla" };
let soda = { name: "pepsi", price: 10, stock: sodaStock, url: "blabla" };

//Cards pushed into the array
productArray.push(candy);
productArray.push(chips);
productArray.push(cookie);
productArray.push(gum);
productArray.push(soda);

//Cards
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

checkAndDisableCandyBtn();
candyBtn.addEventListener("click", () => {
  itemsInCart++;
  itemCounter.innerHTML = `${itemsInCart}`;
  itemToCartArray.push(candy);
  localStorage.setItem("cartItems", JSON.stringify(itemToCartArray));
  candyBtn.disabled = true;
  candy.stock -= 1;
  localStorage.setItem("candyStock", candy.stock);
  updateStock(0, candy.stock);
});
checkAndDisableCandyBtn();

checkAndDisableChipsBtn();
chipsBtn.addEventListener("click", () => {
  itemsInCart++;
  itemCounter.innerHTML = `${itemsInCart}`;
  itemToCartArray.push(chips);
  localStorage.setItem("cartItems", JSON.stringify(itemToCartArray));
  chipsBtn.disabled = true;
  chips.stock -= 1;
  localStorage.setItem("chipsStock", chips.stock);
  updateStock(1, chips.stock);
});
checkAndDisableChipsBtn();

checkAndDisableCookieBtn();
cookieBtn.addEventListener("click", () => {
  itemsInCart++;
  itemCounter.innerHTML = `${itemsInCart}`;
  itemToCartArray.push(cookie);
  localStorage.setItem("cartItems", JSON.stringify(itemToCartArray));
  cookieBtn.disabled = true;
  cookie.stock -= 1;
  localStorage.setItem("cookieStock", cookie.stock);
  updateStock(2, cookie.stock);
});
checkAndDisableCookieBtn();

checkAndDisableGumBtn();
gumBtn.addEventListener("click", () => {
  itemsInCart++;
  itemCounter.innerHTML = `${itemsInCart}`;
  itemToCartArray.push(gum);
  localStorage.setItem("cartItems", JSON.stringify(itemToCartArray));
  gumBtn.disabled = true;
  gum.stock -= 1;
  localStorage.setItem("gumStock", gum.stock);
  updateStock(3, gum.stock);
});
checkAndDisableGumBtn();

checkAndDisableSodaBtn();
sodaBtn.addEventListener("click", () => {
  itemsInCart++;
  itemCounter.innerHTML = `${itemsInCart}`;
  itemToCartArray.push(soda);
  localStorage.setItem("cartItems", JSON.stringify(itemToCartArray));
  sodaBtn.disabled = true;
  soda.stock -= 1;
  localStorage.setItem("sodaStock", soda.stock);
  updateStock(4, soda.stock);
});
checkAndDisableSodaBtn();

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

async function updateStock(product, newStock) {
  const patchUrl = `https://della-311b1-default-rtdb.europe-west1.firebasedatabase.app/${product}.json`;

  const init = {
    method: "PATCH",
    body: JSON.stringify({ stock: newStock }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const response = await fetch(patchUrl, init);
  const data = await response.json();
}

function checkAndDisableCandyBtn() {
  if (candy.stock <= 0) {
    candyBtn.disabled = true;
  } else {
    candyBtn.disabled = false;
  }
}

function checkAndDisableChipsBtn() {
  if (chips.stock <= 0) {
    chipsBtn.disabled = true;
  } else {
    chipsBtn.disabled = false;
  }
}

function checkAndDisableCookieBtn() {
  if (cookie.stock <= 0) {
    cookieBtn.disabled = true;
  } else {
    cookieBtn.disabled = false;
  }
}

function checkAndDisableGumBtn() {
  if (gum.stock <= 0) {
    gumBtn.disabled = true;
  } else {
    gumBtn.disabled = false;
  }
}

function checkAndDisableSodaBtn() {
  if (soda.stock <= 0) {
    sodaBtn.disabled = true;
  } else {
    sodaBtn.disabled = false;
  }
}

