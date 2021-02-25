import "./styles.scss";

/*

Sticky Header Navigation

Create a sticky navigation element that "sticks" to the top of the page when you scroll down

Header must have:
  * a logo
  * a dynamic number of menu items (no need for sub-menus)
  * must stick to the top of the page afetr scrolling down
  * design from https://www.figma.com/file/gBygyvET6LzrypIK0Gm2Zn/Sticky-Header?node-id=0%3A1
 */

var menus = [
  "How it works",
  "What it means for your business",
  "What it means for your customers",
  "Getting set up",
  "Visual merchandise",
  "Training",
  "FAQ"
];
setInterval(function () {
  refreshMenu();
}, 500);

window.addEventListener("scroll", function (e) {
  try {
    let header_el = document.querySelector("#app .header");
    let header_offset_top = document.querySelector("#app").offsetTop;
    if (window.pageYOffset > header_offset_top) {
      header_el.classList.add("header--is-sticky");
    } else {
      header_el.classList.remove("header--is-sticky");
    }
  } catch (e) {
    console.log("unknown");
  }
});

function refreshMenu() {
  var menu_wrapper_el = document.querySelector("#app .menu__wrapper");
  if (menu_wrapper_el.childElementCount === menus.length) {
    return;
  }
  menu_wrapper_el.innerHTML = "";
  for (var i = 0; i < menus.length; i++) {
    var menu_item = document.createElement("div");
    menu_item.setAttribute("class", "menu__item");
    menu_item.innerText = menus[i];
    menu_wrapper_el.appendChild(menu_item);
  }
}
