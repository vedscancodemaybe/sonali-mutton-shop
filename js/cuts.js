const cuts = [
  {
    name: "Ground Lamb",
    desc: "Great for kebabs, meatballs, or burgers.",
    hiName: "किमामी मटन",
    hiDesc: "कबाब, मीटबॉल या बर्गर के लिए बेहतरीन।",
    mrName: "खिमा मटण",
    mrDesc: "कबाब, बर्गर, कोफ्त्यासाठी सर्वोत्तम.",
    image: "images/cuts/Ground Lamb.png"
  },
  {
    name: "Lamb Breast",
    desc: "Fatty and flavorful, ideal for roasts.",
    hiName: "भेड़ की छाती",
    hiDesc: "फैटी और स्वादिष्ट, रोस्ट के लिए आदर्श।",
    mrName: "मेंढीची छाती",
    mrDesc: "चरबीदार आणि स्वादिष्ट, भाजण्यासाठी उत्तम.",
    image: "images/cuts/Lamb Breast.png"
  },
  {
    name: "Lamb Cutlets",
    desc: "Usually from loin, tender and juicy.",
    hiName: "भेड़ कटलेट",
    hiDesc: "कोमल और रसदार, सामान्यतः लोइन से।",
    mrName: "मेंढीचे कटलेट",
    mrDesc: "लोइन पासून, कोवळं आणि रसाळ.",
    image: "images/cuts/Lamb Cutlet.png"
  },
  {
    name: "Lamb Flank",
    desc: "Flavorful underside cut, best grilled or braised.",
    hiName: "भेड़ फ्लैंक",
    hiDesc: "नीचे का हिस्सा, ग्रिल या उबालने के लिए श्रेष्ठ।",
    mrName: "मेंढीचा फ्लँक",
    mrDesc: "खालचा भाग, ग्रिल किंवा उकडण्यासाठी उत्तम.",
    image: "images/cuts/Lamb Flank.png"
  },
  {
    name: "Lamb Intestines (Large)",
    desc: "Fatty and flavorful, best slow-roasted or fried.",
    hiName: "भेड़ की बड़ी अंतड़ियाँ",
    hiDesc: "चरबीदार और स्वादिष्ट, धीमी भुनी या तली हुई।",
    mrName: "मोठे आतडे",
    mrDesc: "चरबीदार व चविष्ट, हळू भाजण्यासाठी योग्य.",
    image: "images/cuts/Lamb Large Intestine.png"
  },
  {
    name: "Lamb Liver",
    desc: "Rich in iron and nutrients, best for curry preparations.",
    hiName: "भेड़ का जिगर",
    hiDesc: "लोहा और पोषक तत्वों से भरपूर, करी के लिए उत्तम।",
    mrName: "मेंढीचा काळज",
    mrDesc: "लोहतत्त्व व पोषकद्रव्यांनी भरलेलं, रस्स्यासाठी योग्य.",
    image: "images/cuts/Lamb Liver.png"
  },
  {
    name: "Lamb Loin Chops",
    desc: "Tender and lean, great grilled or pan-fried.",
    hiName: "कमर का मांस चॉप्स",
    hiDesc: "कोमल और दुबला, ग्रिल या फ्राई के लिए अच्छा।",
    mrName: "बोकडी पाठ चॉप्स",
    mrDesc: "कोवळं आणि बिनचरबीचं, ग्रिल/तळण्यासाठी उत्तम.",
    image: "images/cuts/Lamb Loin Chops.png"
  },
  {
    name: "Lamb Loin",
    desc: "Most tender cut, great for roasts.",
    hiName: "कमर का मांस",
    hiDesc: "सबसे कोमल हिस्सा, रोस्टिंग के लिए उत्तम।",
    mrName: "बोकडी पाठ",
    mrDesc: "सर्वात कोवळं, भाजण्यासाठी आदर्श.",
    image: "images/cuts/Lamb Loin.png"
  },
  {
    name: "Lamb Neck",
    desc: "Flavorful and tough, perfect for stews.",
    hiName: "भेड़ की गरदन",
    hiDesc: "स्वादिष्ट लेकिन सख्त, स्टू के लिए उत्तम।",
    mrName: "मेंढीचा माने",
    mrDesc: "चविष्ट पण थोडा कडक, स्टूसाठी योग्य.",
    image: "images/cuts/Lamb Neck.png"
  },
  {
    name: "Lamb Rack",
    desc: "Perfect for oven roasting.",
    hiName: "भेड़ रैक",
    hiDesc: "ओवन में रोस्ट के लिए आदर्श।",
    mrName: "मेंढीचा रॅक",
    mrDesc: "ओव्हनसाठी परफेक्ट.",
    image: "images/cuts/Lamb Rack.png"
  },
  {
    name: "Lamb Rib Chops",
    desc: "Tender and flavorful, best grilled or pan-fried.",
    hiName: "भेड़ रिब चॉप्स",
    hiDesc: "नरम और स्वादिष्ट, ग्रिलिंग के लिए उत्तम।",
    mrName: "मेंढीचे रिब चॉप्स",
    mrDesc: "कोवळं आणि खमंग, ग्रिल किंवा तळण्यासाठी.",
    image: "images/cuts/Lamb Rib Chops.png"
  },
  {
    name: "Lamb Ribs",
    desc: "Tender and rich, premium cut.",
    hiName: "भेड़ की पसलियाँ",
    hiDesc: "कोमल और स्वादिष्ट, महँगा हिस्सा।",
    mrName: "मेंढीच्या बरगड्या",
    mrDesc: "कोवळ्या व श्रीमंत चव, महागडा भाग.",
    image: "images/cuts/Lamb Ribs.png"
  },
  {
    name: "Rolled Loin",
    desc: "Whole loin rolled and tied, excellent for roasting.",
    hiName: "रोल्ड लोइन",
    hiDesc: "लोइन को रोल करके बांधा गया, रोस्टिंग के लिए अच्छा।",
    mrName: "गुंडाळलेला लोइन",
    mrDesc: "लोइन गुंडाळून शिजवायला परिपूर्ण.",
    image: "images/cuts/Lamb Rolled  Loin.png"
  },
  {
    name: "Lamb Shank",
    desc: "Slow-cooked leg meat, hearty and savory.",
    hiName: "भेड़ का शैंक",
    hiDesc: "धीमे से पका हुआ टांग का हिस्सा, भरपूर स्वाद।",
    mrName: "मेंढीचा शँक",
    mrDesc: "हळू शिजवलेलं पायाचं मांस, चवदार.",
    image: "images/cuts/Lamb Shank.png"
  },
  {
    name: "Lamb Shoulder Chops",
    desc: "Versatile and rich in flavor.",
    hiName: "शोल्डर चॉप्स",
    hiDesc: "स्वादिष्ट और कई प्रकार से उपयोगी।",
    mrName: "खांद्याचे चॉप्स",
    mrDesc: "बहुउपयोगी आणि स्वादिष्ट.",
    image: "images/cuts/Lamb Shoulder Chops.png"
  },
  {
    name: "Lamb Shoulder",
    desc: "Lean, juicy, perfect for moist heat cooking.",
    hiName: "भेड़ का शोल्डर",
    hiDesc: "दुबला, रसदार, भाप में पकाने के लिए उत्तम।",
    mrName: "मेंढीचा खांदा",
    mrDesc: "बिनचरबीचं आणि रसाळ, आर्द्रतामय उकडासाठी योग्य.",
    image: "images/cuts/Lamb Shoulder.png"
  },
  {
    name: "Lamb Sirloin",
    desc: "Tender leg cut, ideal for chops or steaks.",
    hiName: "भेड़ का सिरलॉइन",
    hiDesc: "कोमल टांग का हिस्सा, चॉप्स/स्टेक्स के लिए।",
    mrName: "मेंढीचा सिरलॉइन",
    mrDesc: "कोवळं पायाचं मांस, चॉप्ससाठी सर्वोत्तम.",
    image: "images/cuts/Lamb Sirloin.png"
  },
  {
    name: "Lamb Intestines (Small)",
    desc: "Chewy and rich, often slow-cooked in stews.",
    hiName: "भेड़ की छोटी अंतड़ियाँ",
    hiDesc: "चबाने योग्य, स्टू के लिए उत्तम।",
    mrName: "लहान आतडे",
    mrDesc: "चविष्ट व थोडंसं चिवट, स्टूसाठी उपयुक्त.",
    image: "images/cuts/Lamb Small Intestine.png"
  },
  {
    name: "Stew Meat",
    desc: "Mixed lamb parts, ideal for stews.",
    hiName: "भेड़ स्टू मीट",
    hiDesc: "विभिन्न भागों का मिश्रण, स्टू के लिए उपयुक्त।",
    mrName: "स्टू मटण",
    mrDesc: "मिश्रित भागांचे मांस, रस्स्यांसाठी योग्य.",
    image: "images/cuts/Lamb Stew Meat.png"
  },
  {
    name: "Lamb Chops",
    desc: "Juicy, tender, great for pan-searing or grilling.",
    hiName: "भेड़ चॉप्स",
    hiDesc: "रसदार और कोमल, तवे पर सेंकने के लिए बढ़िया।",
    mrName: "मेंढीचे चॉप्स",
    mrDesc: "रसाळ आणि कोवळं, ग्रिलसाठी उत्तम.",
    image: "images/cuts/Lamb Traditional Chops.png"
  },
  {
    name: "Leg of Lamb",
    desc: "Large, lean, flavorful. Great for roasting or braising.",
    hiName: "भेड़ की टांग",
    hiDesc: "बड़ा, दुबला और स्वादिष्ट, रोस्टिंग के लिए बेहतरीन।",
    mrName: "मेंढीचा पाय",
    mrDesc: "मोठा आणि बिनचरबीचा, भाजण्यासाठी किंवा रस्स्यासाठी.",
    image: "images/cuts/Leg of Lamb.png"
  }
];

// Render cards
const container = document.getElementById("cutsContainer");
const netWeightInput = document.getElementById("netWeight");
const totalDisplay = document.getElementById("totalSelected");
const statusText = document.getElementById("weightStatus");
const addBtn = document.getElementById("addToCartBtn");

cuts.forEach(cut => {
  const div = document.createElement("div");
  div.classList.add("cut-card");

  div.innerHTML = `
    <img src="${cut.image}" alt="${cut.name}" class="cut-img" onerror="this.src='images/cuts/placeholder.jpg'">
    <h3 class="cut-name">${cut.name}</h3>
    <p class="cut-desc"><em>"${cut.desc}"</em></p>
    <label>Quantity (g):</label>
    <input type="number" class="cutQty" data-cut="${cut.name}" min="0" step="50" value="0">
  `;

  container.appendChild(div);
});

// Weight validation
function updateTotal() {
  const netWeight = parseInt(netWeightInput.value);
  const cutInputs = document.querySelectorAll(".cutQty");

  let total = 0;
  cutInputs.forEach(input => {
    total += parseInt(input.value || 0);
  });

  totalDisplay.textContent = total;

  if (!netWeight || netWeight < 500) {
    statusText.textContent = "Net weight must be at least 500g.";
    statusText.style.color = "red";
    addBtn.disabled = true;
    return;
  }

  if (total === netWeight) {
    statusText.textContent = "Perfect! You're ready to add to cart.";
    statusText.style.color = "green";
    addBtn.disabled = false;
  } else if (total > netWeight) {
    statusText.textContent = "You've selected more than the desired weight.";
    statusText.style.color = "red";
    addBtn.disabled = true;
  } else {
    statusText.textContent = `You have ${netWeight - total}g remaining.`;
    statusText.style.color = "orange";
    addBtn.disabled = true;
  }
}

document.addEventListener("input", updateTotal);

// Language switch
document.getElementById("languageSwitcher")?.addEventListener("change", function () {
  const selectedLang = this.value;
  const nameEls = document.querySelectorAll(".cut-name");
  const descEls = document.querySelectorAll(".cut-desc");

  cuts.forEach((cut, index) => {
    if (selectedLang === "hi") {
      nameEls[index].textContent = cut.hiName || cut.name;
      descEls[index].innerHTML = `<em>"${cut.hiDesc || cut.desc}"</em>`;
    } else if (selectedLang === "mr") {
      nameEls[index].textContent = cut.mrName || cut.name;
      descEls[index].innerHTML = `<em>"${cut.mrDesc || cut.desc}"</em>`;
    } else {
      nameEls[index].textContent = cut.name;
      descEls[index].innerHTML = `<em>"${cut.desc}"</em>`;
    }
  });
});

addBtn.addEventListener("click", () => {
  if (addBtn.disabled) return; // prevent double add

  const netWeight = parseInt(netWeightInput.value);
  const cutInputs = document.querySelectorAll(".cutQty");

  let selectedCuts = [];

  cutInputs.forEach(input => {
    const qty = parseInt(input.value || 0);
    if (qty > 0) {
      selectedCuts.push({
        name: input.dataset.cut,
        quantity: qty
      });
    }
  });

  // Remove previous duplicate of same pack (optional)
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const isDuplicate = cart.some(item => JSON.stringify(item.details) === JSON.stringify(selectedCuts));
  if (isDuplicate) {
    alert("This combination is already in your cart.");
    return;
  }

  const customPack = {
    name: "Customized Individual Pack",
    quantity: netWeight / 1000,
    pricePerKg: 699,
    total: parseFloat((699 * (netWeight / 1000)).toFixed(2)),
    details: selectedCuts
  };

  cart.push(customPack);
  localStorage.setItem("cart", JSON.stringify(cart));

  // Prevent accidental double-click
  addBtn.disabled = true;

  // Redirect
  window.location.href = "cart.html";
});
