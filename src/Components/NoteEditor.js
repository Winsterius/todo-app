import React from 'react';

export default function NoteEditor({ onAddNote }) {

    const [txt, setTxt] = React.useState(  );

    return(
        <div className="note-editor"> NoteEditor 
            <textarea 
                className="textarea" 
                placeholder="enter your note here"
                value={txt}
                onChange={ e => setTxt( e.target.value )}
            />
            <button 
                className="add-button"
                onClick={() => ( onAddNote(txt), setTxt('') )}>Add
            </button>
        </div>
    );

}
