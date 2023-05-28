import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);
  

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/apiproductos/');
      setProducts(response.data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/apiproductos/${productId}`);
      console.log('Producto eliminado:', productId);
      fetchProducts(); 
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  const handleEdit = (productId) => {
    console.log('Editar producto:', productId);
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Lista de Productos</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.Nombre}</td>
              <td>{product.Marca}</td>
              <td>{product.Descripcion}</td>
              <td>{product.Cantidad}</td>
              <td>{product.Precio}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleEdit(product.id)}>Editar</button>
                <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
