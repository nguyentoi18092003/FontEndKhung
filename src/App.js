import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import Detail from "./components/Detail"
import Post from "./components/Post"
function App() {
  return (
    <>
    <Router>
    <div className="App">
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/baidang" element={<Post/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
    </Router>
    </>
  );
}


export default App;
