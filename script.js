// Go from Welcome Page to Main Page
function goToHome() {
  const welcomePage = document.getElementById("welcomePage");
  const mainPage = document.getElementById("mainPage");
  
  // Hide welcome page by sliding up
  welcomePage.classList.add("hidden");
  
  // Show main page by sliding up from bottom
  mainPage.classList.add("active");
  
  // Initialize with breakfast menu
  const breakfastBtn = document.querySelector('.navbar2 button');
  if (breakfastBtn) {
    showMeal('breakfast', breakfastBtn);
  }
}

// Profile overlay functions
function openProfile() {
  document.getElementById("profileOverlay").classList.add("show");
}

function closeProfile() {
  document.getElementById("profileOverlay").classList.remove("show");
}

// Meals data
const mealsData = {
  breakfast: [
    "2 Roti + 1 Boiled Egg + Vegetable/Dal",
    "Vegetable Khichuri (1 bowl)",
    "2 Bread + 1 Fried Egg (low oil) + 1 Banana",
    "Chira + Banana + Jaggery/Sugar",
    "Rice (small portion) + Dal + Mixed Vegetables"
  ],
  lunch: [
    "Rice + Chicken Curry (small portion) + Mixed Vegetables",
    "Rice + Fish Curry (small portion) + Dal",
    "Vegetable Khichuri + Salad",
    "Rice + Egg Curry + Mixed Vegetables",
    "Vegetable Pulao + Dal + Salad"
  ],
  snacks: [
    "1 Banana + Roasted Chana (small portion)",
    "1 Cup Yogurt + 1 Fruit (apple/banana)",
    "1 Boiled Egg + 1 Small Apple",
    "1 Small Sandwich (vegetable or egg)",
    "Chira + Jaggery + Milk (small portion)"
  ],
  dinner: [
    "Rice + Chicken Curry (small portion) + Mixed Vegetables",
    "Rice + Fish Curry (small portion) + Dal",
    "Vegetable Khichuri + Salad",
    "Rice + Egg Curry + Mixed Vegetables",
    "Vegetable Pulao + Dal + Salad"
  ]
};

// Show meal items in interface
function showMeal(meal, btn) {
  // Remove active class from all buttons
  document.querySelectorAll(".navbar2 button").forEach(b => b.classList.remove("active"));
  
  // Add active class to clicked button
  btn.classList.add("active");

  const mealArea = document.getElementById("mealArea");
  
  // Clear previous content
  mealArea.innerHTML = `<h2 style="margin-bottom:15px;">${btn.textContent}</h2>`;

  // Add meal items
  mealsData[meal].forEach(item => {
    const div = document.createElement("div");
    div.className = "meal-item";
    div.innerHTML = `<span>${item}</span> <button onclick="showBkash()">Add to Cart</button>`;
    mealArea.appendChild(div);
  });
}

// Show BKASH popup
function showBkash() {
  document.getElementById("bkashPopup").style.display = "flex";
}

// Hide BKASH popup
function hideBkash() {
  document.getElementById("bkashPopup").style.display = "none";
}

// Close popup when clicking outside
document.getElementById("bkashPopup").addEventListener("click", function(event) {
  if (event.target === this) {
    hideBkash();
  }
});

// Initialize page when loaded
document.addEventListener("DOMContentLoaded", function() {
  // Set initial state
  const welcomePage = document.getElementById("welcomePage");
  const mainPage = document.getElementById("mainPage");
  
  // Ensure welcome page is visible and main page is hidden
  welcomePage.classList.remove("hidden");
  welcomePage.style.transform = "translateY(0)";
  
  mainPage.classList.remove("active");
  mainPage.style.transform = "translateY(100%)";
  
  // Set default meal to breakfast
  const breakfastBtn = document.querySelector('.navbar2 button');
  if (breakfastBtn) {
    showMeal('breakfast', breakfastBtn);
  }
});
