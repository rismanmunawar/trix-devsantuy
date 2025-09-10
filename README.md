# trix-devsantuy

> Lightweight Trix WYSIWYG wrapper — limited toolbar (**Bold, Italic, Heading, Numbered, Bullet**) + **Undo/Redo**.  
> Works with plain HTML, Laravel, Vite/webpack, React/Vue.

**Demo (GitHub Pages)**: after enabling Pages to serve `/docs`, open `https://<rismanmunawar>.github.io/trix-devsantuy/`

## Quick Start (CDN)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/trix@2.1.1/dist/trix.css">
<script src="https://cdn.jsdelivr.net/npm/trix@2.1.1/dist/trix.umd.min.js"></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/<rismanmunawar>/trix-devsantuy@v0.1.0/dist/dm-trix.css">
<div id="editor"></div>
<script type="module">
  import DmTrix from "https://cdn.jsdelivr.net/gh/<rismanmunawar>/trix-devsantuy@v0.1.0/dist/dm-trix.js"
  new DmTrix(document.getElementById("editor"), { name: "content" })
</script>
```

## Install Trix via CMD (NPM)
```bat
npm init -y
npm install trix
npm install github:<rismanmunawar>/trix-devsantuy#v0.1.0
```
Use in your JS entry (Vite/webpack):
```js
import "trix/dist/trix.css"
import "trix/dist/trix.umd.min.js"
import "trix-devsantuy/dist/dm-trix.css"
import DmTrix from "trix-devsantuy/dist/dm-trix.js"
new DmTrix(document.getElementById("editor"), { name: "content" })
```

## GitHub Pages (serve demo)
Windows CMD:
```bat
cd D:\devsantuy\trix-devsantuy
xcopy demo docs /E /I /Y
echo. > docs\.nojekyll
git add -A && git commit -m "docs: update pages" && git push
```
PowerShell:
```powershell
cd D:\devsantuy\trix-devsantuy
Copy-Item -Path .\demo\* -Destination .\docs\ -Recurse -Force
New-Item -ItemType File -Force -Path .\docs\.nojekyll | Out-Null
git add -A; git commit -m "docs: update pages"; git push
```

## License
MIT © 2025
