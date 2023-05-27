import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint='http://localhost:8000/api/productos'
const ShowProductos = () => {

  const [productos, setProductos]= useState([])
  useEffect(() =>{
    
   getAllProductos()

    
  },[])

  const getAllProductos = async () =>{
  
   const renponse = await axios.get(`${endpoint}/productos`)
   setProductos(renponse)
  }
  
  const deleteProductos = async (id) =>{

   axios.delete(`${endpoint}/productos/${id}`)

  }


  return (
  <div>
    <div className='d-grd gap-2'>
      <Link to="/create" className='btn btn-sucess btn-lg mt-2 mb-2 text-white'>create</Link>
    </div>
    <table className='table table-striped'>
     <thead  className='bg-primary text-white'>
            <tr>
              
              <th>Nombre</th>
              <th>Marca</th>
              <th>Descripcion</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Action</th>
            </tr>


     </thead>
     <tbody>

      {productos.map( (producto)=>(
      <tr key={producto.id}>
        
        <td>{producto.Nombre}</td>
        <td>{producto.Marca}</td>
        <td>{producto.Descripcion}</td>
        <td>{producto.Cantidad}</td>
        <td>{producto.Precio}</td>
        <td>
          <link className='btn btn-warning'>Editar</link>
          <button onClick={ ()=>deleteProductos(producto.id) } className='btn btn-danger'>Borrar</button>

        </td>

      </tr>
      ))}



     </tbody>

    </table>

  </div>
  )
}

export default ShowProductos
