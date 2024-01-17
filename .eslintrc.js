const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  extends: [
    'airbnb',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-unused-expressions': OFF,
    quotes: [ERROR, 'single'],
    semi: [ERROR, 'always'],
    'no-use-before-define': OFF,
    camelcase: OFF,
    'no-shadow': OFF,
    'max-len': ['error', {
      code: 180,
      ignoreRegExpLiterals: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
      ignoreComments: true,
      ignoreStrings: true,
    }],
    'import/order': [
      WARNING,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: '{react*,react*/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '{next*,next*/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@sentry/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '{@kmong-*/**,@kmong/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '{msw/**,msw}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'next'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/export': OFF,
    'import/named': OFF,
    'import/no-self-import': OFF,
    'import/no-cycle': OFF,
    'import/no-named-as-default': OFF,
    'import/no-named-as-default-member': OFF,
    'import/no-useless-path-segments': OFF,
    'import/no-unresolved': OFF,
    'import/extensions': OFF,
    'import/prefer-default-export': OFF,

    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': [WARNING, {
      additionalHooks: 'useRecoilCallback',
    }],
    'react/require-default-props': OFF,
    'react/jsx-props-no-spreading': OFF,
    'react/jsx-filename-extension': [
      ERROR,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-wrap-multilines': ERROR,
    'react/jsx-max-props-per-line': [ERROR, { maximum: 1 }],
    'react/no-array-index-key': OFF,
    'react/react-in-jsx-scope': OFF,
    '@typescript-eslint/padding-line-between-statements': [
      ERROR,
      { blankLine: 'always', prev: '*', next: ['return', 'interface', 'type', 'function', 'try'] },
    ],
    'import/no-extraneous-dependencies': [OFF, { devDependencies: ['**/*.test.js', '**/*.spec.js'] }],

    '@typescript-eslint/consistent-type-definitions': [ERROR, 'interface'],
    '@typescript-eslint/no-inferrable-types': OFF,
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/no-unused-expressions': ERROR,
    '@typescript-eslint/ban-ts-ignore': OFF,
    '@typescript-eslint/no-var-requires': OFF,
    '@typescript-eslint/no-shadow': ERROR,
    '@typescript-eslint/object-curly-spacing': [ERROR, 'always'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/member-delimiter-style': 'warn',
    'jsx-a11y/label-has-associated-control': [
      ERROR,
      {
        required: {
          every: ['nesting', 'id'],
        },
      },
    ],
    'import/no-duplicates': [ERROR, { considerQueryString: true }],
    'no-unreachable': ERROR,
    // img 태그를 무조건 NextImage로 강제하는 룰 제거
    '@next/next/no-img-element': OFF,
    // 함수 파라미터에 줄바꿈이 있는경우 강제 줄바꿈
    'function-paren-newline': [ERROR, 'multiline'],
    // export { default } ... 을 더 이상 사용하지 않도록 권장 하는 룰 같은데. 많은 불편점이 있을 것으로 보여 제거 합니다.
    'no-restricted-exports': OFF,
    /**
     * 의미없는 Fragment 제거하시오
     * @param allowExpressions 옵션을 주어 string 한정 허용해주었음, 또한 그리 크지 않기에 ERROR가 아닌 WARNING으로 변경
     * 하지만 여기서 하나 예외로 둘것은 children 이 단순 string 일 경우
     */
    'react/jsx-no-useless-fragment': [WARNING, { allowExpressions: true }],
    // emotion과 함께하는 css property 는 eslint 에서 예외처리
    'react/no-unknown-property': [ERROR, { ignore: ['css'] }],
    'react/no-unstable-nested-components': [
      ERROR,
      {
        allowAsProps: true,
      },
    ],
    'import/no-anonymous-default-export': OFF,
    'react/jsx-indent': [ERROR, 2, {
      // props 내부의 jsx 에서도 들여쓰기 강제
      checkAttributes: true,
      // 조건 연산자를 사용할 경우, 들여쓰기 강제
      indentLogicalExpressions: true,
    }],
    // handle 네이밍 강제
    'react/jsx-handler-names': [ERROR, {
      // 내려받은 이벤트 핸들러의 prop key 대해 on|handle 네이밍 강제
      eventHandlerPropPrefix: 'on',
      // 내려주는 이벤트 핸들러 prop key 이름에 대해 on|handle 네이밍 강제
      eventHandlerPrefix: '(on|handle)',
      // local variable 에 대해서만 네이밍 강제
      checkLocalVariables: true,
      // inline 함수에 대해선 네이밍 강제하지 않음
      checkInlineFunction: false,
    }],
    // props 정렬 강제
    'react/jsx-sort-props': [WARNING, {
      // callback props 는 마지막에 위치
      callbacksLast: true,
      // shorthand props 는 처음에 위치
      shorthandFirst: true,
      // react 예약 props 는 처음에 위치
      reservedFirst: ['key', 'ref'],
      // 알파벳순으로 정렬하지 않음
      noSortAlphabetically: true,
    }],
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': OFF,
      },
    },
    {
      files: ['**/*.test.*'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: {
        'jest/no-mocks-import': OFF,
        'jest/no-hooks': OFF,
        'function-paren-newline': OFF,
        'react/jsx-closing-tag-location': OFF,
      },
    },
  ],
};
