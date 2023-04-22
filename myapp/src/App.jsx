import './App.css';
import {NavBar} from './NavBar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx';
export const App = () => {

return(
  <div>
    <NavBar /> 
    <ItemListContainer greeting={"Productos"} />


  </div>


)
}



