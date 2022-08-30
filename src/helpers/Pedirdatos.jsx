import stock from '../Productos/productos'

const Pedirdatos = () => {
    return new Promise (( resolve, reject ) => {
        setTimeout (() => {
            resolve(stock)
        },3000)
    }) 
}


export default Pedirdatos;