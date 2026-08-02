import js from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactNative from 'eslint-plugin-react-native';
import tseslint from 'typescript-eslint';

export default [
  // 1. Files to completely ignore
  { 
    ignores: ['node_modules/**', 'android/**', 'ios/**', 'build/**', 'dist/**', '.expo/**'] 
  },
  
  // 2. Base recommended configurations
  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  
  // 3. React Native and custom rule configurations
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      'react-hooks': pluginReactHooks,
      'react-native': pluginReactNative,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // React Native rules
      'react-native/no-unused-styles': 'warn',
      'react-native/split-platform-components': 'warn',
      'react-native/no-inline-styles': 'warn',
      'react-native/no-color-literals': 'warn',
      
      // General React rule adjustments for React Native
      'react/react-in-jsx-scope': 'off', // Not needed in modern React/React Native
      'react/display-name': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  
  // 4. Prettier config MUST be last to override formatting rules
  configPrettier,
];
