# Templates Webpages

Repositorio de plantillas web profesionales organizadas por tipo de negocio.
Cada plantilla es una página estática construida con Vite + Tailwind CSS v4.

## Stack
- Vite + Tailwind CSS v4
- HTML semántico y accesible
- Sin frameworks JS (vanilla salvo que se indique)
- GitHub Pages para preview

## Estructura del proyecto
```
templates_webpages/
├── _shared/           ← estilos y componentes reutilizables (OPCIONAL)
├── parrilla/
│       ├── index.html
│       ├── src/
│       │     ├──css/styles.css
│       │     ├──img/
│       └── preview.png
├── barberia/
└── hamburgueseria/
```

## Antes de crear cualquier plantilla
1. Cargar la skill `frontend-design`
2. Definir dirección estética clara antes de escribir código
3. Revisar con `web-design-guidelines` despues de terminar cada página y cuando se termine de realizar un cambio pedido.

## Estándares de cada plantilla
- Cada plantilla vive en su propia carpeta con `index.html`
- Mobile-first obligatorio
- Colores definidos como CSS variables
- Incluir `preview.png` al terminar
- Sin dependencias JS innecesarias

## Secciones mínimas por plantilla
- Hero con imagen de fondo y CTA
- Sección principal (menú, servicios, productos según el negocio)
- Galería o highlights
- Contacto
- Footer

## Commits
- Commits enfocados por plantilla o cambio concreto
- Nunca `git add .` con múltiples plantillas juntas
- Formato: `feat: agrego plantilla parrilla`
           `fix: corrijo responsive en peluqueria`
           `update: mejoro hero en pizzeria`

## Lo que NO hacer
- No usar Inter, Roboto o Arial como fuente principal
- No usar gradientes púrpura genéricos
- No mezclar cambios de múltiples plantillas en un solo commit
- No subir node_modules ni archivos .env