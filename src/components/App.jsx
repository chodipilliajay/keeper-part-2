import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function App() {
  return (
    <div>
      <Header />
      {notes.map(eachNotes => <Note key={eachNotes.key} title={eachNotes.title} content={eachNotes.content} />
    )}
      <Footer />
    </div>
  );
}

export default App;
