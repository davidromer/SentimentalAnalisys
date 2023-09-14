// App.js
import React from 'react';
import './App.css';
import SentimentAnalysis from './SentimentAnalysis';
import WordCloud from './WordCloud';

function App() {
    const words = [
        { text: 'Viva', value: 10 },
        { text: 'Mexico', value: 7 },
        // ... Agrega más palabras aquí ...
    ];

    return (
        <div className="App">
            <h1>Análisis de Sentimientos</h1>
            <SentimentAnalysis />
            <WordCloud words={words} />
        </div>
    );
}

export default App;