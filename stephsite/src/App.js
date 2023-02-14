import './App.css';
import Navigation from './components/navbar';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import './fonts/IndieFlower-Regular.ttf'





function App() {
  return (
    <div className="App">


<BrowserRouter>
<Navigation/>
<Routes>
<Route exact path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/portfolio" element={<Portfolio/>} />
<Route path="/contact" element={<Contact/>} />
</Routes>
</BrowserRouter>

</div>


  );
}

export default App;
