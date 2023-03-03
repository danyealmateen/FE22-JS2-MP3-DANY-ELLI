//deklarerar kundvagn
let cart = [];
      
//lägger till produkter i kundvagnen
function addToCart(product, price, quantity) {
  let item = { product, price, quantity };
  cart.push(item);
  updateCart();
}

// Update shopping cart table and total
function updateCart() {
  let cartItems = document.getElementById("cart-items");
  let cartTotal = document.getElementById("cart-total");
  let total = 0;
  
  // Clear current cart items
  while (cartItems.firstChild) {
    cartItems.removeChild(cartItems.firstChild);
  }
  
  // Add updated cart items
  cart.forEach(item => {
    let row = document.createElement("tr");
    let productCell = document.createElement("td");
    let priceCell = document.createElement("td");
    let quantityCell = document.createElement("td");
    let totalCell = document.createElement("td");
    
    productCell.textContent = item.product;
    priceCell.textContent = "$" + item.price;
    quantityCell.textContent = item.quantity;
    totalCell.textContent = "$" + item.price * item.quantity;
    
    row.appendChild(productCell);
    row.appendChild(priceCell);
    row.appendChild(quantityCell);
    row.appendChild(totalCell);
    
    cartItems.appendChild(row);
    
    total += item.price * item.quantity;
  });
  
  // Update cart total
  cartTotal.textContent = "$" + total;
}

// Empty shopping cart
function emptyCart() {
  cart = [];
  updateCart();
}
