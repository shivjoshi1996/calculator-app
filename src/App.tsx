import './App.css';
import Page from './components/Page';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { useEffect, useState } from 'react';

const theme = {
  colors: {
    mainBackground: 'hsl(222, 26%, 31%)',
    buttonBackground: '#242D44',
    screenBackground: '#181F33',
    buttonFirst: '#EAE3DC',
    buttonFirstShadow: '#B3A497',
    buttonFirstHover: '#FFFFFF',
    buttonSecond: '#647198',
    buttonSecondShadow: '#414E73;',
    buttonSecondHover: '#A2B2E1',
    buttonThird: '#D03F2F',
    buttonThirdShadow: '#93261A',
    buttonThirdHover: '#F96B5B',
    buttonTextColor: '#434A59',
    buttonTextColour2: '#FFFFFF',
    toggleColour: '#D03F2F',
    toggleHoverColour: '#F96B5B',
    toggleTrackColour: '##242D44',
    calculatorHeaderTextColour: '#FFFFFF',
  },
  font: {
    main: `'Spartan', sans-serif`,
  },
};

const theme2 = {
  colors: {
    mainBackground: '#E6E6E6',
    buttonBackground: '#D2CDCD',
    screenBackground: '#EEEEEE',
    buttonFirst: '#E5E4E1',
    buttonFirstShadow: '#A79E91 ',
    buttonFirstHover: '#FFFFFF',
    buttonSecond: '#378187',
    buttonSecondShadow: '#1B6066',
    buttonSecondHover: '#62B5BC ',
    buttonThird: '#C85402',
    buttonThirdShadow: '#873901 ',
    buttonThirdHover: '#FF8A38',
    buttonTextColor: '#36362C',
    buttonTextColour2: '#FFFFFF',
    toggleColour: '#D03F2F',
    toggleHoverColour: '#F96B5B',
    toggleTrackColour: '#D2CDCD',
    calculatorHeaderTextColour: '#36362C',
  },
  font: {
    main: `'Spartan', sans-serif`,
  },
};

const theme3 = {
  colors: {
    mainBackground: '#17062A',
    buttonBackground: '#1E0936',
    screenBackground: '#1E0936',
    buttonFirst: '#331C4D',
    buttonFirstShadow: '#881C9E',
    buttonFirstHover: '#6C34AC',
    buttonSecond: '#56077C',
    buttonSecondShadow: '#BE15F4',
    buttonSecondHover: '#8631AF',
    buttonThird: '#00DED0',
    buttonThirdShadow: '#6CF9F1',
    buttonThirdHover: '#93FFF8',
    buttonTextColor: '#FFE53D',
    buttonTextColour2: '#FFFFFF',
    toggleColour: '#00DED0',
    toggleHoverColour: '#F96B5B',
    toggleTrackColour: '#1E0936',
    calculatorHeaderTextColour: '#FFE53D',
  },
  font: {
    main: `'Spartan', sans-serif`,
  },
};

function App(props: object) {

  const [themeToggleValue, setThemeToggleValue] = useState("1");
  const [themeChosen, setTheme] = useState({
    currentTheme: theme,
  });
  console.log(themeToggleValue);

  useEffect(() => {
    if (themeToggleValue === "1") {
      setTheme({
        currentTheme: theme,
      });
    } else if (themeToggleValue === "2") {
      setTheme({
        currentTheme: theme2,
      });
    } else {
      setTheme({
        currentTheme: theme3,
      });
    }
  }, [themeToggleValue]);

  function handleToggleChange(e: any) {
    setThemeToggleValue(e.target.value);
  }

  return (
    <ThemeProvider theme={themeChosen.currentTheme}>
      <GlobalStyles />
      <Page handleToggleChange={handleToggleChange} themeToggleValue={themeToggleValue} />
    </ThemeProvider>
  );
}

export default App;
