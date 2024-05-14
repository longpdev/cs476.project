# Dev environment setup
## Installs
1. Visual Studio Code: https://code.visualstudio.com/
1. Git: https://git-scm.com/downloads
1. NodeJS: https://nodejs.org/en/download/current
1. npm (included with NodeJS installer)
1. pnpm: `npm i pnpm -g`
   
## Run the UI project
1. Clone the project to your local. If you are using window, try to place the repos folder near the root of your drives to avoid future complications. (For example: C/repos/cs476.project)
1. Open terminal or CMD if you are using window. Go into the cs476.project.UI folder and do `pnpm install`
1. On the same dir, do `pnpm dev`
1. Use the link created in your terminal to open the webpage

## Common Issues
1. There are some common issues with PowerShell terminal. If you see the `pnpm.ps1 cannot be loaded`. Try `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`. Aware that this is just a temporary fix and will only work for one session
1. pnpm command not found: `corepack enable pnpm` and select yes


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
