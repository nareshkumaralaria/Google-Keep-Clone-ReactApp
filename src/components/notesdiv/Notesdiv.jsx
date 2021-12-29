import React, { useState } from 'react'
import Mynotes from '../mynotes/Mynotes';
import './notesdiv.css'

const Notesdiv = () => {
    const [note, setNote] = useState("");

    const handleNote = (e) =>{
        const userNote = e.target.innerText;
        setNote(userNote);
    }

    const handleAddNote = async (e) => {
        console.log("you want to enter", note)
    }

    const handleClear = () =>{
        setNote("");
        const notesEditor = document.getElementsByClassName('notesEditor');
        notesEditor[0].innerText = "";
    }

    return (
        <>
            <div className="notesDiv">
                    <p className="heading">Type your notes here</p>
                    <div className="notesEditor" onInput={handleNote} contentEditable="true"></div>
                    <div className="btns">
                        <button className="btn clear" onClick={handleClear}>Clear</button>
                        <button className="btn save" onClick={handleAddNote}>Save</button>
                    </div>
            </div>
            <Mynotes note={note} />
        </>
    )
}

export default Notesdiv
