import tsParser from '@typescript-eslint/parser';

export default [
    {
      ignores: ['node_modules/', 'dist/', 'playwright-report/', 'test-results/'],
    },
    {
      files: ['playwright/**/*.ts'],
      languageOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        'no-unused-vars': 'warn',
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'no-restricted-properties': [
          'error',
          {
            object: 'test',
            property: 'only',
            message: 'Do not commit focused tests. Remove test.only.',
          },
          {
            object: 'describe',
            property: 'only',
            message: 'Do not commit focused suites. Remove describe.only.',
          },
          {
            object: 'it',
            property: 'only',
            message: 'Do not commit focused tests. Remove it.only.',
          },
        ],
      },
    },
  ];
  