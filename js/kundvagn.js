let cartItems = JSON.parse(localStorage.getItem("cartItems"));
console.log(cartItems);
let itemsInCart = 0;
let completePurchase = document.getElementById("buyButton");
let homeBtn = document.getElementById("homeBtn");
let totalPriceElement = document.getElementById("totalPrice");

//Rendering divs for the products
let items = document.getElementById("items");

if (cartItems !== null) {
  cartItems.forEach((item) => {
    items.innerHTML += `
    <br>
    ${item.name}
    ${item.price}kr
    <img src="${item.url}"/>`;
  });
} else {
  console.log("inga items i carten");
}

let emptyButton = document.getElementById("emptyButton");
emptyButton.addEventListener("click", () => {
  if (cartItems == null) {
    document.getElementById("itemCounter").innerText =
      "Your cart is ALREADY empty!";
  } else {
    cartItems.forEach((item) => {
      console.log(item);
      item.stock = 1;
      console.log("uppdaterat stocken");
    });

    items.innerText = "no products in the cart";
    totalPrice.innerText = "";
    document.getElementById("itemCounter").innerText = "Your cart is emptied!";
    localStorage.clear(cartItems);
  }

  window.onpageshow = function (event) {
    if (event.persisted) {
      location.reload();
    }
  };
});

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
  // Update the DOM with the total price

  totalPriceElement.textContent = totalPrice.toFixed(2); // Format the price to 2 decimal places
  return totalPrice;
}

//Call the method
let total = calculateTotalPrice();

purchaseBtn.addEventListener("click", () => {
  if (cartItems === null) {
    document.getElementById("itemCounter").innerText = "Your cart is empty!";
    localStorage.clear(cartItems);
  } else {
    document.getElementById("itemCounter").innerText =
      "Purchase completed successfully!";
    localStorage.clear(cartItems);
  }

  window.onpageshow = function (event) {
    if (event.persisted) {
      location.reload();
    }
  };
});
