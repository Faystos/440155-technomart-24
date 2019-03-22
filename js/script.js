var link = document.querySelector(".writeToUs");
var emailForm = document.querySelector(".popupContact");
var popupContactClose = document.querySelector(".contactClose");
var maps = document.querySelector(".ourLocation");
var mapsPopup = document.querySelector(".mainFooterPopup");
var mapsClose = document.querySelector(".mapsClose");
var names = document.querySelector("[name=name]");
var buys = document.querySelectorAll(".buyPopup");
var buyForm = document.querySelector(".popupBasketForm")
var buyFormClose = document.querySelector(".formBuyClose")

buys.forEach(function(item){
   item.addEventListener("click", function (evt) {
   evt.preventDefault();
   buyForm.classList.add("popupBasketFormOpen");
});
});

buyFormClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyForm.classList.remove("popupBasketFormOpen");
});


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  emailForm.classList.add("popupContactOpen");
  names.focus();
});

popupContactClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  emailForm.classList.remove("popupContactOpen");
});

maps.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapsPopup.classList.add("mainFooterPopupOpen");
});

mapsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapsPopup.classList.remove("mainFooterPopupOpen");
});
