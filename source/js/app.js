let profileTags = document.querySelector('.profile__tags-list');
let inputMinus = document.querySelectorAll('.settings__minus');
let inputPlus = document.querySelectorAll('.settings__plus');
let routeActive = document.querySelector('.route__item--active');
let routeRemove = document.querySelector('.route__item--active .route__remove');
let routeDropdown = document.querySelector('.route__dropdown');

profileTags.addEventListener('keyup', (event) => {
   let elem = event.currentTarget;
   if (elem.scrollTop > 0) {
      elem.style.height = `${elem.scrollHeight}px`;
   }
});




inputMinus.forEach(item => {
   item.addEventListener('click', () => {
      let inputParent = item.closest('.settings__measure');
      let input = inputParent.querySelector('.settings__input');
      if (input.value >= 1) {
         input.value -= 1;
      }
   });
});


inputPlus.forEach(item => {
   item.addEventListener('click', () => {
      let inputParent = item.closest('.settings__measure');
      let input = inputParent.querySelector('.settings__input');
      input.value = +input.value + 1;
   });
});



routeActive.addEventListener('click', () => {
  if (!(routeActive.classList.contains('route__item--opened'))) {
    routeActive.classList.add('route__item--opened');
  } else {
    routeActive.classList.remove('route__item--opened');
  }
});
