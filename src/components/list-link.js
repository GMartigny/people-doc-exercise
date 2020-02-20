import "./glyph-icon";

export default class ListLink extends HTMLLIElement {
    constructor () {
        super();

        let html = `
            <a ${this.hasAttribute("active") ? "" : `href="${this.getAttribute("url")}"`}>
                ${this.textContent.trim()}
            </a>
        `;

        if (this.hasAttribute("active")) {
            this.classList.add("active");
            html += `
                <span class="sr-only">(current)</span>
            `;
        }

        this.innerHTML = html;
    }
}

window.customElements.define("list-link", ListLink, {
    extends: "li",
});
