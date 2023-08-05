// import logo from './logo.svg';
 import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'; // Import Routes

import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
 
    <Router>
    <div className="App">
      <nav className='navbar'>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <p>TravelMedia.in</p>
          </li>
          {/* You can add more nav items here */}
        </ul>
      </nav>
      <Routes> {/* Wrap your Routes */}
        <Route path="/" element={<Home/>} /> {/* Use 'element' prop */}
        <Route path="/item/:id" element={<Detail />} /> {/* Use 'element' prop */}
      </Routes>
    </div>
  </Router>
   
  );
}

export default App;
