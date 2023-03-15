import React from 'react'
import './App.css'
import MainLayout from './MainLayout/MainLayout';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import ContextProvider from './Context/ContextProvider'

function App() {

  return (
    <MainLayout>
      <ContextProvider>
        <Header/>
        <Main/>
      </ContextProvider>
    </MainLayout>
  )
}

export default App;
