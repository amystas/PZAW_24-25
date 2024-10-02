import { useRef } from "react";

function Sci() {
    const inputRef = useRef();
    const handleButton = () => {
        console.log("hello world");
        console.log(inputRef.current.value);
    } 
    const handleInputText = (event) => {
        console.log("text input", event.target.value);
    }
    return( <> 
        <div>
            <input type="button" value="SCI button" onClick={handleButton}></input>
            <input ref={inputRef} type="text" onChange={handleInputText}></input>
        </div>
    </>);
}

export default Sci;