- install

```sh
yarn add tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- tailwind.config.js

```js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- ./src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- ./src/main.ts

```js
import './index.css'
```
