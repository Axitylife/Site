/*CreateElements*/
const burgerMenu = document.querySelector(".burger");
const header = document.querySelector(".burgerMenuOpen");
let selecterBurger = false;

burgerMenu.onclick = function () {
  if (!selecterBurger) {
    if (header.classList.contains("deactivate")) {
      header.classList.remove("deactivate");
    } else console.log("Deactivated dontIncluded");
    header.classList.add("activate");
    selecterBurger = true;
  } else {
    if (header.classList.contains("activate")) {
      header.classList.remove("activate");
    } else console.log("activate dontIncluded");
    header.classList.add("deactivate");
    selecterBurger = false;
  }
};

let swapRestaurantElements = document.querySelectorAll(
  ".sliderlistMenuElement"
);
const swapButtonRight = document.querySelector(".activeRestaurantsButtonRight");
const swapButtonLeft = document.querySelector(".activeRestaurantsButtonLeft");
const data = document.querySelector(".sliderMenuList");

function swapElementsWithsUseTempVariable(firstElement, secondElement) {
  const temp = firstElement.innerHTML;
  firstElement.innerHTML = secondElement.innerHTML;
  secondElement.innerHTML = temp;
}

for (let i = 0; swapRestaurantElements.length; i++) {
  swapElementsWithsUseTempVariable(
    swapRestaurantElements[0],
    swapRestaurantElements[1]
  );
}
/**
swapButtonRight.onclick = function () {
  const tmp = swapRestaurantElements[0].innerHTML;
  swapRestaurantElements[0].innerHTML = swapRestaurantElements[3].innerHTML;
  swapRestaurantElements[3].innerHTML = tmp;
};
swapButtonLeft.onclick = function () {
  console.log("activ2");
};*/
