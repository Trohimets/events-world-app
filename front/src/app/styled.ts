import { createGlobalStyle } from "styled-components";

export const AppStyles = createGlobalStyle`




  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    padding: 0;
    margin: 0;
    font-family: 'TildaSans', Arial, Helvetica, sans-serif;
    color: #292828
   }
  
  ul,
  ol {
    list-style: none;
  }

  html {
    scroll-behavior: smooth;

    &:focus-within {
      scroll-behavior: smooth;
    }
  }

  body {
    min-height: 100%;
    background-color:  #fafafa;
    text-rendering: optimizespeed;
    /* max-width: 1920px; */
    margin-left: auto;
    margin-right: auto;
    &::-webkit-scrollbar {
      background: rgba(0, 66, 105, 0.06);
      border-radius: 4px;
      width: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: #ced8de;
      border-radius: 10px;
    }
    
  
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  img,
  picture,
  svg {
    display: block;
  }

  @media screen and (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
    }
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
  }
`;
