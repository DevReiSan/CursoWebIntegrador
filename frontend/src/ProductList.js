import React from 'react';
import { useState, useEffect } from 'react';


function ProductList() {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/market/api/products/all")
            .then(res => res.json())
            .then(data => setProductos(data));
    }, []);
    return (
        <div>
            <h2>Lista de productos</h2>
            <ul>
                {productos.map(p => (
                    <li key={p.productId}>{p.name} - S/. {p.price}</li>
                ))}
            </ul>
        </div>
    );

}

export default ProductList;
