


const products = [
    {id: 1, name: 'Silly Top', price: '$4000', stock: 5, category: 'verano'}, 
    {id: 2, name: 'Noodle Being', price: '$2500', stock: 0, category: 'invierno'}
]

const categories = [
    {id:'winter', description:'Winter'},
    {id:'sumer', description:'Sumer'}
]

export const getCategories = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories)
        }, 1000)        
    })
}
export const getProducts = (category) => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            category ? resolve(products.filter(product => product.category === category)) : resolve(products)
        }, 1000)        
    })
}

export const getProductById = (id) => {  
    return new Promise((resolve, reject) => {
        const product = products.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => resolve(product), 1000)
    })
}

export const getItem = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products[0])
        }, 1000)        
    })
}