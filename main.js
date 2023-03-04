const url = `https://della-311b1-default-rtdb.europe-west1.firebasedatabase.app/.json`;
let productArray = [];
postCart();
getProducts();
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

candyCard.innerHTML = `
${productArray[0].name}<br>
${productArray[0].price}<br>
${productArray[0].stock}<br>
${productArray[0].url}<br>
`;

chipsCard.innerHTML = `
${productArray[1].name}<br>
${productArray[1].price}<br>
${productArray[1].stock}<br>
${productArray[1].url}<br>
`;

cookieCard.innerHTML = `
${productArray[2].name}<br>
${productArray[2].price}<br>
${productArray[2].stock}<br>
${productArray[2].url}<br>
`;

gumCard.innerHTML = `
${productArray[3].name}<br>
${productArray[3].price}<br>
${productArray[3].stock}<br>
${productArray[3].url}<br>
`;

sodaCard.innerHTML = `
${productArray[4].name}<br>
${productArray[4].price}<br>
${productArray[4].stock}<br>
${productArray[4].url}<br>
`;

//GetProducts
async function getProducts() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  //Eventlisteners
  candyBtn.addEventListener("click", () => {
    itemsInCart++;
    itemCounter.innerText = `${itemsInCart}`;
    cart.push(arrayObj[0].candy);
    console.log(cart);
  });

  chipsBtn.addEventListener("click", () => {
    itemsInCart++;
    itemCounter.innerText = `${itemsInCart}`;
    cart.push(arrayObj[0].chips);
    console.log(cart);
  });

  cookieBtn.addEventListener("click", () => {
    itemsInCart++;
    itemCounter.innerText = `${itemsInCart}`;
    cart.push(arrayObj[0].cookie);
    console.log(cart);
  });

  gumBtn.addEventListener("click", () => {
    itemsInCart++;
    itemCounter.innerText = `${itemsInCart}`;
    cart.push(arrayObj[0].gum);
    console.log(cart);
  });

  sodaBtn.addEventListener("click", () => {
    itemsInCart++;
    itemCounter.innerText = `${itemsInCart}`;
    cart.push(arrayObj[0].soda);
    console.log(cart);
  });
}

// // Post the cart with snacks to FB
async function postCart() {
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
