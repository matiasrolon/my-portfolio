# CV — Matias Rolón

Portfolio / CV online, hecho con **React 19 + Vite**. Incluye switch de idioma (ES/EN).

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí http://localhost:5173

## Estructura

```
src/
  content.js          → todo el texto del CV (ES/EN). Editá acá para actualizar tu info.
  App.jsx             → arma la página y maneja el estado del idioma
  index.css           → estilos globales (tokens de color, tipografía, layout)
  components/
    Header.jsx         → barra superior + hero + switch de idioma
    Profile.jsx
    Skills.jsx
    Experience.jsx
    Education.jsx
    Extra.jsx
    Contact.jsx
    Footer.jsx
public/
  avatar.jpg           → (agregar) tu foto — ver sección "Agregar tu foto"
```

## Agregar tu foto

1. Colocá tu imagen en `public/avatar.jpg` (cuadrada, ideal 400x400px o más).
2. En `src/components/Header.jsx`, reemplazá:

```jsx
<div className="hero__avatar" aria-hidden="true">
  <span>MR</span>
</div>
```

por:

```jsx
<div className="hero__avatar">
  <img src="/avatar.jpg" alt="Matias Rolón" />
</div>
```

3. En `src/index.css`, agregá dentro de `.hero__avatar` (o como nueva regla):

```css
.hero__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
```

## Deploy en GitHub Pages

Este proyecto ya incluye un workflow de GitHub Actions (`.github/workflows/deploy.yml`) que compila y publica el sitio automáticamente cada vez que hacés push a `main`.

Pasos:

1. Creá un repositorio en GitHub y subí este proyecto:

   ```bash
   git init
   git add .
   git commit -m "Portfolio inicial"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
   git push -u origin main
   ```

2. En GitHub, andá a **Settings → Pages** y en "Build and deployment" elegí **Source: GitHub Actions**.

3. Hacé push a `main` (o corré el workflow manualmente desde la pestaña **Actions**). En unos minutos el sitio queda publicado en:

   ```
   https://<tu-usuario>.github.io/<tu-repo>/
   ```

> El `base: './'` en `vite.config.js` hace que el build funcione con rutas relativas, así que no hace falta tocar nada más sea cual sea el nombre del repo.

### Alternativa manual (sin Actions)

```bash
npm install -D gh-pages
npm run build
npx gh-pages -d dist
```

Y en Settings → Pages elegís la rama `gh-pages` como fuente.

## Editar contenido

Todo el texto (perfil, experiencia, skills, educación, contacto) vive en `src/content.js`, separado en dos objetos `es` y `en`. Para actualizar tu CV, editá ese archivo — no hace falta tocar los componentes.

Los enlaces de LinkedIn y GitHub en `content.js` son placeholders (`linkedin.com/in/matirolon`, `github.com/matirolon`) — reemplazalos por tus URLs reales antes de publicar.
