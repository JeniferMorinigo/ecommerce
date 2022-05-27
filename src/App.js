import Navbar from"./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import  ItemDetailContainer  from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes , Route} from "react-router-dom"

function App() {
  
  return (
    
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<ItemListContainer/>} />
        <Route path = "Productos" element={<ItemListContainer/>}/>
        <Route path = "Quienes somos" element={<ItemDetailContainer/>}/>
      <Routes/>
      <ItemListContainer greeting={"STEP OUT WE ARE SKZ"} />
      <ItemDetailContainer/>
    </div>
  );
}
