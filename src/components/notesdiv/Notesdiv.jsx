import React, { useEffect, useState } from 'react'
import Mynotes from '../mynotes/Mynotes';
import './notesdiv.css'

const getdataFromLS = () => {
    let noteList = localStorage.getItem("NotesList");
    if (noteList) {
        return JSON.parse(localStorage.getItem("NotesList"));
    }else{
        return [];
    }
}

const Notesdiv = () => {
    const [note, setNote] = useState("");
    const [noteArray, setNoteArray] = useState(getdataFromLS());

    const handleChange = (e) =>{
        const userNote = e.target.value;
        setNote(userNote);
    }

    const handleAddNote = () => {
        if(!note){
        }
        else{
            setNoteArray([...noteArray, note]);
        }
        setNote("");
    }

    useEffect(() => {
        localStorage.setItem("NotesList", JSON.stringify(noteArray))
    }, [noteArray])

    const handleClear = () =>{
        setNote("");
    }

    return (
        <>
            <div className="notesDiv">
                    <p className="heading">Type your notes here</p>
                    <textarea name="notesEditor" className="notesEditor" onChange={handleChange} value={note} placeholder="✏ eg. my today task ..."></textarea>
                    <div className="btns">
                        <button className="btn clear" onClick={handleClear}>Clear</button>
                        <button className="btn save" onClick={handleAddNote}>Save</button>
                    </div>
            </div>
            <Mynotes noteArray={noteArray} setNoteArray={setNoteArray} />
        </>
    )
}

export default Notesdiv
