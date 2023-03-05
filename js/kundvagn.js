

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


// Function to calculate the total price of items in the cart
function calculateTotalPrice() {
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));
  let totalPrice = 0;

  if (cartItems !== null) {
    cartItems.forEach((item) => {
      totalPrice += item.price;
    });
  }
  return totalPrice;
}

// Example usage:
let total = calculateTotalPrice();
console.log(total);

//Complete the purchase
let completePurchase = document.getElementById("buyButton");
completePurchase.addEventListener("click", () => {
  document.getElementById('itemCounter').innerText = "Purchase completed successfully!";
  localStorage.clear(cartItems);
  console.log(cartItems);
});

console.log(cartItems);
