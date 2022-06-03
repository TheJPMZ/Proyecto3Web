import React from 'react';
import './App.scss';
import PageContainer from '../PageContainer/PageContainer';
import LanguageContainer from '../LanguageContainer/LanguageContainer';
import NavBar from '../NavBar/NavBar';
import Contact from '../Contact/Contact';

function App() {
  return (
    <>
      <NavBar />
      <h1 style={{ textAlign: 'center', color: 'white', margin: '10%' }}> Jose Pablo Monzon </h1>

      <PageContainer nombre="meme" descripcion="Memes Buenos" />
      <LanguageContainer />
      <Contact />
    </>
  );
}

export default App;
