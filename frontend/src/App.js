import { useState, useRef } from "react";
import Saludo from "./components/Saludo";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
export default function App() {
  const [editar, setEditar] = useState(null);
  const listaRef = useRef(null);
  // truco: exponer "recargar" desde ProductList si quieres
  const onGuardado = () => {
// opción simple: forzar que ProductList se remonte cambiando una key
    setEditar(null);
    listaRef.current?.cargar?.(); // si implementas forwardRef
  };
  return (
    <div className="App">
      <Saludo />
      <ProductForm productoEditar={editar} onGuardado={onGuardado}
      />
      <ProductList onEditar={setEditar} ref={listaRef} />
    </div>
  );
}