import { useRef, useState } from "react";
import axios from 'axios';

function RegisterForm()
{
    const nameRef = useRef();
    const surnameRef = useRef();
    const passwordRef = useRef();
    const [gender, setGender] = useState("woman")

    const genderChange = e => {
        setGender(e.target.value);
    }

    const send = () => {
        const checkedBoxes = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(cb => cb.value);
        axios.post("http://localhost:8000/register",
            {
                "imie": nameRef.current.value,
                "nazwisko": surnameRef.current.value,
                "plec": gender,
                "jezyk programowania": checkedBoxes
            }
        )
    }
 
    return (
        <>
            <input type="text" ref={nameRef} class="form-control" name="name"></input> <label for="name">imię</label> <br />
            <input type="text" ref={surnameRef} class="form-control" name="surname"></input> <label for="surname">nazwisko</label> <br />
            <input type="password" ref={passwordRef} class="form-control" name="password"></input> <label for="password">hasło</label> <br />
            <input type="radio" value="woman" class="form-check-input" id="woman" name="gender" onChange={genderChange} checked={gender === "woman"}></input> <label htmlFor="woman">kobieta</label>
            <input type="radio" value="man" class="form-check-input" id="man" name="gender" onChange={genderChange} checked={gender === "man"}></input> <label htmlFor="man">mężczyzna</label>
            <input type="radio" value="other" class="form-check-input" id="other" name="gender" onChange={genderChange} checked={gender === "other"}></input> <label htmlFor="other">inna</label>
            <br />
            <input type="checkbox" value="java" class="form-check-input" id="java"></input> <label htmlFor="java">Java</label>
            <input type="checkbox" value="csharp"  class="form-check-input" id="csharp" ></input> <label htmlFor="csharp">C#</label>
            <input type="checkbox" value="python"  class="form-check-input" id="python" ></input> <label htmlFor="python">Python</label>
            <br />
            <button onClick={send} class="btn btn-primary">wyślij</button>
        </>
    )
}
export default RegisterForm;