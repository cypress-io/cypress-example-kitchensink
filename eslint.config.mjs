import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginMocha from 'eslint-plugin-mocha'
import pluginCypress from 'eslint-plugin-cypress'
import stylistic from '@stylistic/eslint-plugin'
import json from '@eslint/json'
import pluginYml from 'eslint-plugin-yml'
import pluginHtml from '@html-eslint/eslint-plugin'

export default defineConfig([
  globalIgnores(['app/assets/js/{vendor,todo}/']),
  {
    files: ['**/*.{,m}js'],
    extends: [
      js.configs.recommended,
      pluginMocha.configs.recommended,
      pluginCypress.configs.recommended,
      stylistic.configs.recommended,
    ],
    rules: {
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/indent': ['error', 2, { SwitchCase: 1, MemberExpression: 'off' }],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/space-before-function-paren': ['error', 'always'],
      'mocha/no-exclusive-tests': 'error',
      'mocha/no-pending-tests': 'error',
      'mocha/no-mocha-arrows': 'off',
    },
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ['**/*.json'],
    ignores: ['package-lock.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.yml'],
    plugins: { yml: pluginYml },
    language: 'yml/yaml',
    extends: ['yml/recommended'],
    rules: {
      'yml/indent': ['error', 2],
      'yml/key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'yml/no-multiple-empty-lines': ['error', { max: 1 }],
      'yml/spaced-comment': ['error', 'always'],
    },
  },
  {
    // https://html-eslint.org/docs/getting-started
    files: ['app/**/*.html'],
    plugins: { html: pluginHtml },
    language: 'html/html',
    extends: ['html/recommended'], // https://html-eslint.org/docs/rules
    rules: {
      'html/attrs-newline': ['off'],
      'html/element-newline': ['off'],
      'html/indent': ['off'],
      'html/no-extra-spacing-attrs': ['off'],
      'html/quotes': ['off'],
      'html/require-closing-tags': ['off'],
    },
  },
  {
    files: ['app/commands/{cookies,files,traversal}.html'],
    rules: {
      'html/no-duplicate-id': ['off'],
    },
  },
])
