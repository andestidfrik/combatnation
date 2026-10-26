# Combat Nation — sitio estático

HTML + CSS + JS puro, sin build. Funciona directo en GitHub Pages.

## Publicar en GitHub Pages
1. Crea un repo en GitHub (ej. `combat-nation`) y sube **el contenido de esta carpeta** a la raíz.
2. En el repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `(root)`**.
3. En 1–2 minutos queda en `https://TU-USUARIO.github.io/combat-nation/`.

## Personalizar
- Textos, horarios y precios: `index.html` (los precios están como `$000.000`).
- WhatsApp: variable `WHATSAPP` en `script.js`.
- Foto del hero: agrega `assets/hero.jpg` (si no existe se ve un fondo oscuro).
- Galería: reemplaza los recuadros por `<img src="assets/foto1.jpg" alt="">`.
- Colores y tipografías: variables en `:root` de `styles.css` (tomadas del brandbook).

## Notas de marca
- Tipografía principal del brandbook: AntaTrial Expanded Black Italic. Aquí se usa **Archivo Expanded Black Italic** (Google Fonts) como equivalente web. Si tienes la licencia de Anta, ponla en `assets/` con `@font-face` y cámbiala en `--f-titulo`.
- Auxiliar: Poppins.
- `assets/logo-*.png` y `marca-*.png` se extrajeron del JPG entregado. Para máxima nitidez, sustitúyelos por el SVG vectorial original.
