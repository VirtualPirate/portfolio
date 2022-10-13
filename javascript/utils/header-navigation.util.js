const sideNav = document.querySelector(".side-nav");

function toggleNavSideBar() {
  sideNav.classList.toggle("show");
}

document
  .querySelector(".header-navigation-bar")
  .addEventListener("click", () => {
    toggleNavSideBar();
  });

const closeSideNavBtn = document.querySelector(".close-side-nav-btn");
closeSideNavBtn.addEventListener("click", () => {
  toggleNavSideBar();
});

let container = document.querySelector(".side-nav");
let listener = SwipeListener(container);
container.addEventListener("swipe", function (e) {
  if (e.detail.directions.left) toggleNavSideBar();
});
