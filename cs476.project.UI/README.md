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

# Deploying your changes & Raising pull request

1. Pull the latest repo (git pull)
2. Create your branch
   a) Go to Source Control on left nav bar -> Click on 3 dots on top -> Branch -> Create Branch 
      ![image](https://github.com/longpdev/cs476.project/assets/56104171/8052d914-4718-4c1c-a6fd-83ff1f0972e3)
   b) name your branch naming convection - (yourname_task) -> Enter
      ![image](https://github.com/longpdev/cs476.project/assets/56104171/ce256ff6-55e8-40cf-90ef-4c2949683802)
      alternately use git command (git checkout -b ＜new-branch＞)
   c) Make your changes, the changes you make appear can be seen using the source control tab.
      Before commiting changes make sure app is running properly.
      Check all the unit test are passing once we start adding unit test. (pnpm run test)
   iv) Write a relvent commit message & click on commit -> confirm to push the changes -> publish branch
      ![image](https://github.com/longpdev/cs476.project/assets/56104171/822dac11-e4cd-4b1f-86cb-296c3cd9b31b)
      alternately use git commands :-
      git add -A to add all files new files, changes and removed files.
      git commit -m "Your message" to save the changes done in the files.
      git push -u origin master to send your committed changes to a remote repository, where the local branch is named master to the remote named origin         
      ![image](https://github.com/longpdev/cs476.project/assets/56104171/ce54af46-db54-48aa-a80c-f03c030a2c18)
   v) One of the team member will approve the changes and after appoval click on merge the changes.
