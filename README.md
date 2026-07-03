# Tarjeta Digital Premium — Lizeth Lozano (Contadora Pública)

Tarjeta digital de una sola página. HTML5 + CSS3 + JavaScript puro. Sin frameworks (sin Bootstrap, React, Vue, Angular ni Tailwind).

## Estructura entregada

```
index.html
style.css
script.js
assets/img/       → foto de perfil y galería (placeholders a reemplazar)
assets/icons/      → set de íconos SVG (whatsapp, teléfono, compartir, etc.)
```

## Antes de publicar — reemplaza esto

1. **`assets/img/perfil.svg`** → foto profesional real de Lizeth (recomendado: `perfil.jpg`, cuadrada, mínimo 500×500px). Actualiza el `src` en el `<img id="heroPhoto">` dentro de `index.html`.
2. **`assets/img/galeria-1.svg` … `galeria-6.svg`** → hasta 6 fotos reales (oficina, atención al cliente, certificaciones, etc.). Mismos nombres de archivo o actualiza los `src` en la sección `#galeria` de `index.html`.
3. **Datos de contacto** → abre `script.js` y edita el bloque `CONFIG` al inicio del archivo:
   - `telefono` (WhatsApp/llamadas, formato `57XXXXXXXXXX`)
   - `telefonoVisible`
   - `correo`
   - `ciudad`
   - `urlTarjeta` (la URL final de GitHub Pages)
4. En `index.html`, el correo de contacto también aparece en el enlace `mailto:` de la sección de contacto — actualízalo si cambia.

## Publicar en GitHub Pages

1. Crea el repositorio (ej. `lizeth-lozano`) en la cuenta `konfiozinc`.
2. Sube todo el contenido de esta carpeta a la raíz del repositorio.
3. Activa GitHub Pages desde `Settings → Pages → Deploy from branch → main / root`.
4. La tarjeta quedará disponible en `https://konfiozinc.github.io/lizeth-lozano/`.

## Funcionalidad incluida

- Botón WhatsApp (hero, flotante y sección de contacto) con mensaje predefinido.
- Botón Guardar Contacto → genera y descarga un archivo `.vcf` (vCard) real.
- Botón Compartir → usa la Web Share API nativa (o copia el enlace si el navegador no la soporta).
- Botón Llamar (flotante).
- Galería con lightbox (visor a pantalla completa, navegación con flechas y teclado).
- Animaciones suaves de aparición al hacer scroll.
- 100% responsive (móvil, tablet, escritorio).
