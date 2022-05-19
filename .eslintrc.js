module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-native/all",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  globals: {
    __DEV__: false,
    jasmine: false,
    beforeAll: false,
    afterAll: false,
    beforeEach: false,
    afterEach: false,
    test: false,
    expect: false,
    describe: false,
    jest: false,
    it: false,
  },
  plugins: [
    "react",
    "react-hooks",
    "react-native",
    "@typescript-eslint",
    "eslint-plugin-import",
    "eslint-plugin-import-helpers",
    "prettier",
    "simple-import-sort",
    "import",
  ],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-object-literal-type-assertion": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-floating-promises": 0,
    "eol-last": ["error", "always"],
    "no-multiple-empty-lines": "error",
    "comma-dangle": 0,
    "multiline-ternary": 0,
    "no-undef": 0,
    "no-unused-vars": 0,
    "no-use-before-define": "off",
    quotes: 0,
    "react-native/no-raw-text": 0,
    "react-native/sort-styles": [
      "error",
      "asc",
      { ignoreClassNames: false, ignoreStyleProperties: false },
    ],
    "react/no-unescaped-entities": 0,
    "react/prop-types": "off",
    "react/display-name": "off",
    "space-before-function-paren": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [
          // ".js",
          // ".jsx",
          ".ts",
          ".tsx",
        ],
      },
    ],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react-native/no-inline-styles": "off",
    "react-native/no-color-literals": "off",
    "@typescript-eslint/unbound-method": ["warn"],
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-interface": [
      "warn",
      {
        allowSingleExtends: true,
      },
    ],
    "@typescript-eslint/ban-types": [
      "warn",
      {
        types: {
          "{}": {
            message: "Use object instead",
            fixWith: "object",
          },
          object: {
            message: "Use object instead",
            fixWith: "object",
          },
        },
      },
    ],
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
};
