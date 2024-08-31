import {stock} from '../data/stock'

export const pedirProductos = () =>{
    return new Promise((resolve, reject) =>{
        resolve(stock)
        reject("Rechazado")
    })
}