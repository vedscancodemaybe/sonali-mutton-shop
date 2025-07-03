function addToCart(name, pricePerKg, inputId) {
  const quantity = parseFloat(document.getElementById(inputId).value);
  if (isNaN(quantity) || quantity <= 0) {
    alert("Please enter a valid quantity.");
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = pricePerKg * quantity;

  cart.push({
    name,
    quantity,
    pricePerKg,
    total
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} (${quantity} Kg) added to cart.`);
}
