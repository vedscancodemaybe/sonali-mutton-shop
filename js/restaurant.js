const typeRadios = document.getElementsByName("type");
const unitBox = document.getElementById("unitBox");
const customBox = document.getElementById("customBox");
const totalAmt = document.getElementById("totalAmt");
const addToCartBtn = document.getElementById("addToCartBtn");

const PRICE_PER_KG = 549;

function updateView() {
  const selected = document.querySelector('input[name="type"]:checked').value;
  unitBox.style.display = selected === "custom" ? "none" : "block";
  customBox.style.display = selected === "custom" ? "block" : "none";
  calculateTotal();
}

function calculateTotal() {
  const selected = document.querySelector('input[name="type"]:checked').value;
  let weight = 0;

  if (selected === "whole") {
    weight = 20 * parseInt(document.getElementById("unitCount").value || 1);
  } else if (selected === "half") {
    weight = 10 * parseInt(document.getElementById("unitCount").value || 1);
  } else {
    weight = parseFloat(document.getElementById("customKg").value || 0);
  }

  totalAmt.innerText = (weight * PRICE_PER_KG).toFixed(2);
}

addToCartBtn.onclick = () => {
  const selected = document.querySelector('input[name="type"]:checked').value;
  const instructions = document.getElementById("instructions").value;
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  let qty = 0;
  let name = "";
  if (selected === "whole") {
    const count = parseInt(document.getElementById("unitCount").value || 1);
    qty = count * 20;
    name = "Whole Lamb (Restaurant Pack)";
  } else if (selected === "half") {
    const count = parseInt(document.getElementById("unitCount").value || 1);
    qty = count * 10;
    name = "Half Lamb (Restaurant Pack)";
  } else {
    qty = parseFloat(document.getElementById("customKg").value || 10);
    if (qty < 10) return alert("Minimum 10 KG required");
    name = "Custom Bulk Order (Restaurant Pack)";
  }

  cart.push({
    name,
    pricePerKg: PRICE_PER_KG,
    quantity: qty,
    total: qty * PRICE_PER_KG,
    instructions
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart ✅");
  window.location.href = "cart.html";
};

document.querySelectorAll('input[name="type"]').forEach(radio =>
  radio.addEventListener("change", updateView)
);
document.getElementById("unitCount").addEventListener("input", calculateTotal);
document.getElementById("customKg").addEventListener("input", calculateTotal);

updateView();
