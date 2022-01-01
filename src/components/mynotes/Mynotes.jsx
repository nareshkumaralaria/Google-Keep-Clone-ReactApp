import React from 'react'
import Note from '../note/Note'
import './mynotes.css'

const Mynotes = (props) => {

    const { noteArray, setNoteArray={setNoteArray} } = props;
    
    return (
        <>
            <div className="mynotes-section">
                <p className="mynotes-hedaing">My Notes</p>
                <div className="mynotes">

                { noteArray.map((item, index) => {
                    return <Note key={index} index={index} noteArray={noteArray} setNoteArray={setNoteArray} item={item} />
                })}

                </div>
            </div>
        </>
    )
}

export default Mynotes
