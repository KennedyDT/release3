import React, { useState } from 'react';
import axios from 'axios';

const CreateProductForm = () => {
  const [formData, setFormData] = useState({
    Nombre: '',
    Marca: '',
    Descripcion: '',
    Cantidad: '',
    Precio: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/apiproductos/',
        formData
      );
      console.log('Producto creado:', response.data);

      setFormData({
        Nombre: '',
        Marca: '',
        Descripcion: '',
        Cantidad: '',
        Precio: '',
      });

      window.location.reload();
    } catch (error) {
      console.error('Error al crear el producto:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="Nombre"
            value={formData.Nombre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="marca" className="form-label">Marca:</label>
          <input
            type="text"
            className="form-control"
            id="marca"
            name="Marca"
            value={formData.Marca}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripción:</label>
          <input
            type="text"
            className="form-control"
            id="descripcion"
            name="Descripcion"
            value={formData.Descripcion}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cantidad" className="form-label">Cantidad:</label>
          <input
            type="number"
            className="form-control"
            id="cantidad"
            name="Cantidad"
            value={formData.Cantidad}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="precio" className="form-label">Precio:</label>
          <input
            type="number"
            className="form-control"
            id="precio"
            name="Precio"
            value={formData.Precio}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Crear</button>
      </form>
    </div>
  );
};

export default CreateProductForm;
