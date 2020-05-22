/**
 * Создает объект конфигурации PostCSS.
 */
const createConfig = () => ({
  plugins: {
    autoprefixer: {},
  },
});

// Экспорт.
module.exports = { createConfig };
