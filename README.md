# 📝 Post Manager – Prueba Técnica Angular + Git

Este proyecto es una prueba técnica desarrollada con Angular para la gestión de publicaciones, consumiendo la API pública de JSONPlaceholder.

## 🚀 Tecnologías utilizadas

- Angular 16+ (standalone components)
- TypeScript con tipado estricto
- JSONPlaceholder API
- Reactive Forms
- Angular Router
- Git (manejo de ramas y commits)
- Iconify (librería de íconos)
- Toast notifications y Spinner
- SCSS modular por componente

---

## 🎯 Funcionalidades implementadas

### 📄 Listado de publicaciones
- Muestra máximo 10 publicaciones.
- Cada item muestra: título, usuario (`userId`) y contenido (`body`).
- Acciones disponibles: Ver, Editar y Eliminar (con confirmación).
- Íconos visuales para cada acción.

### 🔍 Ver detalle de publicación
- Vista individual con título, usuario y contenido.
- Diseño limpio con botón para volver al listado.

### ➕ Crear nueva publicación
- Formulario reactivo con validaciones:
  - `userId`: numérico obligatorio.
  - `title`: texto obligatorio (mínimo 5 caracteres).
  - `body`: obligatorio.
- Toast de éxito tras crear.

### ✏️ Editar publicación
- Precarga los datos en el formulario.
- Validaciones iguales a creación.
- Toast de éxito tras actualizar.

### 🗑️ Eliminar publicación
- Confirmación previa con mensaje simulado de éxito (la API no elimina realmente).

---

## 💎 Extras / Bonus implementados

- ✅ Loading spinner al cargar datos
- ✅ Notificaciones tipo toast
- ✅ Librería de íconos (`Iconify`)
- ✅ Estilos visuales en SCSS
- ✅ Código limpio y modular
- ✅ Navegación usando rutas standalone
- ✅ Sin estilos inline (`style="..."`)

---

## 📦 Estructura del proyecto

