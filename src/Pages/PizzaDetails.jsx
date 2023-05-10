import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";

export default function PizzaDetails() {
    const params = useParams();
    const { pizzas, addToCart, setPizzasToArray, setCalculatedPrice } = useContext(Context);
    const getPizzaById = (id) => pizzas.find((pizza) => pizza.id === id);
    const pizza = getPizzaById(params.id);

    return (
        <>
            <div className="contain-details">
                <div><img src={pizza.img} alt="" /></div>
                <div className="flex-descrip">
                    <h1>{pizza.name}</h1>
                    <p>{pizza.desc}</p>
                    <p>Ingredientes</p>
                    <ul>
                        {pizza.ingredients.map((ingredient) => (
                            <li>{ingredient}</li>
                        ))}
                    </ul>
                    <div className="add-to-cart">
                        <b><span>Precio: ${pizza.price}</span></b>
                        <button className="btn-add" onClick={() => { addToCart(pizza.id); setCalculatedPrice(setPizzasToArray(pizza.id)) }}>Añadir</button>
                    </div>
                </div>

            </div>
        </>
    )
}