  document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartSummary = document.getElementById("cartSummary");
  const finalTotal = document.getElementById("finalTotal");
  const deliveryCharge = document.getElementById("deliveryCharge");
  const distanceInput = document.getElementById("distance");

  let subtotal = 0;

  // Render cart items with details
  if (cart.length === 0) {
    cartSummary.innerHTML = "<p>Your cart is empty 😞</p>";
  } else {
    cart.forEach(item => {
      const itemTotal = parseFloat(item.total || 0);
      subtotal += itemTotal;

      const div = document.createElement("div");
      div.className = "checkout-item";

      let cutDetails = "";
      if (item.details && item.details.length > 0) {
        cutDetails = '<ul class="cut-breakdown">';
        item.details.forEach(cut => {
          cutDetails += `<li>${cut.name}: ${cut.quantity}g</li>`;
        });
        cutDetails += '</ul>';
      }

      div.innerHTML = `
        <strong>${item.name}</strong><br>
        ₹${item.pricePerKg} × ${item.quantity} Kg = ₹${itemTotal.toFixed(2)}
        ${cutDetails}
      `;

      cartSummary.appendChild(div);
    });
  }

  // Update delivery and grand total
  function updateTotal() {
    const distance = parseFloat(distanceInput.value) || 0;
    const delivery = Math.max(30, Math.min(10 * distance, 200)); // ₹10/km capped at ₹200
    deliveryCharge.textContent = delivery.toFixed(0);
    finalTotal.textContent = (subtotal + delivery).toFixed(2);
  }

  distanceInput.addEventListener("input", updateTotal);
  updateTotal();

  // Checkout form submission
  document.getElementById("checkoutForm").addEventListener("submit", e => {
    e.preventDefault();

    const altPhone = document.getElementById("alternatePhone").value.trim();
    const phoneError = document.getElementById("phoneError");
    const paymentMethod = document.getElementById("paymentMethod").value;
    const delivery = parseFloat(deliveryCharge.textContent);
    const totalAmount = (subtotal + delivery).toFixed(2);

    // Validate phone
    if (altPhone && !/^\\+?91[6-9][0-9]{9}$/.test(altPhone)) {
      phoneError.textContent = "Enter a valid 10-digit Indian mobile number.";
      return;
    } else {
      phoneError.textContent = "";
    }

    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    // UPI QR flow
    if (paymentMethod === "UPI") {
      const upi = "vedant8142@okhdfc";
      const upiURL = `upi://pay?pa=${upi}&pn=Sonali+Mutton+Shop&am=${totalAmount}&cu=INR`;
      const qr = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(upiURL)}&size=200x200`;

      const win = window.open("", "UPIPayment");
      win.document.write(`
        <h2>Scan this QR to Pay</h2>
        <img src="${qr}" />
        <p><strong>Amount:</strong> ₹${totalAmount}</p>
        <p><strong>To:</strong> Sonali Mutton Shop (${upi})</p>
        <p>After payment, click below:</p>
        <button onclick="window.opener.confirmUPIPayment(); window.close();">I've Paid</button>
      `);
      return;
    }

    // Default success
    alert("Order Placed Successfully! Thank you for choosing Sonali Mutton Shop 🐑");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
  });

  // Called from popup
  window.confirmUPIPayment = function () {
    alert("Payment Confirmed! Thank you for shopping with us 🐑");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
  };
});