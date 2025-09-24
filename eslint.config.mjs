import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginMocha from 'eslint-plugin-mocha'
import pluginCypress from 'eslint-plugin-cypress'
import stylistic from '@stylistic/eslint-plugin'
import json from '@eslint/json'

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
])
