import { useState } from "react";

function Form()
{
    // const text1 = useRef();
    const [color, setColor] = useState("red");
    const onOptionChange = e => {
        setColor(e.target.value)
      }
    return (
        <div>
            {/* <input ref={text1} type="text"></input> */}
            <input type="text"></input>

            <select>
                <option>CPU</option>
                <option>GPU</option>
                <option>RAM</option>
            </select>

            <input type="radio" name="colors" value="red" onChange={onOptionChange} checked={color === "red"}></input> RED
            <input type="radio" name="colors" value="green" onChange={onOptionChange} checked={color === "green"}></input> GREEN
            <input type="radio" name="colors" value="blue" onChange={onOptionChange} checked={color === "blue"}></input> BLUE
            <input type="radio" name="colors" value="pink" onChange={onOptionChange} checked={color === "pink"}></input> PINK

            <p>{color}</p>
            {/* <p>{text1.current.value}</p> */}
        
        </div>
    )
}

export default Form;