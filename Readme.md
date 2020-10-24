# ParcelCI Info

Instalar parcel:

```bash
npm install -g parcel-bundler
```

Iniciar proyecto:

```bash
npm init
```

Creamos estructura básica de:

```bash
index.hmtl
index.js
style.css
```

Instalar parcel, rimraf y npm-run-all de manera local:

```bash
npm install parcel-bundler --save-dev
npm install --save-dev rimraf npm-run-all
```

En la seccion de scripts del package.json añadimos:

```json
"dev": "npm-run-all clean parcel:dev",
"build": "npm-run-all clean parcel:build",
"parcel:dev": "parcel index.html",
"parcel:build": "parcel build index.html",
"clean": "rimraf dist .cache .cache-loader"
```

Creamos el fichero .browserslistrc para indicar la compatibilidad que tiene que mantener babel incluido en parcel con los navegadores y añadimos:

```bash
last 4 version
> 2%
not dead
IE 11
```

Para CSS añadimos la dependencia `npm install --save-dev autoprefixer@9.8.6 ` y creamos el fichero .postcssrc y le añadimos:
*Problema con la última versión de autoprefixer y parcel ya que tiene una versión no compatible de postcss*

```json
{
  "plugins": {
    "autoprefixer": true
  }
}
```

Para conectarlo a netlify debemos indicarle como comando de construccion:
`npm run build`
Como direcctorio de despliegue la carpeta `dist` .

Para probar la aplicación en desarrollo en local:
`npm run dev`
