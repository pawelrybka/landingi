import React from 'react';
import './App.css';
import MainLayout from './MainLayout/MainLayout';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import ContextProvider from './Context/ContextProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <MainLayout>
        <ContextProvider>
          <Header/>
          <Main/>
        </ContextProvider>
      </MainLayout>
      <ToastContainer/>
    </>
  )
}

export default App;

