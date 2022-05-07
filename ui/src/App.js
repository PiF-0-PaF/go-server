import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, {useState, useEffect, useRef} from "react";

function App() {
  
  const [notes, setNotes] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  const inputInfo = useRef(null);
  const inputTitle = useRef(null);

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

  }, []);

  const addNote = () => {
    axios.post("http://localhost:9090/api/notes/add", {
      title: inputTitle.current.value,
      info: inputInfo.current.value
    }, {
      withCredintials: false
    }).then(() => {
      setIsUpdate(!isUpdate)
    })
  }


  return (
    <div className="App">
      <label>gygiyg</label>
      <input ref={inputInfo} type="text"/>
      <label>opisanie</label>
      <input ref={inputTitle} type="text"/>
      <button onClick = {() => addNote()}>add</button>
      {!!notes && notes.map((note, index) => (
        <div key={index}>{note.title} - {note.info} </div>
      ))}
    </div>
  );
}

export default App;
