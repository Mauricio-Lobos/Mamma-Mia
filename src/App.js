import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Carrito from "./Pages/CarroCompra";
import PizzaDetails from "./Pages/PizzaDetails";
import { Provider } from "./Context"


function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/pizza/:id" element={<PizzaDetails />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
