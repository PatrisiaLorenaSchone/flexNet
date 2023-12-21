
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./pages/Layout"
import Homepage from "./pages/Homepage"
import Moviepage from "./pages/Moviepage"
import Errorpage from "./pages/Errorpage"
import Resultspage from "./pages/Resultspage"
import FilmList from "./pages/FilmList"
import React from "react"

const FilmContext = React.createContext("")
function App() {
  const [list, setList] = React.useState([]);
  return (
    <BrowserRouter>
    <FilmContext.Provider value={{list, setList}}>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="movie/:name" element={<Moviepage/>}/>
        <Route path="results/:name" element={<Resultspage/>}/>
        <Route path="list" element={<FilmList/>}/>
        <Route path="*" element={<Errorpage/>}/>
      </Route>
    </Routes>
    </FilmContext.Provider>
    </BrowserRouter>
  )
}

export default App
export { FilmContext }
