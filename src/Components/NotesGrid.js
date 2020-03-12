import React from 'react';
import Note from './Note';


export default function NotesGrid(props){
    return(
        <div className="notes-grid">
            {
                props.notes.map( n => {
                    return <Note 
                    note={n}
                    key={n.id}
                    onChange={props.onToggle}
                    onDelete={props.onDelete}
                    />
                })
            }
        </div>
    )
}