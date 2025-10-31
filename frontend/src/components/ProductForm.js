import { useEffect, useState } from "react";
import { saveProduct, updateProduct } from "../services/productService";
const vacio = { name: "", price: "", stock: "", categoryId: "" };
export default function ProductForm({ productoEditar, onGuardado }) {
    const [producto, setProducto] = useState(vacio);
    useEffect(() => {
        if (productoEditar) setProducto(productoEditar);
        else setProducto(vacio);
    }, [productoEditar]);
    const onChange = (e) => {
        const { name, value } = e.target;
        setProducto((prev) => ({ ...prev, [name]: value }));
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        const esEdicion = !!producto.productId;
        try {
            if (esEdicion) {
                await updateProduct(producto.productId, producto);
                alert("Actualizado");
            } else {
                await saveProduct(producto);
                alert("Registrado");
            }
            setProducto(vacio);
            onGuardado?.(); // recargar lista en el padre
        } catch (err) {
            alert(err.message);
        }
    };
    return (
        
        <form onSubmit={onSubmit}>
            <h3>{producto.productId ? "Editar" : "Registrar"} Producto</h3>
            <input name="name" value={producto.name} onChange={onChange} placeholder="Nombre" />
            <input name="price" value={producto.price} onChange={onChange} placeholder="Precio" type="number" />
            <input name="stock" value={producto.stock} onChange={onChange} placeholder="Stock" type="number" />
            <input name="categoryId" value={producto.categoryId} onChange={onChange} placeholder="Categoría ID"
                type="number" />
            <button type="submit">{producto.productId ? "Actualizar" : "Registrar"}</button>
            
        </form>
    );
}