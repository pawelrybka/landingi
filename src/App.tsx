import React from 'react'
import './App.css'
import MainLayout from './MainLayout/MainLayout';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {

  return (
    <MainLayout>
      <Header/>
      <Main/>
    </MainLayout>
  )
}

export default App
