import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
        --regent-gray: #828FA3;
        --link-water: #E4EBFA;
        --selago: #F4F7FD;
        --white: #FFFFFF;
        --mandy: #EA5555;
        --mona-lisa: #FF9898;
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
    }
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    ::-webkit-scrollbar-track{
      background: var(--silver);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--gray);
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--primary);
    }
  
    `;
