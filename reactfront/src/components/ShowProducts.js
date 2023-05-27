import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/productos'

const ShowProducts = () => {
  const [ productos, setProductos ] = useState( [] )

  useEffect ( ()=> {
      getAllProducts()
  }, [])

  const getAllProducts = async () => {
    const response = await axios.get(`${endpoint}/products`)
    setProductos(response.data)
    //console.log(response.data)
  }

  const deleteProduct = async (id) => {
    await axios.delete(`${endpoint}/product/${id}`)
    getAllProducts()
  }
  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        </div>

        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Nombre</th>
                    <th>Marca</th>
                    <th>Description</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { productos.map( (producto) => (
                    <tr key={producto.id}>
                        <td> {producto.Nombre} </td>    
                        <td> {producto.Marca} </td>    
                        <td> {producto.Description} </td>  
                        <td> {producto.Cantidad} </td> 
                        <td> {producto.Precio} </td>   
                        <td>
                            <Link to={`/edit/${producto.id}`} className='btn btn-warning'>Edit</Link>
                            <button onClick={ ()=>deleteProduct(producto.id) } className='btn btn-danger'>Delete</button>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default ShowProducts