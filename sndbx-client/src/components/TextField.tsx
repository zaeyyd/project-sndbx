import React, { useState } from 'react'

interface Thing {
    age: number
}

interface Props {
    text: string
    ok: boolean
    fn?: (bob: string) => string;
    thing?: Thing
}

export const TextField: React.FC<Props> = ({text, ok}) => {

    const [count, setcCunt] = useState(5)
    return (
        <div>
        {text}
        
        </div>
    );
};


