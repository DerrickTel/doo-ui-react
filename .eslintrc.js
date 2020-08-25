module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  globals: {
    APP_TYPE: true,
    page: true,
  },
  rules: {
    indent: [1, 2, { SwitchCase: 1 }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'comma-spacing': [2, { before: false, after: true }],
    'comma-style': [2, 'last'],
    semi: [2, 'always'],
    'semi-spacing': [2, { before: false, after: true }],
    'react/display-name': [0],
    'react/prop-types': [0],
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'react/jsx-indent-props': [1, 2],
    'react/jsx-indent': [
      1,
      2,
      {
        checkAttributes: true,
        indentLogicalExpressions: true,
      },
    ],
    'react/jsx-wrap-multilines': [
      1,
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    'react/jsx-closing-bracket-location': [
      1,
      {
        nonEmpty: 'tag-aligned',
        selfClosing: 'tag-aligned',
      },
    ],
    'jsx-quotes': [2, 'prefer-double'],
    'react/jsx-closing-tag-location': [1],
    'react/sort-comp': [
      1,
      {
        order: [
          'weapp',
          'static-variables',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render',
        ],
        groups: {
          weapp: ['config'],
        },
      },
    ],
    'react/jsx-tag-spacing': [
      1,
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'allow',
      },
    ],
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-sort-props': [
      1,
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: false,
        noSortAlphabetically: false,
      },
    ],
    'react/jsx-no-duplicate-props': [2, { ignoreCase: false }],
    // 代码风格
    'accessor-pairs': 2,
    'arrow-spacing': [2, { before: true, after: true }],
    'block-spacing': [2, 'always'],
    camelcase: [0, { properties: 'always' }],
    'dot-location': [2, 'property'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'key-spacing': [2, { beforeColon: false, afterColon: true }],
    'keyword-spacing': [2, { before: true, after: true }],
    'new-cap': [2, { newIsCap: true, capIsNew: false }],
    'no-console': [1, { allow: ['warn', 'error'] }],
    'no-eval': 1,
    'no-extend-native': 2, // 禁止扩展原生对象
    'no-floating-decimal': 2,
    'no-implied-eval': 2,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [2, { max: 1 }],
    'no-return-assign': [2, 'except-parens'],
    'func-call-spacing': 2,
    'no-trailing-spaces': 1,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, { defaultAssignment: false }], // 三元运算符号优化（实验）
    'no-whitespace-before-property': 2,
    'operator-linebreak': [
      2,
      'after',
      { overrides: { '?': 'before', ':': 'before' } },
    ],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-infix-ops': 1,
    'space-unary-ops': [2, { words: true, nonwords: false }],
    'spaced-comment': [
      2,
      'always',
      {
        markers: [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ',',
        ],
      },
    ],
    'wrap-iife': [2, 'any'],
    'prefer-const': 2,
    'no-debugger': 0,
    'object-curly-spacing': [2, 'always', { objectsInObjects: false }],
    'array-bracket-spacing': [2, 'never'],
    'import/first': 1,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'import/no-unresolved': [0],
    'explicit-module-boundary-types)': [0],
    'import/named': [0],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/type-annotation-spacing': [2],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/indent': 'off',
  },
  settings: {
    polyfills: ['fetch', 'promises', 'url', 'object-assign'],
    react: {
      version: 'detect',
    },
  },
};
