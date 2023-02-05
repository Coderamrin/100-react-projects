import "./App.css";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [state, setState] = useState({
    title: "",
    note: "",
    id: Math.random() * 10,
  });

  const handleDelete = (id) => {
    const leftNotes = notes.filter((note) => note.id !== id);
    setNotes(leftNotes);
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setNotes([...notes, state]);
    setState({
      title: "",
      note: "",
    });
  };

  return (
    <div className="App">
      <h1 className="text-center text-5xl p-5">React Notes</h1>
      <div className="create-note w-[400px] mx-auto">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title"
            name="title"
            className="border-2 border-blue-200 p-2 mb-2"
            onChange={handleChange}
            value={state.title}
            required
          />
          <textarea
            name="note"
            id=""
            cols="30"
            rows="5"
            placeholder="note"
            className="border-2 border-blue-200 p-2"
            onChange={handleChange}
            value={state.note}
            required
          ></textarea>
          <button
            type="subit"
            className="bg-blue-500 px-5 py-3 text-white mt-4"
          >
            Add Note
          </button>
        </form>
      </div>

      <div className="notes-container border-t-2 border-blue-300 m-10 flex flex-wrap">
        {
          notes.length > 0 ? notes.map((note, i) => {
            return (
              <div
                className="note bg-white mt-5 mr-5 w-[300px] p-4 py-10 relative"
                key={i}
              >
                <button
                  className="delete-note absolute right-2 top-0 font-bold text-2xl text-red-500"
                  onClick={() => handleDelete(note.id)}
                >
                  x
                </button>
                <h3 className="font-bold text-1xl pb-2">{note.title}</h3>
                <p>{note.note}</p>
              </div>
            );
          }) : <p className="py-5">
            No notes available.
          </p>
        }
      </div>
    </div>
  );
}

export default App;
