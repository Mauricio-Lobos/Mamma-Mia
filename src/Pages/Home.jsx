import React, { useContext } from 'react';
import { Context } from "../Context";
import { Link } from "react-router-dom";

export default function Home() {
    const { pizzas, addToCart, setPizzasToArray, setCalculatedPrice } = useContext(Context);

    return (
        <>
            <header className="header">
                <h1>¡Pizzeria Mamma Mia!</h1>
                <h4>¡Tenemos las mejores pizzas que podrás encontrar!</h4>
            </header>

            <main className="main">
                {pizzas.map((pizza) => (
                    <div key={pizza.id}>
                        <div className="card">
                            <div className="img-header"> <img src={pizza.img} alt="" /></div>
                            <h3>{pizza.name}</h3>
                            <hr />
                            <p>Ingredientes</p>
                            <ul>
                                {pizza.ingredients.map((ingredient) => (
                                    <li>{ingredient}</li>
                                ))}
                            </ul>
                            <hr />
                            <p className='price'><span>${pizza.price}</span></p>
                            <div className="btns">
                                <Link to={`/pizza/${pizza.id}`}>
                                    <button className='btn-see-more'>Ver más</button>
                                </Link>
                                <button className='btn-add' onClick={() => { addToCart(pizza.id); setCalculatedPrice(setPizzasToArray(pizza.id)) }}>Añadir</button>
                            </div>

                        </div>
                    </div>

                ))}
            </main>
        </>
    )
}