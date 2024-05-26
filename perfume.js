document.getElementById("searchInput").addEventListener("input", function () {
  var filter = this.value.toUpperCase();
  var products = document.querySelectorAll(".product");

  products.forEach(function (product) {
    var productName = product.textContent.toUpperCase();
    if (productName.indexOf(filter) > -1) {
      product.style.display = "";
    } else {
      product.style.display = "none";
    }
  });
});

const searchInput = document.getElementById("searchInput");
const suggestionList = document.getElementById("suggestionList");
const productList = document.getElementById("productList");

searchInput.addEventListener("input", function () {
  const filter = this.value.toUpperCase();
  let suggestions = "";

  if (filter) {
    // Filter products for suggestions
    const filteredProducts = Array.from(productList.children).filter(
      (product) => {
        return product.textContent.toUpperCase().includes(filter);
      }
    );

    // Populate suggestion list
    suggestions = filteredProducts
      .map((product) => {
        return `<li class="suggestion">${product.textContent}</li>`;
      })
      .join("");
  }

  suggestionList.innerHTML = suggestions;

  // Handle suggestion click
  const suggestionItems = document.querySelectorAll(".suggestion");
  suggestionItems.forEach((suggestion) => {
    suggestion.addEventListener("click", function () {
      searchInput.value = this.textContent;
      suggestionList.innerHTML = "";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const seeMoreButtons = document.querySelectorAll(".see-more h3");

  seeMoreButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const contentDiv = this.parentNode.querySelector("div");
      const productLi = this.closest(".product");

      if (contentDiv.style.display === "none") {
        contentDiv.style.display = "flex";
        productLi.style.height = "fit-content";
      } else {
        contentDiv.style.display = "none";
        productLi.style.height = "auto"; // Revert to auto height when hiding
      }
    });
  });
});


document
      .getElementById("backbutton")
      .addEventListener("click", function () {
        window.location.href = "./index.html"; // Make sure index.html is in the same directory
      });