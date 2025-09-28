
import Navbar from './components/Navbar'
import Home from "./pages/Home";
import './App.css'
import { Routes, Route } from "react-router-dom";
import Administration from "./pages/Administration"
import Timeline from "./pages/Timeline"
import Leadership from "./pages/Leadership"
import Membership from "./pages/Membership"

export default function App (){
  return (
  <div className="app">
    <Navbar />
    <main className="container">
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "/membership" element={<Administration/>} />
        <Route path = "/timeline" element={<Timeline/>} />
        <Route path = "/leadership" element={<Leadership/>} />
        <Route path = "/about-us" element={<Membership/>} />
      </Routes>
    </main>

    <footer className = "footer">
      <div className = "container">
        <p>{new Date().getFullYear()}
        <p>
         Contact: ahs.technicalahs@gmail.com
        </p>
        </p>
      </div>
    </footer>
  </div>
);
}

