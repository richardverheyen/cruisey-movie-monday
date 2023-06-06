import { ChangeEvent, useState } from 'react'
import './App.css'
import { MovieList } from "./MovieList";
import Search from "./Search"

function App() {

  const [query, setQuery] = useState("");

  function handleQuery(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
  }

  return (
    <>
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "300px",
        height: "200px",
        padding: "8px",
        background: "#7a7da5",
        border: "5px solid #cbcbcb",
      }}>
        <p
          style={{
            background: "grey",
            textAlign: "center",
            color: "white",
            textTransform: "uppercase",
            fontSize: "12px"
          }}>
            download progress window
          </p>
        <p
          style={{
            background: "green",
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: "12px"
          }}>
            download successfully completed
          </p>
      </div>
      <Search query={query} handleQuery={handleQuery} />
      <MovieList query={query} />
    </>
  )
}

export default App
