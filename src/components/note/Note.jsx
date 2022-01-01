import React from 'react'
import './note.css';

import deleteIcon from '../../assets/delete.svg';

const Note = (props) => {

    const { item, index } = props;
    console.log("note :", item)

    const handleDelete = () => {
        console.log("deleted", index)
        var note = document.getElementsByClassName("note");
        note.parentNode.removeChild(note);
    }

    return (
        <>
            <div className="note">
                <div className="delete">
                    <img src={deleteIcon} id="delIcon" alt="delete icon" onClick={handleDelete} />
                    {item}
                </div>
            </div>
        </>
    )
}

export default Note
