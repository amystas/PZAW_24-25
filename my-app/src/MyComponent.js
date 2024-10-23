import { useEffect, useState } from "react";
import './mystyle.css';

function MyComponent()
{
    const [name, setName] = useState("Amelia");
    const mystyle = {color: 'red', fontSize: '2rem'};
    useEffect(() => {console.log("useEffect is called")}, [name]);
    const handleButton = () => {
        console.log(name);
        setName("brajanek");
        console.log(name);
    }
    return(<>
        <p style={mystyle}>Tekst</p>
        <p className="myclass">{name}</p>
        <input type="button" onClick={handleButton}></input>
        </>)

}

export default MyComponent;