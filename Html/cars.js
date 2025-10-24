window.onload = () => {
  // -----------------------------
  // DATA
  // -----------------------------
  const carArray = [
    { name: "Porsche_911", image: "../images/Cars/Porsche_911.png" },
    { name: "BMW-M4", image: "../images/Cars/BMW-M4.png" }
  ];

  const engineArray = [
    {
      carName: "Porsche_911",
      engineName: "Turbocharged Flat-6",
      Mcost: "R1,200,000",
      img: "../images/Background/Porsche_engine.png"
    },
    {
      carName: "BMW-M4",
      engineName: "3.0L Twin-Turbo Inline-6",
      Mcost: "R1,500,000",
      img: "../images/Background/BMW_engine.png"
    }
  ];

  const brakesArray = [
    {
      carName: "Porsche_911",
      brakeName: "Carbon Ceramic Brakes",
      Mcost: "R80,000",
      img: "../images/Background/Porsche_brakes.png"
    },
    {
      carName: "BMW-M4",
      brakeName: "Performance Brakes",
      Mcost: "R65,000",
      img: "../images/Background/BMW_brakes.png"
    }
  ];

  // -----------------------------
  // ELEMENTS
  // -----------------------------
  const select = document.getElementById("car-select");
  const carImg = document.getElementById("car-img");
  const carNameEl = document.getElementById("car-name");
  const engineCarEl = document.getElementById("engine-car");
  const engineNameEl = document.getElementById("engine-name");
  const engineCostEl = document.getElementById("engine-cost");

  const engineBtn = document.getElementById("engine-btn");

  // Brakes button is the 3rd button in .upper
  const brakesBtn = document.querySelectorAll(".upper button")[2];

  // -----------------------------
  // SIDEBAR TOGGLE
  // -----------------------------
  const menuBtn = document.getElementById("menu-btn");
  const sideMenu = document.getElementById("side-menu");

  if (menuBtn && sideMenu) {
    menuBtn.addEventListener("click", () => {
      sideMenu.classList.toggle("active");
    });
  }

  // -----------------------------
  // CAR SELECTION
  // -----------------------------
  select.addEventListener("change", (event) => {
    const selectedCar = carArray.find(car => car.name === event.target.value);
    if (selectedCar) {
      carImg.src = selectedCar.image;

      // Clear engine/brakes info when switching cars
      carNameEl.textContent = "";
      engineCarEl.textContent = "";
      engineNameEl.textContent = "";
      engineCostEl.textContent = "";
    }
  });

  // -----------------------------
  // ENGINE BUTTON
  // -----------------------------
  engineBtn.addEventListener("click", () => {
    const selectedCarName = select.value;

    if (selectedCarName === "Select a Car" || !selectedCarName) {
      alert("Please select a car first!");
      return;
    }

    const engine = engineArray.find(e => e.carName === selectedCarName);

    if (engine) {
      carImg.src = engine.img;

      carNameEl.textContent = engine.carName;
      engineCarEl.textContent = engine.carName;
      engineNameEl.textContent = engine.engineName;
      engineCostEl.textContent = engine.Mcost;
    } else {
      console.error("Engine not found for car:", selectedCarName);
    }
  });

  // -----------------------------
  // BRAKES BUTTON
  // -----------------------------
  brakesBtn.addEventListener("click", () => {
    const selectedCarName = select.value;

    if (selectedCarName === "Select a Car" || !selectedCarName) {
      alert("Please select a car first!");
      return;
    }

    const brake = brakesArray.find(b => b.carName === selectedCarName);

    if (brake) {
      carImg.src = brake.img;

      carNameEl.textContent = brake.carName;
      engineCarEl.textContent = brake.carName;
      engineNameEl.textContent = brake.brakeName;
      engineCostEl.textContent = brake.Mcost;
    } else {
      console.error("Brakes not found for car:", selectedCarName);
    }
  });
};
