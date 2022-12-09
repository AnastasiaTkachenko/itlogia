/* document.getElementsByClassName("main-title")[0].style.color = "red"; */

/* document.getElementById("main-action").onclick = function () {
   alert(1);
}; */

document.getElementById("main-action").onclick = function () {
  document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
};

var buttons = document.getElementsByClassName("car-button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById("price").scrollIntoView({ behavior: "smooth" });
  };
}
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
