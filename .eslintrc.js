// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
      ],
      plugins: ['import'],
      rules: {
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-unused-vars': [
          2,
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 1,
        'react/display-name': 0,
        'import/first': 2,
        'import/no-unresolved': 'off',
        'import/order': [
          'error',
          {
            groups: ['external', 'internal'],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
              {
                pattern: 'pages/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: 'components/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: 'hooks/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: 'library/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: 'constants/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: 'styles/**',
                group: 'internal',
                position: 'after',
              },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'never',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
      },
    },
  ],
};
