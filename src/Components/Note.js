import React from 'react';


export default function Note({note, onChange, onDelete}) {
    const classes = [];
    if(note.completed){
        classes.push('done');
    }
    
    return(
        <div className="note">
            <span>
                <input 
                    type="checkbox" 
                    onChange={() => onChange(note.id)}/>
                &nbsp;&nbsp;
            </span>
             <span className={classes.join(' ')}>
             {note.text}
            </span>   

            <button 
                className="buttons-note"
                onClick={() => onDelete(note.id)}
            > &times; </button>
        </div>
    )
}
