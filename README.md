# Cerativerse — React + TypeScript

Reinterpretación del sitio original [AlemXY/CeratiVerse](https://github.com/AlemXY/CeratiVerse) como aplicación React profesional y accesible. **Homenaje no oficial** a Gustavo Cerati y Soda Stereo.

## Desarrollo

```bash
npm install
npm run dev
npm run build
npm run preview
```

Node.js >= 20.19. Las páginas son `/`, `/historia`, `/albumes`; `public/_redirects` permite recargar rutas en Netlify.

## Mantenimiento

- Los textos, álbumes y rutas de imágenes se administran en `src/data/content.ts`.
- Las portadas y fotografías se sirven desde el repositorio original del autor mediante `raw.githubusercontent.com`, **no están copiadas en este ZIP**. Para mayor disponibilidad y rendimiento, migra únicamente los archivos con derechos de uso verificados a `public/assets/`, actualiza las rutas y optimiza a WebP/AVIF.
- La navegación y el pie están en `src/components/Shell.tsx`.
- Estilos responsive en `src/styles.css`.
- No hay reproducción musical, descargas, biografía oficial ni afiliación comercial.
- El material visual puede estar protegido por derechos de terceros; revisa las licencias antes de publicar o monetizar.

## Netlify

Conecta un repositorio nuevo; build `npm run build`, publish `dist`. No publiques sobre el repositorio original sin hacer respaldo.
