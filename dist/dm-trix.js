// dist/dm-trix.js
// trix-devsantuy — Minimal wrapper around Trix (MIT)
export default class DmTrix {
  constructor(root, opts = {}) {
    if (!root) throw new Error("DmTrix: root element is required");

    this.opts = Object.assign({
      name: "content",
      placeholder: "Tulis konten di sini…",
      initialHTML: "",
      onChange: null
    }, opts);

    // container class
    root.classList.add("dmtrix");

    // hidden input (the Trix model)
    this.input = document.createElement("input");
    this.input.type = "hidden";
    this.input.name = this.opts.name;
    this.input.id = this._uid("dmtrix-input");

    // editor
    this.editor = document.createElement("trix-editor");
    this.editor.setAttribute("input", this.input.id);
    this.editor.setAttribute("placeholder", this.opts.placeholder);

    // mount
    root.appendChild(this.input);
    root.appendChild(this.editor);

    // initial value
    if (this.opts.initialHTML) {
      this.setHTML(this.opts.initialHTML);
    }

    // change binding
    document.addEventListener("trix-change", (e) => {
      if (e.target !== this.editor) return;
      if (typeof this.opts.onChange === "function") {
        this.opts.onChange(this.getHTML());
      }
    });
  }

  getHTML() { return this.input.value || ""; }
  setHTML(html) {
    this.input.value = html || "";
    this.editor.value = this.input.value;
  }
  focus() { this.editor.focus(); }

  _uid(prefix) { return prefix + "-" + Math.random().toString(36).slice(2, 9); }
}

export { DmTrix as DmTrix };
