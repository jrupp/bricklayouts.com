module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    project: './tsconfig.json',
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    // Allow named exports without a default export
    'import/prefer-default-export': 'off',

    // React 17+ JSX transform doesn't require React in scope
    'react/react-in-jsx-scope': 'off',

    'react/no-danger': 'off',

    // Allow JSX in .tsx files
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],

    // Allow spreading props (common in UI component libraries)
    'react/jsx-props-no-spreading': 'off',

    // Allow function declarations and arrow functions for components
    'react/function-component-definition': ['error', {
      namedComponents: 'function-declaration',
      unnamedComponents: 'arrow-function',
    }],

    // Disable prop-types (TypeScript handles this)
    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    // Allow &reg; and similar entities alongside JSX expressions
    'react/jsx-one-expression-per-line': 'off',

    // Allow common HTML entities and quotes in JSX text
    'react/no-unescaped-entities': ['error', {
      forbid: ['>', '}'],
    }],

    // Allow devDependency imports in config and build-tool files
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'vite.config.ts',
        '**/*.config.ts',
        '**/*.config.js',
      ],
    }],
  },
  ignorePatterns: [
    'build/',
    'node_modules/',
    'src/index.css',
    'src/components/ui/',
    'scripts/',
    'cloudfront/',
  ],
};
