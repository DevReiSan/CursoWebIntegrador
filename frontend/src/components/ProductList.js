import { useEffect, useState } from "react";
import { getAllProducts, deleteProduct } from "../services/productService";
export default function ProductList({ onEditar }) {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");
    const cargar = async () => {
        try {
            setCargando(true);
            const data = await getAllProducts();
            setProductos(data);
        } catch (e) {
            setError(e.message);
        } finally {
            setCargando(false);
        }
    };
    useEffect(() => { cargar(); }, []);
    const eliminar = async (id) => {
        try {
            await deleteProduct(id);
            await cargar();
        } catch (e) {
            alert(e.message);
        }
    };
    if (cargando) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <ul>
            {productos.map((p) => (
                <li key={p.productId}>
                    {p.name} — S/. {p.price}
                    <button onClick={() => onEditar(p)}>Editar</button>
                    <button onClick={() => eliminar(p.productId)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
}