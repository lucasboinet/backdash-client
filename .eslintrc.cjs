module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  plugins: [
    'vue'
  ],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}