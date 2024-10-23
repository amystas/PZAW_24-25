import { useState } from 'react';
import posts from './posts.json';
import Picture from './Picture';
import "./Picture.css"

function Gallery()
{
    const [num, changeNumber] = useState(100);
    const setNewNumber = e => {
        changeNumber(e.target.value);
    }
    return ( 
        <>
        <input type="range" onChange={setNewNumber} value={num}></input> {num}
        <div id="gallery">
        { posts.slice(0, num).map((el, id) => <Picture id={id} title={el.title} description={el.body}/>) }
        </div>
        </>
    )
}

export default Gallery;