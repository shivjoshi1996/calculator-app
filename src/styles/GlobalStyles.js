import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
}

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  input[type=text], input[type=submit] {
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    -moz-appearance: none;
    border-radius: 0;
    
  }
  textarea {
    -webkit-border-radius: 0px;
    border-radius: 0;
  }
  input {
    border-radius: 0;
  }
  
  body {
    font-family: ${(props) => props.theme.font};
    color: ${(props) => props.theme.colors.textPrimary};
    scroll-behaviour: smooth;
  }
  h1, h2, h3 {
    font-weight: bold;
  }
  h1 {
    font-size: 2.5rem;
    @media (min-width: 48rem) {
      font-size: 4.5rem;
    }
    @media (min-width: 69.375rem) {
      font-size: 5rem;
    }
    
  }
  h2 {
    font-size: 2rem;
    @media (min-width: 48rem) {
      font-size: 2.5rem;
    }
    @media (min-width: 69.375rem) {
      font-size: 3rem;
    }
  }
  h3 {
    font-size: 1.125rem;
    @media (min-width: 48rem) {
      font-size: 1.2rem;
    }
    @media (min-width: 69.375rem) {
      font-size: 1.8rem;
    }
  }
  p {
    @media (min-width: 48rem) {
      font-size: 1.3rem;
    }
  }
  a {
    @media (min-width: 48rem) {
      font-size: 1.3rem;
    }
  }
`;

export default GlobalStyles;