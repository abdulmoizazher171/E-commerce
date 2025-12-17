import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from "./assets/components/Home.tsx";
import Cart from "./assets/components/Cart.tsx";
import About from './assets/components/About.tsx';
import Contact from "./assets/components/Contact.tsx";
import Favourite from './assets/components/Favourite.tsx';


function App() {


  return (
    <>
      <div>
      <BrowserRouter>
      
        <nav>
            <Link to = "/">Home</Link> | {" "}
            <Link to="/Contact">Contact</Link>
            <Link to = "/Cart">Cart</Link>
            <Link to = "/Favourite">Favourite</Link>
            <Link to = "/about">About</Link>
        </nav>


          <Routes>
              <Route path='/' element = {<Home />}/>
              <Route path='/about' element = {<About></About>}></Route>
              <Route path='/contact' element = {<Contact></Contact>}></Route>
              <Route path='/cart'  element = {<Cart></Cart>}></Route>
              <Route path='/favourite' element = {<Favourite></Favourite>}/>

          </Routes>
        
      
      </BrowserRouter>
      
      </div>
      
    </>
  )
}

export default App
