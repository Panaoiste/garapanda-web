# Guía de Instalación de Node.js y npm

## 🔧 Problema
El terminal no reconoce los comandos `node` o `npm`. Esto significa que Node.js no está instalado o no está en el PATH del sistema.

## ✅ Solución: Instalar Node.js

### Opción 1: Instalación Directa (Recomendada para principiantes)

1. **Descargar Node.js**
   - Ve a: https://nodejs.org/
   - Descarga la versión **LTS** (Long Term Support) - recomendada
   - Para Windows, descarga el instalador `.msi`

2. **Instalar Node.js**
   - Ejecuta el archivo descargado
   - Sigue el asistente de instalación
   - **IMPORTANTE**: Asegúrate de marcar la opción "Add to PATH" durante la instalación
   - Completa la instalación

3. **Verificar la instalación**
   - Cierra y vuelve a abrir el terminal (PowerShell o CMD)
   - Ejecuta:
     ```powershell
     node --version
     npm --version
     ```
   - Deberías ver números de versión (ej: v20.10.0 y 10.2.3)

### Opción 2: Usando Chocolatey (Gestor de paquetes de Windows)

Si tienes Chocolatey instalado:

```powershell
choco install nodejs
```

### Opción 3: Usando winget (Windows Package Manager)

```powershell
winget install OpenJS.NodeJS.LTS
```

## 🔄 Después de Instalar

1. **Cierra y vuelve a abrir el terminal**
   - Es importante para que los cambios en el PATH surtan efecto

2. **Verifica la instalación**
   ```powershell
   node --version
   npm --version
   ```

3. **Navega a tu proyecto**
   ```powershell
   cd C:\Users\rmedinad\documentacion-web
   ```

4. **Instala las dependencias del proyecto**
   ```powershell
   npm install
   ```

5. **Ejecuta el proyecto**
   ```powershell
   npm run dev
   ```

## 🐛 Si aún no funciona después de instalar

### Verificar que Node.js está instalado
1. Busca "Node.js" en el menú de inicio de Windows
2. Si aparece, está instalado pero puede no estar en el PATH

### Agregar Node.js al PATH manualmente

1. Busca "Variables de entorno" en Windows
2. Selecciona "Editar las variables de entorno del sistema"
3. Haz clic en "Variables de entorno"
4. En "Variables del sistema", busca "Path" y haz clic en "Editar"
5. Haz clic en "Nuevo" y agrega:
   ```
   C:\Program Files\nodejs\
   ```
   (Ajusta la ruta si instalaste Node.js en otra ubicación)

6. Haz clic en "Aceptar" en todas las ventanas
7. **Cierra y vuelve a abrir el terminal**

### Verificar la ubicación de Node.js

Ejecuta en PowerShell:
```powershell
Get-Command node | Select-Object -ExpandProperty Source
```

Esto te mostrará dónde está instalado Node.js.

## 📝 Versiones Recomendadas

- **Node.js**: v18.x o superior (LTS recomendado)
- **npm**: Se instala automáticamente con Node.js

## ✅ Verificación Final

Después de instalar, ejecuta estos comandos para verificar:

```powershell
node --version    # Debe mostrar algo como: v20.10.0
npm --version     # Debe mostrar algo como: 10.2.3
```

Si ambos comandos funcionan, ¡estás listo para continuar con el proyecto!


