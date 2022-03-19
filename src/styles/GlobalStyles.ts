import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}
	
	:root {
    font-size: 1em;
  }

  @media only screen and (max-width: 450px) {
    :root {
      font-size: 0.875em;
    }
  }

  html, body {
    font-family: 'NotoSansKR', sans-serif;

    * {
    box-sizing: border-box;
    }
  }
`;

export default GlobalStyles;
