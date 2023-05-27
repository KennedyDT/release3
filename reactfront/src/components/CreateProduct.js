import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/productos'

const CreateProduct = () => {
    const [Nombre, setNombre] = useState('')
    const [Marca, setMarca] = useState('')
    const [Descripcion, setDescripcion] = useState('')
    const [Precio, setPrecio] = useState('')
    const [Cantidad, setCantidad] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {Nombre: Nombre, Marca: Marca, Descripcion: Descripcion, Precio: Precio, Cantidad:Cantidad})
        navigate('/')
    }
    
  return (
    <div>
        <h3>Nuevo producto</h3>
        <form onSubmit={store}>
        <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                    value={Nombre}
                    onChange={ (e)=> setNombre(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>




            <div className='mb-3'>
                <label className='form-label'>Marca</label>
                <input 
                    value={Marca}
                    onChange={ (e)=> setMarca(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Descripcion</label>
                <input 
                    value={Descripcion}
                    onChange={ (e)=> setDescripcion(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Cantidad</label>
                <input 
                    value={Cantidad}
                    onChange={ (e)=> setCantidad(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            
            <div className='mb-3'>
                <label className='form-label'>Precio</label>
                <input 
                    value={Precio}
                    onChange={ (e)=> setPrecio(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>actualizar</button>
        </form>
    </div>
  )
}

export default CreateProduct