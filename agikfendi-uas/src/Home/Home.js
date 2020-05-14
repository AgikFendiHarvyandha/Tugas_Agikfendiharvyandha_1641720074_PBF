import React, { Component } from "react";
import "./Home.css";
import Note from "../Note/Note";
import NoteForm from "../NoteForm/NoteForm";
import Firebase from "../firebase/config";
import "firebase/database";
import Api from '../Api/Api';

class App extends Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    this.app = Firebase;
    this.database = this.app.database().ref().child("notes");


    this.state = {
      notes: [],
    };
  }

  componentWillMount() {
    const previousNotes = this.state.notes;

    this.database.on("child_added", (snap) => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
      });

      this.setState({
        notes: previousNotes,
      });
    });

    this.database.on("child_removed", (snap) => {
      for (var i = 0; i < previousNotes.length; i++) {
        if (previousNotes[i].id === snap.key) {
          previousNotes.splice(i, 1);
        }
      }

      this.setState({
        notes: previousNotes,
      });
    });
  }

  addNote(note) {
    this.database.push().set({ noteContent: note });
  }

  removeNote(noteId) {
    this.database.child(noteId).remove();
  }

  handleLogoutAccount() {
    const user = Firebase.auth().currentUser;
    try {
      console.log("Goodbye: " + user.email);
    } catch (e) {
      alert(e);
    }
  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div>Technology</div>
          <button
          className="btn-Signout"
          onClick={() => {
            Firebase.auth().signOut();
            this.handleLogoutAccount();
          }}
        >
          Logout
        </button>
       
        </div>
       
        
        <div className="notesFooter">
          <NoteForm addNote={this.addNote} />
        </div>
        <div className="notesBody">
          {this.state.notes.map((note) => {
            return (
              <Note
                noteContent={note.noteContent}
                noteId={note.id}
                key={note.id}
                removeNote={this.removeNote}
              />
            );
          })}
        </div>
        <Api/>
      </div>
    );
  }
}

export default App;
