import React from 'react'
import { useParams } from 'react-router-dom'

const Input = (props) => {
    
    const { input } = useParams();
    

    return (
        <div>
            {
                !isNaN(input) ?
                    <h1 className='text-center'>The number is: {input}</h1> :
                    <h1 className='text-center'>The word is: {input}</h1>
            }
        </div>
    )
}

export default Input