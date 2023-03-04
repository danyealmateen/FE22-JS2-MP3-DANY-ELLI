let cartItems = JSON.parse(localStorage.getItem("cartItems"));
let itemsInCart = 0;


console.log(cartItems);

let emptyButton = document.getElementById("emptyButton");
emptyButton.addEventListener("click", () => {
  document.getElementById('itemCounter').innerText = "Items in cart: "+ 0;
  localStorage.clear(cartItems);
  console.log(cartItems);
});

console.log(cartItems);

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

async function getProducts() {
  const response = await fetch(url);
  const data = await response.json();
  const shoppingCart = document.getElementById("shoppingCart");
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));
  let totalPrice = 0;

  if (cartItems !== null && cartItems.length > 0) {
    cartItems.forEach((item) => {
      const product = data.find((p) => p.name === item.name);
      if (product !== undefined) {
        const itemPrice = product.price * item.quantity;
        totalPrice += itemPrice;
        const itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");
        itemElement.setAttribute("data-product", product.name);
        itemElement.setAttribute("data-price", product.price);
        itemElement.setAttribute("data-quantity", item.quantity);
        itemElement.innerHTML = `
          <p>${product.name} x ${item.quantity} - $${itemPrice}</p>
          <button class="remove-item-btn">Remove</button>
        `;
        shoppingCart.appendChild(itemElement);
      }
    });
  }

  const totalElement = document.createElement("p");
  totalElement.innerHTML = `Total: $${totalPrice}`;
  shoppingCart.appendChild(totalElement);
}

