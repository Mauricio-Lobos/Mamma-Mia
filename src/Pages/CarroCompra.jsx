import React, { useContext } from 'react';
import { Context } from '../Context';

export default function Carrito() {
  const { setCart, addToCart, removeToCart, setPizzasToArray, calculatedPrice, setCalculatedPrice, pizzasOrdered } = useContext(Context);

  let list = []
  let count = 1

  const listOfOrderedPizzas = () => {
    for (let i = 0; i < pizzasOrdered.length; i++) {
      let index = pizzasOrdered[i];

      if (index  === pizzasOrdered[i + 1]) {
        count++
      }
      else {
        const newList = {
          id: index.id,
          name: index.name,
          price: index.price,
          img: index.img,
          count: count,
          result: count * index.price
        }
        list.push(newList)
        count = 1
      }
    }
  }

  listOfOrderedPizzas();
  setCart(pizzasOrdered);

  return (
      <div className='cart-contain'>
        <h3><b>Detalle del pedido:</b></h3>
        {list.map((pizza) =>
          <div className='card-of-cart'>
            <img className='img-cart' src={pizza.img} alt="" />
            <div className='name-of-pizza'>
              <p>{pizza.name}</p>
              <p className='valor-of-pizza-each'>${pizza.result}</p>
            </div>
            <div className='btn-cart' >
              <button className='remove-btn' onClick={() => { removeToCart(pizza.id) }}> - </button>
              <p><b>{pizza.count}</b></p>
              <button className='plus-btn' onClick={() => { addToCart(pizza.id); setCalculatedPrice(setPizzasToArray(pizza.id)) }}> + </button>
            </div>
          </div>
        )}
          <h2> <b>Total:${calculatedPrice}</b> </h2>
          <button className='btn-purchase'>Ir a pagar</button>
      </div>
  )
}