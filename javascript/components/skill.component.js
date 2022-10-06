class SkillElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    if (
      this.hasAttribute("src") &&
      this.hasAttribute("name") &&
      this.hasAttribute("level")
    ) {
      const src = this.getAttribute("src");
      const name = this.getAttribute("name");
      const level = this.getAttribute("level");
      this.innerHTML = `
            <div class="skill">
            <img src="${src}" class="skill-logo" alt="html logo">
            <div class="skill-stat">
                <span class="skill-name">${name}</span>
                <div class="skill-level">
                    <span>Skill:</span> 
                    <div class="skill-bar">
                        <div class="skill-meter-${level}"></div>
                    </div>
                </div>
            </div>
            </div>
        `;
    }
  }

  static get observedAttributes() {
    return ["name", "src", "level"];
  }

  attributeChangeCallback(attrName, oldValue, newValue) {
    if (attrName == "src") this.querySelector("img").src = newValue;
    else if (attrName == "name") {
      this.querySelector(".skill-name").innerHTML = newValue;
    } else if (attrName == "level") {
      this.querySelector(".skill-bar").querySelector(
        "div"
      ).className = `skill-meter-${newValue}`;
    }
  }
}

customElements.define("skill-element", SkillElement);
