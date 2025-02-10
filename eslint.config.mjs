import globals from 'globals'
import pluginJs from '@eslint/js'
import eslintPluginJsonc from 'eslint-plugin-jsonc'
import stylisticJs from '@stylistic/eslint-plugin-js'
import mochaPlugin from 'eslint-plugin-mocha'
import pluginCypress from 'eslint-plugin-cypress/flat'

export default [
  pluginJs.configs.recommended,
  ...eslintPluginJsonc.configs['flat/recommended-with-json'],
  mochaPlugin.configs.flat.recommended,
  pluginCypress.configs.recommended,
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/js/indent': ['error', 2, { 'SwitchCase': 1, 'MemberExpression': 'off' }],
      'mocha/no-exclusive-tests': 'error',
      'mocha/no-skipped-tests': 'error',
      'mocha/no-mocha-arrows': 'off'
    },
    languageOptions: {
      globals: {
        ...globals.node
      },
    }
  }
]
