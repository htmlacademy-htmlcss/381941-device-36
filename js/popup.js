let popup = document.querySelector('.delivery-popup');
let popupButton = document.querySelector('.open-popup');
let closeButton = document.querySelector('.close-popup');

popupButton.onclick = function() {
  popup.classList.toggle('popup-switcher');
};

closeButton.onclick = function() {
  popup.classList.toggle('popup-switcher');
};



// let catalogopen = document.querySelector('.catalog-navigation .navigation-link');
// let sublist = document.querySelector('.sub-list');

// catalogopen.onclick = function() {
//  sublist.classList.toggle('sub-list-toogle');
// };



let cartopen = document.querySelector('.cart-link');
let cartpopup = document.querySelector('.user-cart-box-popup');

cartopen.onclick = function() {
  cartpopup.classList.toggle('popupflex');
};

