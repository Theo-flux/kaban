import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    :root {
        /* Primary colors */
        --blue-marguerite:#635FC7;
        --melrose:#A8A4FF;
        --black-russian:#000112;
        --charade-primary: #20212C;

        /* Secondary color */
        --charade-secondary: #2B2C37;
        --gun-powder: #3E3F4E;
        --regeant-gray: #828FA3;
        --link-water: #E4EBFA;
        --selago: #F4F7FD;
        --white: #FFFFFF;
        --mandy: #EA5555;
        --mona-lisa: #FF9898;
        --backdrop-color: #00000050;

        --body: var(--selago);
        --side: var(--white);
        --side-border: var(--link-water);
        --text: var(--black-russian);
    }

    [data-theme='dark'] {
      --body: var(--charade-primary);
      --side: var(--gun-powder);
      --side-border: var(--backdrop-color);

      --text: var(--white);
    }
    html {
        font-size: 0.9375rem;
        -webkit-tap-highlight-color: transparent;
    }
    
    body {
        margin: 0;
        font-family: 'Plus Jakarta Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: var(--body);
    }
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    ::-webkit-scrollbar-track{
      background: var(--stroke-color);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--regeant-gray);
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--blue-marguerite);
    }
  
    `;
