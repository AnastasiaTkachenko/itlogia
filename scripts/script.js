/* document.getElementsByClassName("main-title")[0].style.color = "red"; */

/* document.getElementById("main-action").onclick = function () {
   alert(1);
}; */
/* одна кнопка  */
document.getElementById("main-action").onclick = function () {
  document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
};
/* несколько кнопок  */
var buttons = document.getElementsByClassName("car-button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById("price").scrollIntoView({ behavior: "smooth" });
  };
}

/* валидация полей  */
document.getElementById("price-action").onclick = function () {
  if (document.getElementById("name").value === "") {
    alert("Заполните поле имя");
  } else if (document.getElementById("phone").value === "") {
    alert("Заполните поле телефон");
  } else if (document.getElementById("car").value === "") {
    alert("Заполните поле автомобиль");
  } else {
    alert("Спасибо за заявку мы,свяжемся с Вами в ближайшее время");
  }
};
/* parallax */

document.addEventListener("DOMContentLoaded", function () {
  let layer = document.querySelector(".price-image");
  document.addEventListener("mousemove", (event) => {
    layer.style.transform =
      "translate3d(" +
      (event.clientX * 0.5) / 10 +
      "px," +
      (event.clientY * 0.2) / 8 +
      "px,0px)";
  });

  const elem = document.querySelector(".main");
  document.addEventListener("scroll", () => {
    elem.style.backgroundPositionX = "0" + 0.2 * window.pageYOffset + "px";
  });
});
