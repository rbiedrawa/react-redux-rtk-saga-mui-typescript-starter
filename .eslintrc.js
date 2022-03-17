module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prettier", "react", "import"],
  env: {
    browser: true,
    jest: true,
    es2021: true,
    node: true,
  },
  "extends": [
    'airbnb-base',
    "airbnb-typescript",
    'prettier',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    "plugin:storybook/recommended"
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
      "fragment": "Fragment",
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
      alias: [
        ['src', './src'],
      ],
    },
  },
  'rules': {
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: ['expect', 'testSaga', 'expectSaga'],
      },
    ],
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        'newlines-between': 'always',
        'alphabetize': { order: 'asc', caseInsensitive: true },
        'warnOnUnassignedImports': true
      },
    ],
    'import/default': 'off',
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,

    'react/function-component-definition': [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],

    "react/react-in-jsx-scope": "off",

    'jsx-a11y/anchor-is-valid': 'off',

    "no-param-reassign": 0,
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
  },
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
}