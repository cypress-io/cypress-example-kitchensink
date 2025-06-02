import globals from 'globals'
import pluginJs from '@eslint/js'
import eslintPluginJsonc from 'eslint-plugin-jsonc'
import stylistic from '@stylistic/eslint-plugin'
import mochaPlugin from 'eslint-plugin-mocha'
import pluginCypress from 'eslint-plugin-cypress'

export default [
  pluginJs.configs.recommended,
  ...eslintPluginJsonc.configs['flat/recommended-with-json'],
  mochaPlugin.configs.recommended,
  pluginCypress.configs.recommended,
  stylistic.configs.recommended,
  {
    ignores: ['app/assets/js/{vendor,todo}/'],
  },
  {
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
      globals: {
        ...globals.node,
      },
    },
  },
]
