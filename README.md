# MedicoAdmin Landing Page

Landing page estática para promocionar productos de farmacia, construida con Astro.

## Características

- ✨ Desarrollada con **Astro** (generación de sitios estáticos)
- 📱 Diseño responsive (mobile-first)
- 🎨 CSS moderno con variables, Grid y Flexbox
- 🔄 Slider de héroe con auto-play
- 🏷️ Sección de promociones especiales
- 🛍️ Catálogo de productos recientes
- ♿ HTML5 semántico (header, nav, main, section, footer)
- 🚀 Optimizado para GitHub Pages

## Secciones

1. **Header** - Navegación responsive con menú mobile
2. **Hero Slider** - Carrusel automático con 3 slides
3. **Promociones** - Grid de ofertas especiales
4. **Productos** - Catálogo de productos recientes
5. **Footer** - Información de contacto y enlaces

## Requisitos

- Node.js 18+ 
- npm o pnpm

## Instalación

```bash
# Instalar dependencias
npm install
```

## Comandos

```bash
# Iniciar servidor de desarrollo (http://localhost:4321)
npm run dev

# Construir sitio estático para producción
npm run build

# Vista previa de la construcción
npm run preview
```

## Estructura del Proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Promociones.astro
│   │   ├── Productos.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

## Configuración para GitHub Pages

El proyecto está configurado para desplegarse en GitHub Pages:

- `output: 'static'` - Generación de sitio estático
- `outDir: 'docs'` - Output en carpeta /docs
- `site` y `base` - Configurados para GitHub Pages

### Pasos para desplegar

1. Ejecutar `npm run build`
2. Hacer commit de la carpeta `docs/`
3. En GitHub, ir a Settings > Pages
4. Seleccionar rama y carpeta `/docs`
5. Guardar y esperar el despliegue

## Personalización

### Colores

Edita las variables CSS en `src/styles/global.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #10b981;
  --accent-color: #f59e0b;
  /* ... más variables */
}
```

### Contenido

- **Productos**: Edita el array en `src/components/Productos.astro`
- **Promociones**: Edita el array en `src/components/Promociones.astro`
- **Slides**: Modifica los divs en `src/components/Hero.astro`

## Tecnologías

- [Astro](https://astro.build) - Framework de sitios estáticos
- HTML5 semántico
- CSS3 (Variables, Grid, Flexbox)
- JavaScript (para slider y navegación)

## Licencia

MIT

---

Desarrollado con ❤️ para MedicoAdmin
