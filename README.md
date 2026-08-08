# 🎬 GifsApp

Buscador y explorador de gifs con historial de búsquedas.

## 📖 ¿Qué es?

GifsApp es una aplicación web para buscar y explorar gifs animados usando la API pública de **Giphy**. Tiene tres vistas principales:

- **Trending** — muestra los gifs más populares del momento en un grid infinito con scroll.
- **Buscador** — permite buscar gifs por nombre, descripción o tags, y guarda cada búsqueda en un historial.
- **Historial** — cada búsqueda queda disponible como acceso rápido en el menú lateral, con sus resultados guardados en `localStorage`.

Ya disponible en (https://gifsapp.pages.dev/)

## 📸 Screenshots

<p align="center">
  <img src="https://github.com/user-attachments/assets/486c220e-3d6f-4449-b92a-31e9174dc8a2" width="1300" height="600"/>
  <img src="https://github.com/user-attachments/assets/8ef569c5-6795-4e64-a164-154ddffab992" width="1300" height="600"/>
</p>

## 🛠️ Stack

| Capa | Tecnología |
|---|---|
| Framework | Angular 22 (standalone components + signals) |
| Estilos | Tailwind CSS 4 |
| HTTP | Angular HttpClient + RxJS |
| API externa | [Giphy API](https://developers.giphy.com/) |
| Persistencia | LocalStorage (historial de búsquedas) |
| Iconos | Font Awesome |
| Deploy | Cloudflare Pages |

## ✨ Funcionalidades

- 🔥 Trending de gifs con scroll infinito, agrupados de a 3 por columna
- 🔎 Buscador por texto con resultados en grid responsive
- 🕓 Historial de búsquedas persistente, accesible desde el menú lateral
- 📱 Diseño responsive — sidebar fijo en desktop, menú desplegable (drawer) en mobile
- ⚡ Manejo de estado 100% con signals de Angular (sin NgRx ni librerías extra)
- 🧩 Arquitectura por features (`gifs/pages`, `gifs/components`, `gifs/services`)

## 🗂️ Vistas disponibles

| Ruta | Descripción |
|---|---|
| `/dashboard/trending` | Grid de gifs populares con scroll infinito |
| `/dashboard/search` | Buscador de gifs por texto |
| `/dashboard/history/:query` | Resultados guardados de una búsqueda anterior |

## 📄 Licencia

Todos los derechos reservados · Moisés Abarca · 2026
