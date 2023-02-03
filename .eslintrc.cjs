module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['@plasticine-yang/eslint-config-typescript'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
  },
}
