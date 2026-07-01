# Calixto Acordeón Mágico — Tarjeta Digital Premium

Proyecto de KONFÍO ZINC. Tarjeta digital premium (NO landing page) para el artista
Calixto Acordeón Mágico, lista para publicar en GitHub Pages.

## Estructura

```
/
├── index.html
├── style.css
├── script.js
├── manifest.json
└── assets/
    ├── img/
    │   ├── hero-calixto.jpg
    │   ├── og-image.jpg
    │   ├── favicon-32.png
    │   ├── icon-192.png
    │   ├── icon-512.png
    │   └── gallery/
    │       └── gallery-1.jpg ... gallery-8.jpg
    ├── video/
    │   └── (presentacion-1.mp4 ... presentacion-4.mp4)
    └── audio/
        └── (clip-1.mp3 ... clip-3.mp3)
```

## Pendiente antes de entregar al cliente final (marcado con // TODO en el código)

1. Reemplazar `assets/img/hero-calixto.jpg` y las 8 imágenes de `assets/img/gallery/`
   por fotos reales de Calixto (mismo nombre de archivo, o actualizar las rutas en
   `script.js` dentro de `GALLERY_IMAGES`).
2. Agregar los videos reales en `assets/video/` (ver `assets/video/LEEME.txt`).
3. Agregar los clips de audio reales en `assets/audio/` (ver `assets/audio/LEEME.txt`).
4. Confirmar cifras reales en la sección de estadísticas (`data-count` en `index.html`,
   sección "Sobre Calixto": años de trayectoria, eventos animados).
5. Cuando el cliente confirme Instagram/TikTok/YouTube, agregarlos en la sección
   "Sígueme" (`#redes`) y en "Botones rápidos".

## Publicar en GitHub Pages

1. Sube todo el contenido de esta carpeta a un repositorio bajo la cuenta `konfiozinc`
   (por ejemplo: `konfiozinc/calixto-acordeon-magico`).
2. En el repositorio: Settings → Pages → Source: rama `main`, carpeta `/ (root)`.
3. La tarjeta quedará disponible en:
   `https://konfiozinc.github.io/calixto-acordeon-magico/`

## Notas técnicas

- HTML5 + CSS3 + JavaScript vanilla (ES6), sin frameworks ni dependencias externas
  (excepto Google Fonts vía CDN).
- 100% responsive, mobile-first (probado en 360px, 390px, 414px y escalado a desktop).
- Animaciones con `IntersectionObserver`, respetando `prefers-reduced-motion`.
- Modal de video propio (no fullscreen nativo del navegador), con botón de cierre,
  cierre con Esc y cierre al hacer clic fuera.
- Reproductor de audio personalizado con waveform animado.
- Botón flotante de WhatsApp con mensaje prellenado.
- Botón "Compartir" con Web Share API y fallback a copiar enlace.
- Botón "Guardar contacto" genera un archivo `.vcf` (vCard) descargable.
