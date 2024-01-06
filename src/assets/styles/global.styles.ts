import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  :root {
    --main-color: #0079FF;
    --main-color-hover: #60ABFF;
  
    --white: #FFF;
  
    --gray-50: #F6F8FF;
    --gray-100: #697C9A;
    --gray-200: #4B6A9B;
    --gray-300: #2B3442;
    --gray-400: #1E2A47;
    --gray-500: #141D2F;
  
    --error-color: #F74646;
  
    --shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  }

  body[data-theme='light'] {
    --link-color: var(--white);
  }
  
  body[data-theme='dark'] {
    --link-color: var(--gray-300);
  }

  body {
    font-family: 'Space Mono', monospace;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--gray-50);
  }

  body[data-theme='dark'] {
    background-color: var(--gray-500);
  }

  a {
    font-family: 'Space Mono', monospace;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 300;
    color: var(--link-color);
    transition: all 0.3s;
    &:hover {
      color: var(--main-color-hover)
    }
  } 
`;
