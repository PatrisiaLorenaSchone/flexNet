
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./pages/Layout"
import Homepage from "./pages/Homepage"
import Moviepage from "./pages/Moviepage"
import Errorpage from "./pages/Errorpage"
import Resultspage from "./pages/Resultspage"
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="movie/:name" element={<Moviepage/>}/>
        <Route path="results/:name" element={<Resultspage/>}/>
        <Route path="*" element={<Errorpage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
