import React from 'react'
import './note.css';

import deleteIcon from '../../assets/delete.svg';

const Note = (props) => {

    const { note } = props;

    const handleDelete = () => {
        console.log("deleted")
    }

    return (
        <>
            <div className="note">
                <div className="delete">
                    <img src={deleteIcon} id="delIcon" alt="delete icon" onClick={handleDelete} />
                    {note}
                </div>
            </div>
        </>
    )
}

export default Note
