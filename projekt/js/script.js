const items = document.getElementsByClassName("nav__manu__item");

const itemsArrey = Array.from(items);

itemsArrey.forEach(function (items) {
  items.addEventListener("mouseenter", function () {
    items.style.backgroundColor = "#5932EA";
  });
  items.addEventListener("mouseleave", () => {
    items.style.backgroundColor = "#fff";
  });
});

console.log(items);
