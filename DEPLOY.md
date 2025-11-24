# Guía de Despliegue

Esta guía te ayudará a desplegar tu sitio de documentación en diferentes plataformas.

## 🚀 Vercel (Recomendado)

Vercel es la plataforma recomendada para Next.js y ofrece despliegues gratuitos.

### Pasos:

1. **Preparar el repositorio**
   - Asegúrate de que tu código esté en GitHub, GitLab o Bitbucket

2. **Conectar con Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Haz clic en "Add New Project"
   - Selecciona tu repositorio

3. **Configuración del proyecto**
   - Vercel detectará automáticamente Next.js
   - Framework Preset: Next.js
   - Build Command: `npm run build` (o `yarn build` / `pnpm build`)
   - Output Directory: `out`
   - Install Command: `npm install` (o `yarn install` / `pnpm install`)

4. **Variables de entorno (opcional)**
   - Si usas variables de entorno, agrégalas en la configuración del proyecto
   - Ejemplo: `NEXT_PUBLIC_SITE_URL=https://tudominio.vercel.app`

5. **Desplegar**
   - Haz clic en "Deploy"
   - Vercel construirá y desplegará tu sitio automáticamente

### Dominio personalizado:

1. Ve a la configuración del proyecto en Vercel
2. Selecciona "Domains"
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar los DNS

## 🌐 Netlify

Netlify también ofrece despliegues gratuitos para sitios estáticos.

### Pasos:

1. **Preparar el repositorio**
   - Asegúrate de que tu código esté en un repositorio Git

2. **Conectar con Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Inicia sesión con tu cuenta de GitHub
   - Haz clic en "Add new site" > "Import an existing project"
   - Selecciona tu repositorio

3. **Configuración del build**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Netlify detectará automáticamente Next.js si tienes `netlify.toml`

4. **Desplegar**
   - Haz clic en "Deploy site"
   - Netlify construirá y desplegará tu sitio

### Dominio personalizado:

1. Ve a "Domain settings" en tu sitio
2. Haz clic en "Add custom domain"
3. Sigue las instrucciones para configurar los DNS

## 📦 Despliegue Manual (Servidor Estático)

Si prefieres desplegar manualmente en tu propio servidor:

### Pasos:

1. **Construir el sitio**
   ```bash
   npm run build
   ```

2. **Subir archivos**
   - La carpeta `out/` contiene todos los archivos estáticos
   - Sube el contenido de `out/` a tu servidor web

3. **Configurar el servidor**
   - Asegúrate de que tu servidor esté configurado para servir archivos estáticos
   - Configura las reglas de reescritura para SPA (Single Page Application)

### Ejemplo con Nginx:

```nginx
server {
    listen 80;
    server_name tudominio.com;
    root /var/www/documentacion-web/out;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Ejemplo con Apache (.htaccess):

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 🔧 Optimizaciones Post-Despliegue

### 1. Configurar CDN

Para mejorar el rendimiento, considera usar un CDN:
- Cloudflare (gratis)
- Vercel Edge Network (incluido)
- Netlify CDN (incluido)

### 2. Configurar HTTPS

Asegúrate de que tu sitio use HTTPS:
- Vercel y Netlify lo configuran automáticamente
- Para servidores propios, usa Let's Encrypt

### 3. Configurar Caché

Configura headers de caché para mejorar el rendimiento:

```nginx
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

## 📊 Monitoreo

### Analytics (Opcional)

Puedes agregar Google Analytics o similar:

1. Crea una cuenta en Google Analytics
2. Obtén tu ID de seguimiento
3. Agrega el script en `app/layout.tsx`

### Performance Monitoring

- Vercel Analytics (incluido en planes de pago)
- Google PageSpeed Insights
- Lighthouse CI

## 🐛 Troubleshooting

### El sitio no se construye

- Verifica que todas las dependencias estén instaladas
- Revisa los logs de build para errores
- Asegúrate de que `next.config.js` tenga `output: 'export'`

### Las rutas no funcionan

- Verifica la configuración de reescritura en tu servidor
- Asegúrate de que `index.html` se sirva para todas las rutas

### Los estilos no se cargan

- Verifica que `globals.css` esté importado en `layout.tsx`
- Asegúrate de que Tailwind esté configurado correctamente

## 💰 Costos

### Vercel (Plan Gratuito)
- ✅ 100 GB de ancho de banda
- ✅ Despliegues ilimitados
- ✅ HTTPS automático
- ✅ Dominio personalizado

### Netlify (Plan Gratuito)
- ✅ 100 GB de ancho de banda
- ✅ 300 minutos de build por mes
- ✅ HTTPS automático
- ✅ Dominio personalizado

### Servidor Propio
- Depende de tu proveedor de hosting
- Generalmente $5-10/mes para hosting básico

---

¡Tu sitio debería estar funcionando ahora! 🎉

