import React from 'react'
import Note from '../note/Note'
import './mynotes.css'

const Mynotes = (props) => {

    const { note } = props;
    
    return (
        <>
            <div className="mynotes-section">
                <p className="mynotes-hedaing">My Notes</p>
                <div className="mynotes">
                    <Note note={note} />
                </div>
            </div>
        </>
    )
}

export default Mynotes
