import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Dictionary(){
    const [word, setWord] = useState();
    const navigate = useNavigate();


    return (
        <>
            <input type = 'text' onChange={(e)=> setWord(e.target.value)}/>
            <h1>This should work {word}</h1> 
            <button onClick={ () => {
                    navigate("/definition/" + word)
            }}>Click Me</button>
        </>
        );
}