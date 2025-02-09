# 🃏 MinCard

## 🤔 목표

### 사용 스택

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
  ![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
  ![Vitest](https://img.shields.io/badge/-Vitest-252529?style=for-the-badge&logo=vitest&logoColor=FCC72B)

### 세부 내용

- 마우스에 따라 움직이는 카드 컴포넌트 만들기
- Storybook, MSW 라이브러리 연습

## ⛳ 구현할 기능 목록

### 구현

- 카드 컴포넌트 구현
- **React**와 **Vite**를 이용해 카드 컴포넌트 표시

### Storybook 라이브러리 활용

- 의도에 따라 잘 표시가 되고 있는지 **Storybook**을 활용해 점검
  - 컴포넌트 단계에서 빠른 피드백이 가능

### MSW 라이브러리 활용

- 카드 속 데이터를 **MSW**로 구현한 Mocking API로 전달
- **MSW**가 제대로 값을 mocking하고 있는 지 vitest로 점검
- 전달받은 데이터를 표시
  `

## 👉 결과

<div style="display: flex">
  <img src="./output/normal_output.gif" width=150px>
  <img src="./output/rare_output.gif" width=150px>
  <img src="./output/epic_output.gif" width=150px>
</div>

## 🔍 살펴 보기

<details>
<summary><b>👉 React + TypeScript + Vite</b></summary>

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```

</details>
