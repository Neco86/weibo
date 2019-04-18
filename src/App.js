import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom'
import { GlobalStyle } from './style.js'
import Header from './common/header'
import Home from './pages/home'

function App (){
    return (
      <>
        <BrowserRouter>
          <Header/>
          <Route path='/' exact  component={Home}></Route>
        </BrowserRouter>
        <GlobalStyle/>
      </>
    );
}

export default App;
