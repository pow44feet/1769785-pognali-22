let profileTags = document.querySelector('.profile__tags-list');
profileTags.addEventListener("keyup", function () {
  if (this.scrollTop > 0) {
    this.style.height = this.scrollHeight + "px";
  }
});



let inputMinus = document.querySelectorAll(".settings__minus");
inputMinus.forEach(item => {
  item.addEventListener("click", () => {
    let inputParent = item.closest(".settings__measure");
    let input = inputParent.querySelector(".settings__input");
    inputValue = input.value;
    if (inputValue >= 1) {
      input.value -= 1;
    }
  });
});

let inputPlus = document.querySelectorAll(".settings__plus");
inputPlus.forEach(item => {
  item.addEventListener("click", () => {
    let inputParent = item.closest(".settings__measure");
    let input = inputParent.querySelector(".settings__input");
    inputValue = input.value;
    input.value = +input.value + +1;
  });
});


let routeActive = document.querySelector(".route__item--active");
let routeRemove = document.querySelector(".route__item--active .route__remove");
let routeDropdown = document.querySelector(".route__dropdown");
routeActive.addEventListener("click", () => {
  if (!(routeDropdown.classList.contains("route__dropdown--active"))) {
    routeDropdown.classList.add("route__dropdown--active");
    routeRemove.style.display = "none";
  } else {
    routeDropdown.classList.remove("route__dropdown--active");
    routeRemove.style.display = "block";
  }
});
