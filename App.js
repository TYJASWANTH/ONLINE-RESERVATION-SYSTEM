
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

  import Home from "./Screens/Home/Home"
  import List from "./Screens/Lists/List"
  import Hotel from "./Screens/Hotel/hotel"
  
  function App() {
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotelList" element={<List />} />
            <Route path="/hotelList/:id" element={<Hotel />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

export default App;
