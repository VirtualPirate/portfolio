// skillset animations
import { skillset_pages } from "./models/skillset.model.js";

function animateSkillset() {
  const skills = document.querySelectorAll(".skill");
  const animation = [
    { opacity: "0", transform: "translateY(6vw)" },
    { opacity: "1", transform: "translateY(0)" },
  ];

  const duration = {
    duration: 500,
    iterations: 1,
    fill: "forwards",
    easing: "cubic-bezier(.8,.62,.85,1.34)",
  };

  let delay = 0;
  skills.forEach((skill) => {
    skill.animate(animation, Object.assign(duration, { delay }));
    delay += 50;
  });
}

function render_skills(skills) {
  skillset_content.innerHTML = "";
  skills.forEach((skill) => {
    const element = document.createElement("skill-element");
    for (const attrName in skill)
      element.setAttribute(attrName, skill[attrName]);
    skillset_content.appendChild(element);
  });

  animateSkillset();
}

const skillset_content = document.querySelector(".skillset-content");
document.addEventListener("DOMContentLoaded", function (event) {
  const skillset_pages_length = skillset_pages.length;
  const skillset_page_buttons = [...Array(skillset_pages_length).keys()];

  const current_page = 0;

  render_skills(skillset_pages[current_page]);
});

const skillset_nav_range = skillset_pages.length;
const skillset_navs = document.querySelectorAll(".skillset-nav");
let active_nav = document.querySelector(".skillset-nav.active-nav");

skillset_navs.forEach((nav_button) => {
  nav_button.addEventListener("click", (e) => {
    if (nav_button.classList.contains("active-nav")) return;
    active_nav.classList.remove("active-nav");
    nav_button.classList.add("active-nav");
    active_nav = nav_button;

    const current_page = Number(active_nav.dataset.button);
    render_skills(skillset_pages[current_page]);

    document.querySelector(".skillset").scrollIntoView({ behavior: "smooth" });
  });
});
