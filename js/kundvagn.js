//deklarerar kundvagn
let cart = [];
      
//lägger till produkter i kundvagnen
function addToCart(product, price, quantity) {
  let item = { product, price, quantity };
  cart.push(item);
  updateCart();
}

// uppdaterar kundvagnen
function updateCart() {
  let cartItems = document.getElementById("cart-items");
  let cartTotal = document.getElementById("cart-total");
  let total = 0;
  
  // tömmer nuvarande produkter
  while (cartItems.firstChild) {
    cartItems.removeChild(cartItems.firstChild);
  }
  
  // Lägger till produkter
  cart.forEach(item => {
    let row = document.createElement("tr");
    let productCell = document.createElement("td");
    let priceCell = document.createElement("td");
    let quantityCell = document.createElement("td");
    let totalCell = document.createElement("td");
    
    productCell.innerText = item.product;
    priceCell.innerText = "SEK " + item.price;
    quantityCell.innerText = item.quantity;
    quantityCell.style.textAlign = "center";
    totalCell.innerText = "SEK " + item.price * item.quantity;
    
    row.appendChild(productCell);
    row.appendChild(priceCell);
    row.appendChild(quantityCell);
    row.appendChild(totalCell);
    
    cartItems.appendChild(row);
    
    total += item.price * item.quantity;
  });
  
  // uppdaterar hela kundvagnen
  cartTotal.innerText = "SEK " + total;
}

// tömmer hela kundvagnen
function emptyCart() {
  cart = [];
  updateCart();
}
