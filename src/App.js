import { createContext, useState } from "react";
import { Login } from "./components/Login";
import { MyBooks } from "./components/MyBooks";
function Demo() {
  const [definitions, setDefinitions] = useState([]);
  const handleMouseUp = async () => {
    let text = window.getSelection().toString();
    if (text != "") {
      //TODO: env url
      const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + text;
      console.log(text);
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        if (data[0].meanings.length > 0) {
          console.log(text);
          setDefinitions(data[0].meanings[0].definitions);
        }
      }
    }
  };
  const DefinitionPanel = () => {
    return (
      <div>
        <ul>
          {definitions.map((def) => (
            <li key={def.definition}>{def.definition}</li>
          ))}
        </ul>
      </div>
    );
  };
  const [text, setText] = useState("");
  return (
    <div>
      <Login />
      <DefinitionPanel />
      <div onMouseUp={handleMouseUp}>
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        {text}
      </div>
    </div>
  );
}
export const AppContext = createContext({
  idTok: null,
  setPage: () => {},
  setIdTok: () => {},
});
function App() {
  const [page, setPage] = useState("login");
  const [idTok, setIdTok] = useState(null);
  return (
    <AppContext.Provider value={{ idTok, setPage, setIdTok }}>
      <div>
        {page === "login" && <Login />}
        {page === "mybooks" && <MyBooks />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
