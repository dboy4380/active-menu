$(document).ready(function () {
  $(".active__menu").click(function (event) {
    $(".active__menu, .header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
