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
  {
    ignores: ['app/assets/js/vendor/']
  },
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2, { 'SwitchCase': 1, 'MemberExpression': 'off' }],
      'mocha/no-exclusive-tests': 'error',
      'mocha/no-pending-tests': 'error',
      'mocha/no-mocha-arrows': 'off'
    },
    languageOptions: {
      globals: {
        ...globals.node
      },
    }
  }
]
