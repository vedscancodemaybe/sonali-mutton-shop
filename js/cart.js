const cartContainer = document.getElementById("cartContainer");
const totalAmount = document.getElementById("totalAmount");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartUI() {
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty 😞</p>";
    totalAmount.innerText = "0";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += parseFloat(item.total);

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    let innerHTML = `
      <div class="cart-left">
        <h3>${item.name}</h3>
        <p>₹${item.pricePerKg} × ${item.quantity} Kg</p>
    `;

    if (item.details && item.details.length > 0) {
      innerHTML += `<ul class="cut-details">`;
      item.details.forEach(cut => {
        innerHTML += `<li>${cut.name}: ${cut.quantity}g</li>`;
      });
      innerHTML += `</ul>`;
    }

    innerHTML += `
      </div>
      <div class="cart-right">
        <span>₹${parseFloat(item.total).toFixed(2)}</span>
        <button onclick="removeItem(${index})" class="remove-btn">❌</button>
      </div>
    `;

    cartItem.innerHTML = innerHTML;
    cartContainer.appendChild(cartItem);
  });

  totalAmount.innerText = total.toFixed(2);
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

function clearCart() {
  const confirmClear = confirm("Are you sure you want to clear your cart?");
  if (!confirmClear) return;

  localStorage.removeItem("cart");
  cart = [];
  updateCartUI();
}



updateCartUI();
