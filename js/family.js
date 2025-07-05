const sets = [
  {
    name: "Intestine Set",
    weight: 1,
    items: ["Small Intestine", "Large Intestine", "Fatty Bits"],
    desc: "Perfect for rich traditional dishes with flavorful fats.",
    img: "images/intestine.png"
  },
  {
    name: "Loin Set",
    weight: 1.5,
    items: ["Loin Chops", "Rolled Loin", "Loin Flank"],
    desc: "Tender and juicy — ideal for pan fry or BBQ nights.",
    img: "images/loin.png"
  },
  {
    name: "Shoulder Set",
    weight: 1.5,
    items: ["Shoulder", "Shoulder Chops", "Neck"],
    desc: "Balanced meat-to-bone ratio — best for gravies.",
    img: "images/shoulder.png"
  },
  {
    name: "Liver Combo",
    weight: 1,
    items: ["Lamb Liver", "Kidney", "Heart"],
    desc: "Iron-rich organ meats — perfect for healthy meals.",
    img: "images/liver.png"
  },
  {
    name: "Stew Special",
    weight: 2,
    items: ["Stew Meat", "Shank", "Bone Pieces"],
    desc: "Slow-cook ready combo for winter stews or curries.",
    img: "images/stew.png"
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
      <img src="${set.img}" alt="${set.name}">
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

  if (isNaN(net) || net < 2) {
    weightStatus.textContent = "Minimum total must be 2 KG.";
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
        name: `${s.name} (Family Pack)`,
        pricePerKg: 649,
        quantity: totalWeight,
        total: totalWeight * 649
      });
    }
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added Family Pack items to cart ✅");
  window.location.href = "cart.html";
};


document.addEventListener("input", updateSummary);
renderSets();
