import React from 'react';
import { useCart } from "react-use-cart";

const Itemcard = ({ img, title, price, item }) => {
    const { addItem } = useCart();
    return (
        <div className="card">
            <img src={img} alt={img} className="card-img-top" />
            <div className="card-body">
                <p className="card-title">{title}</p>
                {//<p className='card-text'>{price}</p>
                }
                <b>Price: ₹.{price}</b><br></br>
                <button onClick={() => addItem(item)}
                    className="btn btn-primary btnaddtocart">Add to cart</button>
            </div>
        </div>
    );
}
export default Itemcard;