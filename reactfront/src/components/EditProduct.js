import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/productos/'

const EditProduct = () => {
    const [Nombre, setNombre] = useState('')
    const [Marca, setMarca] = useState('')
    const [Descripcion, setDescripcion] = useState('')
    const [Precio, setPrecio] = useState('')
    const [Cantidad, setCantidad] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            Descripcion: Descripcion,
            Precio: Precio,
            Cantidad: Cantidad
        })
        navigate('/')
    }
    
    useEffect( () =>{
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setNombre(response.data.Nombre)
            setMarca(response.data.Marca)
            setDescripcion(response.data.Descripcion)
            setPrecio(response.data.Precio)
            setCantidad(response.data.Cantidad)
        }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <div>
        <h3>Edit Product</h3>
        <form onSubmit={update}>
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

            <button type='submit' className='btn btn-primary'>Update</button>
        </form>
    </div>
    )
}

export default EditProduct
