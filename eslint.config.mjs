import config from '@rocketseat/eslint-config/node.mjs'
import vitest from '@vitest/eslint-plugin'

export default [
  ...config,
  {
    files: ['**/*.js', '**/*.ts'],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      camelcase: 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@stylistic/max-len': ['warn', {
        code: 120,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: false,
      }],

    },
    ignores: ['node_modules', 'build'],
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
  },
]
