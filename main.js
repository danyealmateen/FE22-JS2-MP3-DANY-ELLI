const url = `https://della-311b1-default-rtdb.europe-west1.firebasedatabase.app/.json`;
let itemsInCart = 0;
let cart = [];

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

//GetProducts
async function getProducts() {
  const response = await fetch(url);
  const data = await response.json();
  let arrayObj = Object.values(data);

  //Candy (Skittles)
  arrayObj.forEach((obj) => {
    const { name, price, stock, url } = obj.candy;
    candyCard.innerHTML = `
        <img src="${url}"/><br>
        Name:${name}<br>
        Price:${price}<br> 
        Stock:${stock}<br>`;
  });

  //Chips (Estrella)
  arrayObj.forEach((obj) => {
    const { name, price, stock, url } = obj.chips;
    chipsCard.innerHTML = `
        <img src="${url}"/><br>
        Name:${name}<br>
        Price:${price}<br> 
        Stock:${stock}<br>`;
  });

  //Cookie (Marabou)
  arrayObj.forEach((obj) => {
    const { name, price, stock, url } = obj.cookie;
    cookieCard.innerHTML = `
        <img src="${url}"/><br>
        Name:${name}<br>
        Price:${price}<br> 
        Stock:${stock}<br>`;
  });

  //Gum (Stimerol)
  arrayObj.forEach((obj) => {
    const { name, price, stock, url } = obj.gum;
    gumCard.innerHTML = `
        <img src="${url}"/><br>
        Name:${name}<br>
        Price:${price}<br> 
        Stock:${stock}<br>`;
  });

  //Soda (Pepsi)
  arrayObj.forEach((obj) => {
    const { name, price, stock, url } = obj.soda;
    sodaCard.innerHTML = `
            <img src="${url}"/><br>
            Name:${name}<br>
            Price:${price}<br> 
            Stock:${stock}<br>`;
  });

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
getProducts();
