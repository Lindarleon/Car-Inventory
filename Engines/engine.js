// engine.js

// Engine data
const engineArray = [
    {
        id: 1,
        carName: "Porsche_911",
        engineName: "Turbocharged Flat-6",
        Mcost: "R1,200,000",
        img: "../images/Background/Porsche_engine.png"
    },
    {
        id: 2,
        carName: "BMW-M4",
        engineName: "3.0L Twin-Turbo Inline-6",
        Mcost: "R1,500,000",
        img: "../images/Background/BMW_engine.png"
    }
];

// Get HTML elements
const carNameEl = document.getElementById("car-name");
const engineCarEl = document.getElementById("engine-car");
const engineNameEl = document.getElementById("engine-name");
const engineCostEl = document.getElementById("engine-cost");
const engineImgEl = document.getElementById("engine-img");
const carSelectEl = document.getElementById("car-select");
const engineBtnEl = document.getElementById("engine-btn");

// Function to load engine info for selected car
function loadEngine(car) {
    const engine = engineArray.find(e => e.carName === car);

    if (engine) {
        carNameEl.textContent = engine.carName;
        engineCarEl.textContent = engine.carName;
        engineNameEl.textContent = engine.engineName;
        engineCostEl.textContent = engine.Mcost;
        engineImgEl.src = engine.img;
    } else {
        console.log("Engine not found for car:", car);
        // Optionally clear the fields if no engine found
        carNameEl.textContent = "";
        engineCarEl.textContent = "";
        engineNameEl.textContent = "";
        engineCostEl.textContent = "";
        engineImgEl.src = "";
    }
}

// Event listener for engine button
engineBtnEl.addEventListener("click", () => {
    const selectedCar = carSelectEl.value; // Get currently selected car
    if (selectedCar) {
        loadEngine(selectedCar);
    } else {
        console.log("No car selected.");
    }
});