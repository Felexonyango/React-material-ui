import React from 'react'

import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Create from './componets/Create';
import Notes from './componets/Notes';
import Example1 from './componets/Example1';
import DataFetch2 from './componets/DataFetch2';
import { createTheme,ThemeProvider} from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import Layout from './componets/Layout';
const theme = createTheme({
  palette: {
    primary:{
      main:'#fefefe'
    },
    secondary:purple
  },
  typography:{
    fontFamily:'Quicksand',
    fontWeightLight:400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700
  }
})
const App = () => {
  return (
    <ThemeProvider theme={theme}>
<Router>
  
  <Layout> 
  <Routes>
   
  <Route exact path="/" element={<Notes/>}/>
    <Route  path="/create" element={<Create/>}/>
    <Route path="/example" element={<Example1/>}/>
      <Route path="/DataFetch2"element={<DataFetch2/>}>
    </Route>
    
    </Routes>
  </Layout>

</Router>
</ThemeProvider>
  )
}

export default App