module.exports = {
  parser: 'babel-eslint',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  env: {
    es6: true,
    node: true,
  },

  extends: [
    // https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js
    'eslint:recommended',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/config/react.js
    'plugin:import/react',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/config/recommended.js
    'plugin:import/recommended',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/config/typescript.js
    'plugin:import/typescript',
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/src/index.js
    'plugin:jsx-a11y/recommended',
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/index.js
    'plugin:react/recommended',
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/index.js
    'plugin:unicorn/recommended',
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/src/index.js
    'plugin:jest/recommended',
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/src/index.js
    'plugin:jest/style',
    // https://github.com/prettier/eslint-config-prettier/blob/master/index.js
    'prettier',
    // https://github.com/prettier/eslint-config-prettier/blob/master/react.js
    'prettier/react',
    // https://github.com/prettier/eslint-config-prettier/blob/master/unicorn.js
    'prettier/unicorn',
  ],

  plugins: [
    // https://github.com/babel/eslint-plugin-babel
    'babel',
    // https://github.com/benmosher/eslint-plugin-import
    'import',
    // https://github.com/jest-community/eslint-plugin-jest
    'jest',
    // https://github.com/evcohen/eslint-plugin-jsx-a11y
    'jsx-a11y',
    // https://github.com/yannickcr/eslint-plugin-react
    'react',
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'unicorn',
    // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
    'react-hooks',
  ],

  settings: {
    'import/ignore': ['node_modules', '\\.(svg|json)$'],
    react: {
      version: 'detect',
    },
  },

  overrides: [
    {
      files: ['cypress/specs/*.{ts,tsx}'],
      rules: {
        'jest/expect-expect': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        errorOnUnsupportedTypeScriptVersion: true,
        project: `./tsconfig.json`,
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/interface-name-prefix': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'none',
            ignoreRestSiblings: true,
          },
        ],
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false,
          },
        ],
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/triple-slash-reference': [
          'error',
          { path: 'never', types: 'never', lib: 'never' },
        ],
        '@typescript-eslint/type-annotation-spacing': 'error',

        /**
         * Turning off equivalent eslint rules
         */
        camelcase: 'off',
        'no-array-constructor': 'off',
        // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
        'no-dupe-class-members': 'off',
        // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',

        'react/prop-types': 'off',

        // Fix issue with optional chaining: https://github.com/eslint/eslint/issues/10939
        'babel/no-unused-expressions': 'error',
        'no-unused-expressions': 'off',
      },
    },
    {
      files: [
        '**/__tests__/**/*.{js,ts,tsx}',
        '**/*.test.{js,ts,tsx}',
        '**/__mocks__/**/*.{js,ts,tsx}',
      ],
      env: {
        jest: true,
      },
      globals: {
        __dirname: false,
        global: false,
        setImmediate: false,
      },
      rules: {
        'jest/no-large-snapshots': 'error',
        'jest/valid-expect': 'error',
        'jsx-a11y/anchor-is-valid': 'off',
        'max-classes-per-file': 'off',
        'react/jsx-no-bind': 'off',
        'react/prop-types': 'off',
        'unicorn/filename-case': 'off',
      },
    },
  ],

  rules: {
    /**
     * General rules
     */
    'array-callback-return': 'warn',
    'arrow-body-style': 'error',
    camelcase: 'off',
    'default-case': ['error', { commentPattern: '^no default$' }],
    'dot-notation': ['error', { allowKeywords: true }],
    eqeqeq: ['error', 'smart'],
    'func-names': ['error', 'as-needed'],
    'func-style': 'off',
    'global-require': 'error',
    'lines-between-class-members': 'error',
    'max-classes-per-file': ['error', 1],
    'no-array-constructor': 'warn',
    'no-caller': 'warn',
    'no-cond-assign': ['warn', 'except-parens'],
    'no-console': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': ['error', { allowLoop: true, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: false,
      },
    ],
    'no-mixed-requires': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-negated-in-lhs': 'error',
    'no-nested-ternary': 'off',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-path-concat': 'error',
    'no-process-exit': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-properties': [
      'error',
      {
        object: 'require',
        property: 'ensure',
        message:
          'Please use import() instead. More info: https://reactjs.org/docs/code-splitting.html',
      },
      {
        object: 'System',
        property: 'import',
        message:
          'Please use import() instead. More info: https://reactjs.org/docs/code-splitting.html',
      },
    ],
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-return-assign': 'off',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'no-useless-return': 'error', // https://eslint.org/docs/rules/no-useless-return
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'prefer-destructuring': 'off', // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-object-spread': 'error', // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-rest-params': 'error', // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-spread': 'error', // https://eslint.org/docs/rules/prefer-spread
    radix: 'error',
    strict: ['error', 'global'],

    /**
     * eslint-plugin-import
     */
    'import/default': 'off',
    'import/dynamic-import-chunkname': [
      'error',
      {
        importFunctions: ['dynamicImport'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/first': 'error',
    'import/namespace': 'off', // This rule is very expensive to run and we don't get much benefit out of it
    'import/newline-after-import': 'error',
    'import/no-amd': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-named-as-default-member': 'off', // This rule is very expensive to run and we don't get much benefit out of it
    'import/no-named-as-default': 'off',
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
    'import/prefer-default-export': 'off',

    /**
     * eslint-plugin-jsx-a11y
     */
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['noHref', 'invalidHref'],
      },
    ],
    'jsx-a11y/no-autofocus': 'off',

    /**
     * eslint-plugin-react
     */
    'react/button-has-type': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/forbid-foreign-prop-types': ['error', { allowInPropTypes: true }],
    'react/jsx-no-bind': 'error',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    'react/jsx-sort-default-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],
    'react/no-access-state-in-setstate': 'error',
    'react/no-danger': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-typos': 'error',
    'react/no-unsafe': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/prop-types': [
      'error',
      {
        ignore: ['children'],
        customValidators: [],
      },
    ],
    'react/sort-comp': 'error',
    'react/sort-prop-types': [
      'error',
      {
        ignoreCase: true,
        sortShapeProp: true,
        requiredFirst: true,
      },
    ],
    'react/style-prop-object': 'error',

    /**
     * eslint-plugin-react-hooks
     */
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',

    /**
     * eslint-plugin-unicorn
     */
    'unicorn/expiring-todo-comments': 'off',
    'unicorn/explicit-length-check': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-process-exit': 'off',
    'unicorn/no-zero-fractions': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
};
