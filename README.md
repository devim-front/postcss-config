# DevimFront: PostCSS config

Конфигурация PostCSS для проектов на TS+React.

## Установка

1. Подключите библиотеку в dev-зависимости проекта:

```bash
npm i -D @devim-front/postcss-config
```

2. Создайте файл `.postcssrc.js` с указанным содержимым:

```javascript
const { createConfig } = require('@devim-front/postcss-config');

module.exports = createConfig;
```

3. Создайте файл `.browserslistrc` в корне проекта со следующим содержимым:

```
defaults
```

Также вы можете указать собственный список браузеров, который должен поддерживать ваш проект.
