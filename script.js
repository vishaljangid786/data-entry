// Email validation
document.getElementById("email").addEventListener("input", function () {
  var email = this.value;
  var emailError = document.getElementById("email-error");

  // Simple email validation regex
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailPattern.test(email)) {
    emailError.classList.add("hidden");
  } else {
    emailError.classList.remove("hidden");
  }
});

// Phone validation (optional, basic check)
document.getElementById("phone").addEventListener("input", function () {
  var phone = this.value;
  var phoneError = document.getElementById("phone-error");

  // Simple phone validation (digits only, 10 to 15 digits)
  var phonePattern = /^[0-9]{10,15}$/;

  if (phonePattern.test(phone)) {
    phoneError.classList.add("hidden");
  } else {
    phoneError.classList.remove("hidden");
  }
});

// payment section
document
  .getElementById("payment-option")
  .addEventListener("change", function () {
    var selectedOption = this.value;

    if (selectedOption === "credit-card") {
      // Show credit card form (implement as needed)
      alert("Show credit card details form");
    } else if (selectedOption === "paypal") {
      // Show PayPal button/form (implement as needed)
      alert("Redirect to PayPal");
    }
  });

function updateDays() {
  const daySelect = document.getElementById("dob-day");
  const monthSelect = document.getElementById("dob-month");
  const yearSelect = document.getElementById("dob-year");

  const month = monthSelect.value;
  const year = yearSelect.value;
  const daysInMonth = getDaysInMonth(month, year);

  // Clear current options in Day select
  daySelect.innerHTML = '<option value="">Day</option>';

  // Add new options based on the selected month and year
  for (let i = 1; i <= daysInMonth; i++) {
    daySelect.innerHTML += `<option value="${i < 10 ? "0" + i : i}">${
      i < 10 ? "0" + i : i
    }</option>`;
  }
}

function getDaysInMonth(month, year) {
  // Check if February is in a leap year
  if (month == "02") {
    return new Date(year, 1, 29).getDate() === 29 ? 29 : 28;
  }
  // Months with 30 days
  if (["04", "06", "09", "11"].includes(month)) {
    return 30;
  }
  // Months with 31 days
  return 31;
}

