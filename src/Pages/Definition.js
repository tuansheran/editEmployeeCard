import { useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function Definition(){
    const [word, setWord] = useState();
    let search = useParams();
    // let confirm = useRef("false") ;

    useEffect(() => {
        fetch("https://wordsapiv1.p.mashape.com/words/word" + search)
        .then((response) => {
            if(response.status === '404'){
                console.log();
            }
            response.json()

        })
        .then((data) => {
            // setWord(data[0].meanings[0].definitions[0].definition)
            console.log(data)
            // confirm.current = true; [0].meanings[0]
        });
    }, [] )

        return (
            <>
                
                <h1>Test</h1>
            </>
        );
}