/*Burger menu*/
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

/*Slider in Second Section*/ /*Also need create method if maxImages  < maximagesinLine *2*/
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

/*Slider in Four Section*/ /*Also need create method if maxImages  < maximagesinLine *2*/
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
/*Slider in Four Section*/
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

/*Selecter Languange /*Hat*/
let bSelecterMenuHat = false;

document
  .querySelector(".slecterMenuDowninHat")
  .addEventListener("click", function () {
    if (!bSelecterMenuHat) {
      document.querySelector(".setLang").classList.add("setLangActivate");
      document
        .querySelector(".slecterMenuDowninHat")
        .classList.add("activateSelecterMenu");
      bSelecterMenuHat = true;
    } else {
      document
        .querySelector(".slecterMenuDowninHat")
        .classList.remove("activateSelecterMenu");
      document.querySelector(".setLang").classList.remove("setLangActivate");
      bSelecterMenuHat = false;
    }
  });

/*Foot*/
let bSelecterMenuFoot = false;

document
  .querySelector(".slecterMenuDown")
  .addEventListener("click", function () {
    if (!bSelecterMenuFoot) {
      document.querySelector(".selecterLang").classList.add("setLangActivate");
      document
        .querySelector(".slecterMenuDown")
        .classList.add("activateSelecterMenu");
      bSelecterMenuFoot = true;
    } else {
      document
        .querySelector(".slecterMenuDown")
        .classList.remove("activateSelecterMenu");
      document
        .querySelector(".selecterLang")
        .classList.remove("setLangActivate");
      bSelecterMenuFoot = false;
    }
  });

/*Scroll*/
const scrollPosition = window.scrollY;
window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  if (scrollPosition >= 500 && scrollPosition <= 1300) {
    document
      .querySelector(".titleAndDiscriptionBorder")
      .classList.add("m_titleAndDiscriptionBorder");
    document
      .querySelector(".inputFindAdress")
      .classList.add("m_inputFindAdress");
  }
  if (scrollPosition >= 900 && scrollPosition <= 1700) {
    document
      .querySelector(".SpecialitiesSection")
      .classList.add("m_SpecialitiesSection");
  }

  if (scrollPosition >= 1300 && scrollPosition <= 2000) {
    const elemetsSphere = document.querySelectorAll(".borderSphere");
    for (let i = 0; i < elemetsSphere.length; i++) {
      elemetsSphere[i].classList.add("m_borderSphere");
    }
  }
  console.log(scrollPosition);
});

/*Old method use slider; is not validate*/
/**
swapButtonRight.onclick = function () {
  const tmp = swapRestaurantElements[0].innerHTML;
  swapRestaurantElements[0].innerHTML = swapRestaurantElements[3].innerHTML;
  swapRestaurantElements[3].innerHTML = tmp;
};
swapButtonLeft.onclick = function () {
  console.log("activ2");
};*/
