import React, { useState, useEffect } from 'react'
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemListContainer.css'

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false);

    const [items, setItems] = useState([])

    useEffect(() =>{
        setLoading(true)
        pedirProductos()
            .then((res) =>{
                setItems(res)
            })
            .catch((error) =>{
                console.error(error)
            })
            .finally(() =>{
                setLoading(false)
            })
    }, [])

  return (
    <>
        {
            loading ? <div>Cargando...</div> : (
                <div className='container'>
                    {items.map((item) =>(
                        <div className='card' key={item.id}>
                            <img src={item.photo} alt={item.photo} />
                            <p>{item.descripcion}</p>
                            <p>{item.price}</p>
                            <p>{item.category}</p>
                            <p>{item.stock}</p>
                            <ItemCount/>
                        </div>
                    ))}
                </div>
            )
        }
    </>
  )
}
