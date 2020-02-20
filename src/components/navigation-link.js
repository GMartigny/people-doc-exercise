import ListLink from "./list-link";

export default class NavigationLink extends ListLink {
    constructor () {
        super();

        const link = this.querySelector("a");

        link.innerHTML = `
            ${this.hasAttribute("icon") ? `<i is="glyph-icon">${this.getAttribute("icon")}</i>` : ""}
            
            ${link.innerHTML}
            
            ${this.hasAttribute("todo") ? `<span class="badge pull-right">${this.getAttribute("todo")}</span>` : ""}
        `;
    }
}

window.customElements.define("navigation-link", NavigationLink, {
    extends: "li",
});
