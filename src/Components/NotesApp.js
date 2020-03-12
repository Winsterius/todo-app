import React, { useEffect } from 'react';
import NoteEditor from './NoteEditor';
import NotesGrid from './NotesGrid';


export default function NotesApp() {
    
    const [notes, setNotes] = React.useState([]);

    useEffect(() => {
        let localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            setNotes( localNotes );
        }
    }, []);

    useEffect(() => {
        let newNotes = JSON.stringify(notes);
        localStorage.setItem('notes', newNotes);
    }, [notes]);

    function handleAddNote(txt) {

        let newNote = {
            id: Date.now(),
            completed: false,
            text: txt
        };
        let newNotes = notes.slice();
        newNotes.unshift(newNote);
        setNotes(newNotes);
    }   

    function handleNoteDelete(id) {
        let newNotes = notes.filter(function(note) {
            return note.id !== id;
        });
        setNotes(newNotes);
    }


    function toggleNote(id) {
        setNotes(
            notes.map( n => {
                if(n.id === id){
                    n.completed = !n.completed;
                }
                return n;
            })
        );
    }


    return (
        <div className="notes-app"> 
        NoteApp
        <NoteEditor 
            onAddNote={handleAddNote} 
        />
        {
            notes.length ? 
            <NotesGrid 
                onToggle={toggleNote}
                notes={notes} 
                onDelete={handleNoteDelete}
            /> : <p>No Notes</p>
        
        }
        </div>
    );
}
