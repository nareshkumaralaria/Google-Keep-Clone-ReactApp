import React from 'react'
import './note.css';

import deleteIcon from '../../assets/delete.svg';

const Note = (props) => {

    const { item, index, noteArray, setNoteArray } = props;

    const handleDelete = (indx) => {
        console.log("deleted", indx)
        const updatedList = noteArray.filter((e, idx) => {
            return idx !== indx;
        })
        setNoteArray(updatedList);
    }

    return (
        <>
            <div className="note">
                <div className="delete">
                    <img src={deleteIcon} id="delIcon" alt="delete icon" onClick={() => handleDelete(index)} />
                    {item}
                </div>
            </div>
        </>
    )
}

export default Note
