// Sidebar toggle
const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.getElementById("side-menu");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("active");
});

// Pass selected car to engine.html
const engineBtn = document.getElementById("engine-btn");
const carSelect = document.getElementById("car-select");

engineBtn.addEventListener("click", () => {
  const selectedCar = carSelect.value;
  if (selectedCar === "Select a Car") {
    alert("Please select a car first!");
    return;
  }
  // Redirect to engine.html with query string
  window.location.href = `engine.html?car=${encodeURIComponent(selectedCar)}`;
});