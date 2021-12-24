import './App.css';
import Page from './components/Page';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

const theme = {
  colors: {
    mainBackground: 'hsl(222, 26%, 31%)',
    buttonBackground: '#242D44',
    screenBackground: '#181F33',
    toggleBackground: 'hsl(183, 100%, 15%)',
    buttonFirst: '#EAE3DC',
    buttonFirstShadow: '#B3A497',
    buttonSecond: '#647198',
    buttonSecondShadow: '#414E73;',
    buttonThird: '#D03F2F',
    buttonThirdShadow: '#93261A',
    buttonTextColor: '#434A59',
    buttonTextColour2: '#FFFFFF',


    keyShadow: 'hsl(185, 41%, 84%)',
    keyBackground2: 'hsl(189, 41%, 97%)',
    keyShadow2: 'hsl(0, 0%, 100%)',
    textColour: 'hsl(221, 14%, 31%)',
    textColour2: 'hsl(0, 0%, 100%)',
  },
  font: {
    main: `'Spartan', sans-serif`,
  },
};

function App(props: object) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Page />
    </ThemeProvider>
  );
}

export default App;
