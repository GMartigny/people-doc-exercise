class GlyphIcon extends HTMLElement {
    constructor () {
        super();

        this.className = `glyphicon glyphicon-${this.textContent}`;
        this.setAttribute("aria-hidden", true);

        this.textContent = "";
    }
}

window.customElements.define("glyph-icon", GlyphIcon, {
    extends: "i",
});
