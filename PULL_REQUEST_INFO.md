# Pull Request: Landing Page para MedicoAdmin con Astro

## 🔗 Crear Pull Request

**URL para crear el PR:**
```
https://github.com/mbarriosRojas/medicoadmin-admin/compare/main...cursor/landing-page-astro-ab6c?expand=1
```

## 📋 Título Sugerido
```
✨ Landing Page para MedicoAdmin con Astro
```

## 📝 Descripción del PR

```markdown
## Descripción
Landing page estática para promocionar productos de farmacia, desarrollada con **Astro**.

## Características Implementadas

### 🏗️ Arquitectura
- ✅ Proyecto Astro con generación estática
- ✅ Configurado para GitHub Pages (output: static, outDir: docs)
- ✅ Site URL: https://mbarriosRojas.github.io/medicoadmin-admin/

### 📄 Secciones
1. **Header** - Navegación sticky responsive con menú hamburguesa para mobile
2. **Hero Slider** - Carrusel automático con 3 slides, controles de navegación
3. **Promociones** - Grid responsive con 4 ofertas especiales con badges de descuento
4. **Productos Recientes** - Catálogo de 6 productos con categorías y precios
5. **Footer** - Información de contacto, enlaces rápidos y redes sociales

### 🎨 Diseño
- HTML5 semántico (header, nav, main, section, footer, article)
- CSS moderno con variables CSS para temas consistentes
- Grid y Flexbox para layouts responsive
- Diseño mobile-first
- Animaciones y transiciones suaves
- Accesibilidad (aria-labels, semantic markup)

### 📁 Estructura del Proyecto
```
src/
├── components/     # Componentes reutilizables Astro
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Promociones.astro
│   ├── Productos.astro
│   └── Footer.astro
├── layouts/        # Layout principal
│   └── Layout.astro
├── pages/          # Páginas (index.astro)
│   └── index.astro
└── styles/         # CSS global con variables
    └── global.css
```

## 🚀 Comandos

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview
npm run preview
```

## 📦 Build Output
El sitio compilado está en la carpeta `docs/` listo para GitHub Pages.

## 🔧 Configuración de GitHub Pages

1. Ve a Settings > Pages en el repositorio
2. Selecciona la rama `cursor/landing-page-astro-ab6c` (o `main` después de merge)
3. Selecciona la carpeta `/docs`
4. Guarda los cambios
5. El sitio estará disponible en: https://mbarriosRojas.github.io/medicoadmin-admin/

## ✅ Checklist
- [x] Proyecto Astro creado
- [x] Configuración para GitHub Pages
- [x] HTML5 semántico
- [x] CSS con variables, Grid, Flexbox
- [x] Diseño responsive
- [x] Header con navegación
- [x] Slider de hero con auto-play
- [x] Sección de promociones
- [x] Sección de productos
- [x] Footer completo
- [x] Build exitoso
- [x] README actualizado
- [x] Scratchpad actualizado
- [x] .nojekyll agregado
```

## 🎯 Resultado

La landing page incluye:
- **Navegación responsive** con menú mobile
- **Slider automático** que cambia cada 5 segundos
- **4 promociones especiales** con badges de descuento
- **6 productos recientes** con categorías y precios
- **Footer completo** con redes sociales y contacto

## 🌐 Preview Local

Para probar localmente:
```bash
npm install
npm run dev
# Abrir http://localhost:4321
```

## 📊 Archivos Principales

### Componentes
- `src/components/Header.astro` - Navegación principal
- `src/components/Hero.astro` - Slider de hero
- `src/components/Promociones.astro` - Grid de promociones
- `src/components/Productos.astro` - Catálogo de productos
- `src/components/Footer.astro` - Pie de página

### Configuración
- `astro.config.mjs` - Configuración de Astro para GitHub Pages
- `src/styles/global.css` - Variables CSS y estilos globales

### Build
- `docs/` - Sitio compilado listo para despliegue
- `docs/.nojekyll` - Asegura que GitHub Pages sirva correctamente todos los archivos
