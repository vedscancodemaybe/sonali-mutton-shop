// --------------------------
// Form Toggle
// --------------------------
function toggleForms(type) {
  document.getElementById("signupBox").style.display = type === "signup" ? "block" : "none";
  document.getElementById("loginBox").style.display = type === "login" ? "block" : "none";

  // Reset OTP areas
  document.getElementById("signupOtpBox").style.display = "none";
  document.getElementById("loginOtpBox").style.display = "none";
}

// --------------------------
// Send OTP
// --------------------------
function sendOTP(context) {
  let method = context === "signup" ? document.getElementById("otpMethod").value : "email"; // signup uses selector
  let resendBtn = document.getElementById(context + "ResendBtn");
  let resendText = document.getElementById(context + "ResendText");

  // Dummy validation
  alert(`OTP sent to your ${method}. (Simulated)`);

  document.getElementById(context + "OtpBox").style.display = "block";
  resendBtn.disabled = true;

  let counter = 30;
  resendText.textContent = `Resend available in ${counter} seconds`;

  const interval = setInterval(() => {
    counter--;
    if (counter > 0) {
      resendText.textContent = `Resend available in ${counter} seconds`;
    } else {
      clearInterval(interval);
      resendText.textContent = "";
      resendBtn.disabled = false;
    }
  }, 1000);
}

// --------------------------
// Resend OTP
// --------------------------
function resendOTP(context) {
  sendOTP(context);
}

// --------------------------
// Verify OTP
// --------------------------
function verifyOTP(context) {
  const otpInput = document.getElementById(context + "OtpInput").value;
  if (otpInput.length === 6) {
    alert(`${context === "signup" ? "Sign-Up" : "Login"} Successful 🎉`);
    localStorage.setItem("rememberUser", "true");
    window.location.href = "index.html";
  } else {
    alert("Invalid OTP. Please try again.");
  }
}

// --------------------------
// Login via Password
// --------------------------
function loginWithPassword() {
  const credential = document.getElementById("loginCredential").value;
  const password = document.getElementById("loginPassword").value;

  if (credential && password) {
    // Simulate validation
    alert("Login successful via password ✅");
    if (document.getElementById("rememberMe").checked) {
      localStorage.setItem("rememberUser", "true");
    }
    window.location.href = "index.html";
  } else {
    alert("Please enter valid credentials.");
  }
}

// --------------------------
// Login Method Toggle
// --------------------------
function handleLoginMethodChange() {
  const method = document.getElementById("loginMethod").value;
  const otpBox = document.getElementById("otpLoginFields");
  const passBox = document.getElementById("passwordLoginFields");

  if (method === "password") {
    otpBox.style.display = "none";
    passBox.style.display = "block";
  } else {
    otpBox.style.display = "block";
    passBox.style.display = "none";
  }
}

// --------------------------
// Auto-show remembered users (optional)
// --------------------------
window.onload = function () {
  if (localStorage.getItem("rememberUser") === "true") {
    window.location.href = "index.html";
  }
};
