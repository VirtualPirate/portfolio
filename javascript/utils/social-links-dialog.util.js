const showDialogButton = document.querySelector(".intro-contact-button");
const dialog = document.querySelector(".social-links-dialog");

const showAnimation = [
  { opacity: "0", transform: "scale(0)", offset: 0 },
  { opacity: "1", transform: "scale(1.1)", offset: 0.8 },
  { transfrom: "scale(1)", offset: 1 },
];

const duration = {
  duration: 500,
  fill: "forwards",
  easing: "ease-out",
};

function showSocialModal() {
  dialog.showModal();
  dialog.animate(showAnimation, duration);
}

function closeSocialModal() {
  dialog.close();
}

showDialogButton.addEventListener("click", (e) => {
  showSocialModal();
});

const hideDialogButton = document.querySelector(".social-links-dialog-hide");
hideDialogButton.addEventListener("click", (e) => {
  closeSocialModal();
});
