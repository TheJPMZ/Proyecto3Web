import React from 'react';
import './App.scss';
import PageContainer from "./PageContainer";

function App() {
    return (
        <>
            <h1>Hello World</h1>
            <PageContainer nombre={"meme"} descripcion={"Memes Buenos"} />
        </>
    );
}

export default App;
