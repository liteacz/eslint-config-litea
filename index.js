module.exports = {
    extends: [
      require.resolve('eslint-plugin-vue/vue3-recommended'),
      require.resolve('@vue/eslint-config-airbnb'),
      require.resolve('@vue/eslint-config-typescript/recommended')
    ],

    rules: {
      // ------------------------------ //
      // --   General ESLint rules   -- //
      // ------------------------------ //

      'func-names': 'off',
      'space-before-function-paren': ['error', 'always'],
      'padded-blocks': ['error', 'never'],

      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'block-like', next: '*' },
        { blankLine: 'always', prev: '*', next: 'block-like' },
        { blankLine: 'always', prev: 'break', next: '*' },
      ],

      // ------------------------ //
      // --      Vue rules     -- //
      // ------------------------ //

      'vue/html-indent': ['error', 2, { attribute: 1, closeBracket: 0 }],
      'vue/padding-line-between-blocks': ['error', 'always'],

      'vue/html-closing-bracket-newline': [
        'error',
        {
          singleline: 'never',
          multiline: 'always',
        },
      ],

      'vue/singleline-html-element-content-newline': ['error', {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea', 'p', 'span', 'li'],
      }],

      'vue/max-attributes-per-line': ['error', {
        singleline: 1,

        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      }],

      'vue/attributes-order': ['error'],

      // ------------------------ //
      // --  Typescript rules  -- //
      // ------------------------ //

      '@typescript-eslint/no-unused-vars': ['error', {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      }],

      '@typescript-eslint/no-explicit-any': ['error', {}],

      '@typescript-eslint/camelcase': [
        'error', {
          properties: 'never',
        },
      ],
    }
}
