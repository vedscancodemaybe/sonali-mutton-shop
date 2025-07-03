// ===== IMAGE SLIDER =====
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.style.opacity = '0';
  });
  slides[index].classList.add('active');
  slides[index].style.opacity = '1';
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Initial display
if (slides.length > 0) {
  showSlide(currentSlide);
  setInterval(nextSlide, 4000); // Change every 4 seconds
}

// ===== SCROLL FADE/SLIDE ANIMATION =====
const fadeElements = document.querySelectorAll('.fade-scroll');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
});

fadeElements.forEach(el => fadeObserver.observe(el));

// ===== LANGUAGE SWITCHING (delegates to lang.js) =====
const languageSwitcher = document.getElementById("languageSwitcher");
if (languageSwitcher) {
  languageSwitcher.addEventListener("change", function () {
    const lang = this.value;
    if (typeof applyLanguage === "function") {
      applyLanguage(lang); // Defined in lang.js
    }
  });
}

// ===== LOGOUT FUNCTION =====
function logout() {
  const confirmLogout = confirm("Are you sure you want to logout?");
  if (confirmLogout) {
    localStorage.removeItem("rememberUser");
    localStorage.removeItem("cart"); // Optional: Clear cart too
    window.location.href = "auth.html";
  }
}

// ===== OPTIONAL: Scroll to About Section from Header =====
const navAbout = document.getElementById("navAbout");
if (navAbout) {
  navAbout.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  });
}
