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

/*Also need create method if maxImages  < maximagesinLine *2*/
const maxImagesinLine = 4;
let currentPosition = 0;
let currentStep = 0;
const imageSizeX = 296 + 24;
const sliderMenu = document.querySelector(".sliderLine");

document.querySelector(".rightArrow").addEventListener("click", function () {
  if (document.querySelectorAll(".sliderItem").length > maxImagesinLine) {
    let maxStep =
      document.querySelectorAll(".sliderItem").length % maxImagesinLine;
    if (currentStep < maxStep) {
      currentPosition = currentPosition + imageSizeX;
      currentStep += 1;
      sliderMenu.style.left = -currentPosition + "px";
    } else {
      currentStep = 0;
      currentPosition = 0;
      sliderMenu.style.left = -currentPosition + "px";
    }
  }
});

document.querySelector(".leftArrow").addEventListener("click", function () {
  if (document.querySelectorAll(".sliderItem").length > maxImagesinLine) {
    let maxStep =
      document.querySelectorAll(".sliderItem").length % maxImagesinLine;
    if (currentStep == 0) {
      currentPosition = maxStep * imageSizeX;
      currentStep = maxStep;
      sliderMenu.style.left = -currentPosition + "px";
    } else {
      currentStep -= 1;
      currentPosition = currentPosition - imageSizeX;
      sliderMenu.style.left = -currentPosition + "px";
    }
  }
});

const maxImagesinLineSpecialist = 8;
let currentPositionSpecialist = 0;
let currentStepSpecialist = 0;
const imageSizeXSpecialist = 136 + 24;
const sliderMenuSpecialist = document.querySelector(".Specialities_sliderLine");

document
  .querySelector(".rightArrowSpecialities")
  .addEventListener("click", function () {
    if (
      document.querySelectorAll(".Specialities_SliderItem").length >
      maxImagesinLineSpecialist
    ) {
      let maxStepSpetilist =
        document.querySelectorAll(".Specialities_SliderItem").length %
        maxImagesinLineSpecialist;

      if (currentStepSpecialist < maxStepSpetilist) {
        currentPositionSpecialist =
          currentPositionSpecialist + imageSizeXSpecialist;
        currentStepSpecialist += 1;
        sliderMenuSpecialist.style.left = -currentPositionSpecialist + "px";
        console.log(maxStepSpetilist);
      } else {
        currentStepSpecialist = 0;
        currentPositionSpecialist = 0;
        sliderMenuSpecialist.style.left = -currentPositionSpecialist + "px";
      }
    } else {
    }
  });

document
  .querySelector(".leftArrowSpecialities")
  .addEventListener("click", function () {
    if (
      document.querySelectorAll(".Specialities_SliderItem").length >
      maxImagesinLineSpecialist
    ) {
      let maxStepSpetilist =
        document.querySelectorAll(".Specialities_SliderItem").length %
        maxImagesinLineSpecialist;
      if (currentStepSpecialist == 0) {
        currentPositionSpecialist = maxStepSpetilist * imageSizeXSpecialist;
        currentStepSpecialist = maxStepSpetilist;
        sliderMenuSpecialist.style.left = -currentPositionSpecialist + "px";
      } else {
        currentStepSpecialist -= 1;
        currentPositionSpecialist =
          currentPositionSpecialist - imageSizeXSpecialist;
        sliderMenuSpecialist.style.left = -currentPositionSpecialist + "px";
      }
    }
  });

const buttonDown = document.querySelector(".slecterMenuDown");

buttonDown.onclick = function () {
  document.querySelector(".test").classList.add("testActivate");
};
document
  .querySelector(".slecterMenuDowninHat")
  .addEventListener("click", function () {
    document.querySelector(".setLang").classList.add("setLangActivate");
  });

/**
swapButtonRight.onclick = function () {
  const tmp = swapRestaurantElements[0].innerHTML;
  swapRestaurantElements[0].innerHTML = swapRestaurantElements[3].innerHTML;
  swapRestaurantElements[3].innerHTML = tmp;
};
swapButtonLeft.onclick = function () {
  console.log("activ2");
};*/
