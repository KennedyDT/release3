import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditProductForm = () => {
  const { productId } = useParams();
  const [formData, setFormData] = useState({
    Nombre: '',
    Marca: '',
    Descripcion: '',
    Cantidad: '',
    Precio: '',
  });

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/apiproductos/${productId}`);
      setFormData(response.data);
    } catch (error) {
      console.error('Error al obtener el producto:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/apiproductos/${productId}`,
        formData
      );

      console.log('Producto actualizado:', response.data);
    
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
      
    }
  };

  return (
    <div className="container mt-5">
      <h2>Editar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input className="form-control" type="text" name="Nombre" value={formData.Nombre} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Marca:</label>
          <input className="form-control" type="text" name="Marca" value={formData.Marca} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Descripción:</label>
          <input className="form-control" type="text" name="Descripcion" value={formData.Descripcion} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Cantidad:</label>
          <input className="form-control" type="number" name="Cantidad" value={formData.Cantidad} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Precio:</label>
          <input className="form-control" type="number" name="Precio" value={formData.Precio} onChange={handleChange} />
        </div>
        <button className="btn btn-primary" type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default EditProductForm;
