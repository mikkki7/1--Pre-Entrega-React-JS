import ItemList from "./pages/ItemList";
import Navbar from "./layout/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemList greeting="Hola, bienvenido/a nuestra página de Peluqueria Vidal-Ortiz :)" />
    </div>
  );
};

export default App;
