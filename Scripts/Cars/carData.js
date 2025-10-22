// Array of cars
let carArray = [
  {
    id: 1,
    name: "Porsche_911",
    image: "../images/Cars/Porsche_911.png"
  },
  {
    id: 2,
    name: "BMW-M4",
    image: "../images/Cars/BMW-M4.png"
  }
];

// Select the dropdown and the image element
const select = document.querySelector("select");
const picture = document.querySelector(".js-image");

// Listen for change
select.addEventListener("change", (event) => {
  const selectedCar = carArray.find(car => car.name === event.target.value);
  if (selectedCar) {
    picture.src = selectedCar.image;
  }
});