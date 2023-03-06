

let url = `https://della-311b1-default-rtdb.europe-west1.firebasedatabase.app/.json`;
getProducts();
let cartItems = JSON.parse(localStorage.getItem("cartItems"));
console.log(cartItems);

let itemsInCart = 0;
let completePurchase = document.getElementById("buyButton");
let homeBtn = document.getElementById("homeBtn");
let totalPriceElement = document.getElementById("totalPrice");

async function getProducts() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

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
    items.innerText = "no products in the cart";
    totalPrice.innerText = "";
    document.getElementById("itemCounter").innerText = "Your cart is emptied!";
    updateStock();
    localStorage.clear(cartItems);
    console.log(cartItems);
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

async function updateStock() {
  const patchUrl = `https://della-311b1-default-rtdb.europe-west1.firebasedatabase.app/.json`;

  const init = {
    method: "PUT",
    body: JSON.stringify(
      (shop = {
        0: {
          name: "skittles",
          price: 10,
          stock: 1,
          url: "https://www.skittles.com/sites/g/files/fnmzdf586/files/migrate-product-files/bam8afcev37jvz2mfpnk.png",
        },

        1: {
          name: "estrella",
          price: 10,
          stock: 1,
          url: "https://swedishfoodshop.com/pub/media/catalog/product/cache/577ee1db3aa78a031ff4355fb63b3264/e/s/estrellavinag.jpg",
        },

        2: {
          name: "marabou",
          price: 10,
          stock: 1,
          url: "https://static.mathem.se/shared/images/products/large/07622300589882_C1N1.jpeg",
        },

        3: {
          name: "stimerol",
          price: 10,
          stock: 1,
          url: "https://static.mathem.se/shared/images/products/large/05704592006116_c1n1.jpeg.jpg",
        },

        4: {
          name: "pepsi",
          price: 10,
          stock: 1,
          url: "https://res.cloudinary.com/coopsverige/images/e_sharpen,f_auto,fl_clip,fl_progressive,q_90,c_lpad,g_center,h_330,w_330/v1647879396/cloud/249826/Pepsi.jpg",
        },
      })
    ),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const response = await fetch(patchUrl, init);
  const data = await response.json();
}

