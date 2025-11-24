# Documentación Web

Una web ligera, rápida, responsive y fácil de mantener, centrada en publicar información de ayuda, guías y documentación.

## 🚀 Características

- **Next.js 14** con App Router
- **TypeScript** para type safety
- **TailwindCSS** para estilos
- **MDX** para contenido
- **Modo oscuro/claro** con next-themes
- **SEO optimizado** con metadata, sitemap y robots.txt
- **Búsqueda interna** client-side
- **Menú lateral** en páginas de guías
- **Breadcrumbs** automáticos
- **Animaciones suaves** con Framer Motion
- **SSG (Static Site Generation)** para mínimo coste de hosting

## 📋 Requisitos Previos

- Node.js 18 o superior
- npm, yarn o pnpm

## 🛠️ Instalación

1. Clona el repositorio o descarga el proyecto:

```bash
cd documentacion-web
```

2. Instala las dependencias:

```bash
npm install
# o
yarn install
# o
pnpm install
```

## 🏃 Desarrollo Local

Para ejecutar el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
documentacion-web/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   ├── globals.css        # Estilos globales
│   ├── guias/             # Páginas de guías
│   ├── blog/              # Páginas de blog
│   ├── sobre-mi/          # Página sobre mí
│   ├── contacto/          # Página de contacto
│   ├── sitemap.ts         # Generación de sitemap
│   └── robots.ts          # Configuración de robots.txt
├── components/            # Componentes React
│   ├── navbar.tsx         # Barra de navegación
│   ├── footer.tsx         # Pie de página
│   ├── theme-provider.tsx # Proveedor de tema
│   ├── breadcrumbs.tsx    # Breadcrumbs
│   ├── sidebar.tsx         # Menú lateral
│   ├── search-bar.tsx     # Barra de búsqueda
│   └── mdx-content.tsx     # Renderizador MDX
├── content/               # Contenido MDX
│   ├── guias/             # Archivos MDX de guías
│   └── blog/              # Archivos MDX de blog
├── lib/                   # Utilidades
│   ├── mdx.ts             # Funciones para MDX
│   └── utils.ts           # Utilidades generales
├── next.config.js         # Configuración de Next.js
├── tailwind.config.ts     # Configuración de Tailwind
└── package.json           # Dependencias
```

## 📝 Crear Nuevo Contenido

### Crear una Nueva Guía

1. Crea un archivo `.mdx` o `.md` en `content/guias/`:

```markdown
---
title: 'Título de la Guía'
description: 'Descripción breve de la guía'
date: '2024-01-15'
author: 'Tu Nombre'
tags: ['tag1', 'tag2']
category: 'Categoría'
---

# Título de la Guía

Contenido de la guía en Markdown...
```

2. El archivo se generará automáticamente en `/guias/tu-archivo`

### Crear un Nuevo Artículo de Blog

1. Crea un archivo `.mdx` o `.md` en `content/blog/` con el mismo formato de frontmatter
2. El archivo se generará automáticamente en `/blog/tu-archivo`

## 🎨 Personalización

### Colores y Tema

Los colores se configuran en `app/globals.css` mediante variables CSS. Puedes modificar los valores en `:root` y `.dark` para personalizar el tema.

### Metadata y SEO

Edita `app/layout.tsx` para cambiar la metadata del sitio:

```typescript
export const metadata: Metadata = {
  title: {
    default: 'Tu Título',
    template: '%s | Tu Título',
  },
  description: 'Tu descripción',
  // ...
}
```

### Configuración del Sitemap

Edita `app/sitemap.ts` y cambia `NEXT_PUBLIC_SITE_URL` o actualiza la variable de entorno:

```bash
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

## 🏗️ Build para Producción

Para generar la versión estática:

```bash
npm run build
# o
yarn build
# o
pnpm build
```

Los archivos estáticos se generarán en la carpeta `out/`.

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. Vercel detectará automáticamente Next.js
3. El despliegue se realizará automáticamente en cada push

**Nota:** Asegúrate de que `next.config.js` tenga `output: 'export'` para generar sitios estáticos.

### Netlify

1. Conecta tu repositorio a [Netlify](https://netlify.com)
2. Configura el build command: `npm run build`
3. Configura el publish directory: `out`
4. Despliega

### Despliegue Manual

1. Ejecuta `npm run build`
2. Sube la carpeta `out/` a tu servidor estático
3. Configura tu servidor para servir archivos estáticos

## 📦 Dependencias Principales

- **next**: Framework React
- **react** / **react-dom**: Biblioteca React
- **@next/mdx**: Soporte MDX para Next.js
- **@mdx-js/mdx**: Compilador MDX
- **tailwindcss**: Framework CSS
- **framer-motion**: Animaciones
- **next-themes**: Gestión de temas
- **lucide-react**: Iconos
- **gray-matter**: Parseo de frontmatter

## 🔧 Solución de Problemas

### Error al compilar MDX

Asegúrate de que los archivos MDX tengan el frontmatter correcto y que las dependencias estén instaladas.

### Estilos no se aplican

Verifica que `tailwind.config.ts` incluya todas las rutas correctas y que `globals.css` esté importado en `layout.tsx`.

### Búsqueda no funciona

La búsqueda es client-side y requiere que los posts se pasen como props. Asegúrate de pasar el array de posts al componente `SearchBar`.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Contacto

Para preguntas o sugerencias, visita la página de [contacto](/contacto).

---

¡Disfruta creando documentación! 🎉

