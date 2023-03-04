let cartItems = JSON.parse(localStorage.getItem("cartItems"));
console.log(cartItems);

let emptyButton = document.getElementById("emptyButton");
emptyButton.addEventListener("click", () => {
  localStorage.clear(cartItems);
  console.log(cartItems);
});

console.log(cartItems);
