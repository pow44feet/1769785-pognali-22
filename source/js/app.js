const profileTags = document.querySelector('.profile__tags-list');
const inputMinus = document.querySelectorAll('.settings__minus');
const inputPlus = document.querySelectorAll('.settings__plus');
const routeActive = document.querySelector('.route__item--active');
const routeRemove = document.querySelector('.route__item--active .route__remove');
const routeDropdown = document.querySelector('.route__dropdown');
const filterButton = document.querySelector('.filter__show');
const filterContent = document.querySelector('.filter__content');
const tabTitle = document.querySelectorAll('.choice__item-title');

if (profileTags) {
  profileTags.addEventListener('keyup', (event) => {
    let elem = event.currentTarget;
    if (elem.scrollTop > 0) {
        elem.style.height = `${elem.scrollHeight}px`;
    }
  });
}


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


if (routeActive) {
  routeActive.addEventListener('click', () => {
    if (!(routeActive.classList.contains('route__item--opened'))) {
      routeActive.classList.add('route__item--opened');
    } else {
      routeActive.classList.remove('route__item--opened');
    }
  });
}

if (filterButton) {
  filterButton.addEventListener('click', () => {
    if (!(filterContent.classList.contains('filter__content--closed'))) {
      filterContent.classList.add('filter__content--closed');
    } else {
      filterContent.classList.remove('filter__content--closed');
    }
  });
}


tabTitle.forEach(item => {
  item.addEventListener('click', () => {
    if (!(item.classList.contains('choice__item-title--closed'))) {
      item.classList.add('choice__item-title--closed');
    } else {
      item.classList.remove('choice__item-title--closed');
    }
  });
});
