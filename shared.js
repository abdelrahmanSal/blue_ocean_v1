function toggleCart() {
  const cartModalOverlay = document.getElementById("cartModalOverlay");
  cartModalOverlay.style.display =
    cartModalOverlay.style.display === "none" ? "block" : "none";
}

// Function to update the cart count
function updateCartCount(count) {
  const cartCount = document.querySelector(".cart-count");
  cartCount.textContent = count;
}

// Function to clear the cart
function clearCart() {
  localStorage.removeItem("cartProducts"); // Remove cart items from localStorage
  updateCartCount(0); // Update the cart count display to zero
}

// Function to add a product to the cart
function addToCart(product, price) {
  // Increment the cart count
  const cartCount = parseInt(document.querySelector(".cart-count").textContent);
  updateCartCount(cartCount + 1);

  // Add the product to the cart in localStorage
  let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
  cartProducts.push({ product, price });
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
}

// Retrieve cart items from localStorage
let cartItems = JSON.parse(localStorage.getItem("cartProducts")) || [];

// const baseURL = './bottle/body-care/img/'; // Adjust this based on your image paths

// Display cart items and update the total
const cartContainer = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");

function updateCart() {
  let total = 0;
  cartContainer.innerHTML = ""; // Clear previous items

  cartItems.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.innerHTML = `
      <p>${item.product}</p>
      <p>${item.price} EGP</p>
    `;
    cartContainer.appendChild(itemElement);
    total += item.price;
  });

  cartTotalElement.textContent = `Total: ${total} EGP`;
}

// Function to clear the cart
function clearCart() {
  localStorage.removeItem("cartProducts"); // Remove cart items from localStorage
  cartItems = []; // Clear cart items array
  updateCart(); // Update the cart display
}

updateCart(); // Call the function to initially update the cart
