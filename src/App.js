import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom'
import { GlobalStyle } from './style.js'
import { GlobalIconStyle } from './statics/iconfont/iconfont.js'
import Home from './pages/home'

function App (){
    return (
      <>
        <BrowserRouter>
          <Route path='/' exact  component={Home}></Route>
        </BrowserRouter>
        <GlobalStyle/>
        <GlobalIconStyle/>
      </>
    );
}

export default App;
