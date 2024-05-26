const cartContainer = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

function updateCart() {
  let total = 0;
  cartContainer.innerHTML = "";

  cartProducts.forEach((item) => {
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

function clearCart() {
  localStorage.removeItem("cartProducts");
  cartProducts = [];
  updateCart();
}

document.addEventListener("DOMContentLoaded", updateCart);

document
  .getElementById("openPageButton")
  .addEventListener("click", function () {
    window.location.href = "./index.html";
  });

document.getElementById("send").addEventListener("click", function () {
  document.getElementById("popup").style.display = "flex";
});

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const address = document.getElementById("address").value;
    const notes = document.getElementById("notes").value;

    if (name && number && address) {
      alert("Your order is done and we will chat with you in 24 hours!");
      document.getElementById("popup").style.display = "none";

      // Prepare message
      let message = `Name: ${name}\nPhone Number: ${number}\nAddress: ${address}\nNotes: ${notes}\n\nProducts:\n`;
      cartProducts.forEach((item) => {
        message += `${item.product} - ${item.price} EGP\n`;
      });
      message += `\nTotal: ${cartTotalElement.textContent}`;

      // Send message to Telegram
      const botToken = "7167739580:AAEyo62W9zghyPQCKVGkNn1nF0BcggEuYV4";
      const chatId = "5908974662";
      const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

      fetch(telegramApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.ok) {
            console.log("Message sent to Telegram:", data);
          } else {
            console.error("Error sending message to Telegram:", data);
          }
        })
        .catch((error) => {
          console.error("Error sending message to Telegram:", error);
        });
    } else {
      alert("Please fill in all required fields.");
    }
  });
