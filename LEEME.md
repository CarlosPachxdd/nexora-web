# Cómo aplicar estos cambios a tu repo

## 1. Copia estos 6 archivos a tu proyecto
Reemplaza los archivos existentes en las mismas rutas (misma estructura de carpetas
que ya tienes en `src/`):

- `src/components/layout/FloatingWhatsApp.jsx`
- `src/components/layout/Navbar.jsx`
- `src/context/UserContext.jsx`
- `src/hooks/useWhatsAppLink.js`
- `src/pages/PortfolioCategory.jsx`
- `src/utils/whatsapp.js`

## 2. Borra este archivo (ya no se usa, era un duplicado)
```
src/app/providers.jsx
```
Si la carpeta `src/app/` queda vacía después de borrarlo, también puedes borrar la carpeta.

## 3. Sube los cambios a GitHub
Desde la raíz de tu proyecto local:

```bash
git add -A
git commit -m "Fix: precarga de datos por URL + sessionStorage + mensaje de WhatsApp por ruta"
git push
```

## 4. Redeploy a Firebase
```bash
npm run build
firebase deploy --only hosting
```

## 5. Cómo probarlo
Abre en el navegador (cambia el dominio por el tuyo):
```
https://tusitio.com/social/bodas?nombre=Juan&evento=boda&source=messenger
```
Dale clic al botón de WhatsApp (flotante, del navbar, o el de la página de detalle)
y el mensaje debe decir algo como:

> Hola Carlos, soy Juan. Vi el portafolio de Bodas y quiero cotizar. Llegué desde messenger.

Si recargas la página sin los parámetros en la URL, el nombre/evento debe seguir
apareciendo (gracias al sessionStorage) — se resetea solo si cierras la pestaña
o abres un link nuevo con otros datos.
