import React from 'react'
import Note from '../note/Note'
import './mynotes.css'

const Mynotes = (props) => {

    const { noteArray } = props;
    console.log("myNotes : ", noteArray)
    
    return (
        <>
            <div className="mynotes-section">
                <p className="mynotes-hedaing">My Notes</p>
                <div className="mynotes">

                { noteArray.map((item, index) => {
                    return <Note key={index} index={index} item={item} />
                })}

                </div>
            </div>
        </>
    )
}

export default Mynotes
