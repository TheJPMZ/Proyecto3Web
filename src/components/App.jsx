import React from 'react';
import './App.scss';
import PageContainer from './PageContainer';
import LanguageContainer from './LanguageContainer';
import NavBar from './NavBar';

function App() {
  return (
    <>
      <NavBar />
      <h1 style={{ textAlign: 'center', color: 'white' }}> Jose Pablo Monzon </h1>

      <PageContainer nombre="meme" descripcion="Memes Buenos" id="PageContainerReact" />
      <LanguageContainer id="Skills" />
    </>
  );
}

export default App;
