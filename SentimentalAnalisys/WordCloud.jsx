// Componente para mostrar la nube de palabras
// WordCloud.js
import React from 'react';
import ReactWordcloud from 'react-wordcloud';

function WordCloud({ words }) {
    const options = {
        fontFamily: 'monospace',
        rotations: 0,
        scale: 'sqrt',
        spiral: 'archimedean',
    };

    return (
        <div>
            <ReactWordcloud words={words} options={options} />
        </div>
    );
}

export default WordCloud;
