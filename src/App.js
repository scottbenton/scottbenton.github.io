import React, { useState } from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'

import AppBar from './Components/AppBar';
import Page from './Components/PageComponents/Page';
import SECTIONS from './Content/Sections';


const theme = () => createMuiTheme({
  palette: {
    primary: { main: '#455A64' },
    secondary: { main: '#7B1FA2' },

    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
  }
});

function App() {

  const [selectedSection, setSelectedSection] = useState(SECTIONS.ABOUT);

  const myTheme = theme();
  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <AppBar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      <Page pageOptions={selectedSection} />
    </ThemeProvider>
  );
}

export default App;
