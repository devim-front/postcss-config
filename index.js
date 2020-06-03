/**
 * Создает объект конфигурации PostCSS.
 */
const createConfig = () => ({
  plugins: {
    autoprefixer: {},
    'postcss-global-import': {},
  },
});

// Экспорт.
module.exports = { createConfig };
