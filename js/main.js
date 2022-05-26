let burger = document.querySelector(".burger");
let nav = document.querySelector(".mainNav");
burger.addEventListener("click", function () {
  nav.classList.toggle("navActive");
});

let slid = document.querySelector(".first");
let leftButton = document.querySelector(".shares div:first-child"),
  rightButton = document.querySelector(".shares div:last-child"),
  bullets = document.querySelectorAll(".bullets span");
let arrSlid = [0, -100, -200];
let count = 0;

function slider() {
  rightButton.addEventListener("click", function () {
    count++;
    imgInSlid();
  });
  leftButton.addEventListener("click", function () {
    count--;
    imgInSlid();
  });

  bullets.forEach(function (el, i) {
    el.addEventListener("click", function () {
      count = i;
      imgInSlid();
    });
  });
}

function imgInSlid() {
  if (count == 3) {
    count = 0;
  } else if (count < 0) {
    count = 2;
  }
  slid.style.marginLeft = `${arrSlid[count]}vw`;
  bullets.forEach(function (el, i) {
    el.classList.remove("active");
    if (count == i) {
      el.classList.add("active");
    }
  });
  clearInterval(autoSlid);
  autoSlidFunction();
}

let autoSlid = setInterval(function () {
  count++;
  imgInSlid();
}, 5000);

function autoSlidFunction() {
  autoSlid = setInterval(function () {
    count++;
    imgInSlid();
  }, 5000);
  autoSlid;
}

slider();
