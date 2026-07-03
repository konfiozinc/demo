/* ============================================================
   TARJETA DIGITAL PREMIUM — LIZETH LOZANO
   JavaScript puro — sin frameworks
   ============================================================ */

(function () {
  "use strict";

  /* ---------------------------------------------------------
     CONFIGURACIÓN — EDITA AQUÍ LOS DATOS REALES DE LA CLIENTA
  --------------------------------------------------------- */
  const CONFIG = {
    nombre: "Lizeth Lozano",
    cargo: "Contadora Pública",
    telefono: "573000000000",       // WhatsApp y llamadas, formato internacional sin +
    telefonoVisible: "+57 300 000 0000",
    correo: "contacto@lizethlozano.com",
    ciudad: "Colombia",
    mensajeWhatsapp:
      "Hola Lizeth, vi tu tarjeta digital y quiero información sobre tus servicios contables y tributarios.",
    urlTarjeta: "https://konfiozinc.github.io/lizeth-lozano/",
  };

  /* ---------------------------------------------------------
     AÑO DINÁMICO EN FOOTER
  --------------------------------------------------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------------------------------------------------
     TOAST DE CONFIRMACIÓN
  --------------------------------------------------------- */
  const toast = document.getElementById("toast");
  let toastTimer = null;
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }

  /* ---------------------------------------------------------
     WHATSAPP
  --------------------------------------------------------- */
  function abrirWhatsapp() {
    const texto = encodeURIComponent(CONFIG.mensajeWhatsapp);
    const url = `https://wa.me/${CONFIG.telefono}?text=${texto}`;
    window.open(url, "_blank", "noopener");
  }

  document.getElementById("btnWhatsappHero")?.addEventListener("click", (e) => {
    e.preventDefault();
    abrirWhatsapp();
  });
  document.getElementById("fabWhatsapp")?.addEventListener("click", abrirWhatsapp);
  document.getElementById("contactWhatsapp")?.addEventListener("click", (e) => {
    e.preventDefault();
    abrirWhatsapp();
  });

  const contactWhatsappText = document.getElementById("contactWhatsappText");
  if (contactWhatsappText) contactWhatsappText.textContent = CONFIG.telefonoVisible;

  /* ---------------------------------------------------------
     LLAMAR
  --------------------------------------------------------- */
  document.getElementById("fabCall")?.addEventListener("click", () => {
    window.location.href = `tel:+${CONFIG.telefono}`;
  });

  /* ---------------------------------------------------------
     COMPARTIR (Web Share API con fallback a copiar enlace)
  --------------------------------------------------------- */
  document.getElementById("fabShare")?.addEventListener("click", async () => {
    const shareData = {
      title: `${CONFIG.nombre} | ${CONFIG.cargo}`,
      text: "Tu tranquilidad, mi compromiso. Conoce mis servicios contables y tributarios.",
      url: CONFIG.urlTarjeta,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(CONFIG.urlTarjeta);
        showToast("Enlace copiado al portapapeles");
      }
    } catch (err) {
      // usuario canceló el share nativo — no hacer nada
    }
  });

  /* ---------------------------------------------------------
     GUARDAR CONTACTO (descarga archivo .vcf — vCard)
  --------------------------------------------------------- */
  function generarVCard() {
    const partes = CONFIG.nombre.trim().split(" ");
    const nombrePila = partes[0] || CONFIG.nombre;
    const apellido = partes.slice(1).join(" ") || "";

    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `N:${apellido};${nombrePila};;;`,
      `FN:${CONFIG.nombre}`,
      `TITLE:${CONFIG.cargo}`,
      `TEL;TYPE=CELL:+${CONFIG.telefono}`,
      `EMAIL:${CONFIG.correo}`,
      `ADR:;;${CONFIG.ciudad};;;;Colombia`,
      `URL:${CONFIG.urlTarjeta}`,
      `NOTE:Declaración de renta, planeación tributaria, actualización de RUT, certificados de ingresos, asesoría contable y tributaria.`,
      "END:VCARD",
    ].join("\n");

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${CONFIG.nombre.replace(/\s+/g, "_")}.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("Contacto guardado");
  }

  document.getElementById("btnSaveHero")?.addEventListener("click", generarVCard);
  document.getElementById("fabSave")?.addEventListener("click", generarVCard);
  document.getElementById("btnVcard")?.addEventListener("click", generarVCard);

  /* ---------------------------------------------------------
     SCROLL HINT (hero → servicios)
  --------------------------------------------------------- */
  document.getElementById("scrollHint")?.addEventListener("click", () => {
    document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
  });

  /* ---------------------------------------------------------
     GALERÍA + LIGHTBOX
  --------------------------------------------------------- */
  const galleryImages = Array.from(document.querySelectorAll(".gallery-item img")).map(
    (img) => ({ src: img.getAttribute("src"), alt: img.getAttribute("alt") })
  );

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    updateLightboxImage();
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  function updateLightboxImage() {
    const item = galleryImages[currentIndex];
    if (!item) return;
    lightboxImg.setAttribute("src", item.src);
    lightboxImg.setAttribute("alt", item.alt);
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateLightboxImage();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
  }

  document.querySelectorAll(".gallery-item").forEach((btn, index) => {
    btn.addEventListener("click", () => openLightbox(index));
  });

  document.getElementById("lightboxClose")?.addEventListener("click", closeLightbox);
  document.getElementById("lightboxNext")?.addEventListener("click", nextImage);
  document.getElementById("lightboxPrev")?.addEventListener("click", prevImage);

  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  });

  /* ---------------------------------------------------------
     REVEAL ON SCROLL (secciones aparecen suavemente)
  --------------------------------------------------------- */
  const revealSections = document.querySelectorAll(".section, .section-alt");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealSections.forEach((section) => observer.observe(section));
})();
