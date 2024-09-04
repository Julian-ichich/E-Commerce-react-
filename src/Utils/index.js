/**
 * this function calculates total price of a new order
 * @params {Array} products cartProducts: array of objects
 * @returns {Number} total price
 */

const totalPrice =(products)=>{
    let sum =0
    products.forEach(product =>  sum += product.price);
    return sum
}

export {totalPrice}