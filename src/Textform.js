import { useState } from "react"
import React from 'react'

export default function Textform(props) {
    const handleup =()=>{
       // console.log("uppercase was clicked")
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handledown =()=>{
        // console.log("uppercase was clicked")
         let newText=text.toLowerCase();
         setText(newText);
     }
    const handlechange=(event)=>{
        setText(event.target.value)
    }
    const handlebold =()=>{
        let newText='';
        setText(newText);
    }
    const [text,setText]=useState('Enter text here')
    return (
        <>
        <div>
            <div class="mb-3">
                <h1>{props.heading} </h1>
                <label className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handlechange} id="exampleFormControlTextarea1" rows="8"></textarea>
                <button className="btn btn primary mx-2" onClick={handleup}>Convert to Uppercase</button>
                <button className="btn btn primary mx-2" onClick={handledown}>Convert to Lowercase</button>
                <button className="btn btn primary mx-2" onClick={handlebold}>Clear text</button>
            </div>
        </div>
        <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes wanted to read.</p>
        </div>
        </>
    )
}
