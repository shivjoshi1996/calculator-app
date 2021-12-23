import './App.css';
import Page from './components/Page';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    mainBackground: 'hsl(222, 26%, 31%)',
    toggleBackground: 'hsl(183, 100%, 15%)',
    screenBackground: 'hsl(186, 14%, 43%)',
    keyBackground: 'hsl(184, 14%, 56%)',
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
      <Page />
    </ThemeProvider>
  );
}

export default App;
