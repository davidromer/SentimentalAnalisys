// Componente para enviar texto y obtener el sentimiento
// SentimentAnalysis.js
import React, { useState } from 'react';
import axios from 'axios';

function SentimentAnalysis() {
    const [text, setText] = useState('');
    const [sentiment, setSentiment] = useState(null);

    const analyzeSentiment = async () => {
        const response = await axios.post('/analyze_sentiment', { text });
        setSentiment(response.data.sentiment);
    };

    return (
        <div>
            <textarea
                placeholder="Ingresa un texto..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button onClick={analyzeSentiment}>Analizar Sentimiento</button>
            {sentiment !== null && <p>Sentimiento: {sentiment}</p>}
        </div>
    );
}

export default SentimentAnalysis;
