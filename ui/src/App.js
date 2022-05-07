import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, {useState, useEffect} from "react";

function App() {

  const [notes, setNotes] = useState(null);

  useEffect(() =>{
    axios.get(
      "http://localhost:9090/api/notes",
      {
        withCredentials: false
      }
    ).then(response => {
      console.log(response.data);
      setNotes(response.data);
    }

    );

  }, [])

  return (
    <div className="App">
      {!!notes && notes.map((note, index) => (
        <div key={index}>{note.title} - {note.info} </div>
      ))}
    </div>
  );
}

export default App;
