# ![favicon proyecto](https://mercury.vteximg.com.br/arquivos/favicon2.webp) gratification-calculator
Proyecto para calcular propinas de los comensales en un restaurant; está hecho con tecnologías como React, Typescript y Tailwind CSS.

## Instalaciones
### Tailwind CSS

- Comandos para instalar:

```
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p
```

- Configuración:

👉 tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
👉 index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
