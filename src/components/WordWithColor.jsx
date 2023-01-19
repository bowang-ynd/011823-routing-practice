import React from 'react';
import { useParams } from 'react-router-dom';

const WordWithColor = () => {
    
    const { input, textColor, backgroundColor } = useParams();
    
    return (
        <div>
            <h1 className='text-center' style={ { color: textColor, backgroundColor: backgroundColor } }>The word is: {input}</h1>
        </div>
    )
}

export default WordWithColor