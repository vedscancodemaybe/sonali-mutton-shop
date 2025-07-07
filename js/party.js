const sets = [
  {
    name: "BBQ Lover’s Pack",
    weight: 1.5,
    items: ["Boneless Cubes", "Rib Chops", "Loin Chops", "Shank Slices", "Fatty Shoulder Bits"],
    desc: "Perfect for tandoori and grilled BBQ parties.",
    img: "images/party-img/party-bbq.jpg"
  },
  {
    name: "Desi Curry Combo",
    weight: 2,
    items: ["Shoulder", "Neck", "Stew Meat", "Shank", "Bone Pieces", "Small Intestine"],
    desc: "Slow-cook rich curries for gatherings.",
    img: "images/party-img/party-curry.jpg"
  },
  {
    name: "Kids & Family Friendly",
    weight: 1,
    items: ["Boneless", "Rolled Loin", "Rib Chops", "Sirloin", "Fatless Cuts"],
    desc: "Soft, spice-friendly and easy to eat.",
    img: "images/party-img/party-family.jpg"
  },
  {
    name: "Organ Feast Set",
    weight: 1.5,
    items: ["Liver", "Kidney", "Brain", "Heart", "Bone Marrow"],
    desc: "Iron-rich delicacies for organ meat lovers.",
    img: "images/party-img/party-organs.jpg"
  },
  {
    name: "Ultimate Mutton Experience",
    weight: 3,
    items: ["Loin Chops", "Rib Chops", "Boneless", "Liver", "Shoulder", "Neck", "Stew Meat", "Kidneys", "Rack of Lamb"],
    desc: "Premium grand feast pack for large parties.",
    img: "images/party-img/party-ultimate.jpg"
  }
];

const setGrid = document.getElementById("setGrid");
const weightDisplay = document.getElementById("selectedWeight");
const weightStatus = document.getElementById("weightStatus");
const addBtn = document.getElementById("addToCartBtn");
const netWeightInput = document.getElementById("netWeight");
const selectedQty = Array(sets.length).fill(0);

function renderSets() {
  sets.forEach((set, i) => {
    const card = document.createElement("div");
    card.className = "set-card";
    card.innerHTML = `
      <img src="${set.img}" alt="${set.name}" style="width:100%; border-radius:10px; margin-bottom:10px;">
      <h3>${set.name}</h3>
      <ul>${set.items.map(item => `<li>${item}</li>`).join('')}</ul>
      <p>"${set.desc}"</p>
      <p><strong>Weight per Set:</strong> ${set.weight} KG</p>
      <div class="qty-selector">
        <button onclick="updateQty(${i}, -1)">-</button>
        <input type="text" id="qty-${i}" value="0" readonly>
        <button onclick="updateQty(${i}, 1)">+</button>
      </div>
    `;
    setGrid.appendChild(card);
  });
}

function updateQty(index, delta) {
  selectedQty[index] = Math.max(0, selectedQty[index] + delta);
  document.getElementById(`qty-${index}`).value = selectedQty[index];
  updateSummary();
}

function updateSummary() {
  const net = parseFloat(netWeightInput.value);
  let total = 0;
  sets.forEach((s, i) => {
    total += s.weight * selectedQty[i];
  });
  weightDisplay.textContent = total.toFixed(1);
  if (isNaN(net) || net < 5) {
    weightStatus.textContent = "Minimum total must be 5 KG.";
    weightStatus.style.color = "red";
    addBtn.disabled = true;
    return;
  }
  if (total === net) {
    weightStatus.textContent = "Perfect match! Ready to add.";
    weightStatus.style.color = "green";
    addBtn.disabled = false;
  } else if (total > net) {
    weightStatus.textContent = "You've exceeded the desired weight.";
    weightStatus.style.color = "red";
    addBtn.disabled = true;
  } else {
    weightStatus.textContent = `You have ${(net - total).toFixed(1)} KG remaining.`;
    weightStatus.style.color = "orange";
    addBtn.disabled = true;
  }
}

addBtn.onclick = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  sets.forEach((s, i) => {
    if (selectedQty[i] > 0) {
      const qty = selectedQty[i];
      const totalWeight = s.weight * qty;
      cart.push({
        name: `${s.name} (Party Pack)`,
        pricePerKg: 599,
        quantity: totalWeight,
        total: totalWeight * 599
      });
    }
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Party Pack items added to cart ✅");
  window.location.href = "cart.html";
};

document.addEventListener("input", updateSummary);
renderSets();
