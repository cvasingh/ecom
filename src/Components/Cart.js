import React from 'react';
import { useCart } from "react-use-cart";

import { FaMinus,FaPlus,FaTrash } from 'react-icons/fa'
const Cart = (props) => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return (<div className='home_banner mt-5 pt-5'><h1>Cart Is Empty</h1></div>)
    return (
        <div className='maincart  mt-5 pt-3'>
            <div className="cartdiv">
                <div className='home_banner'>
                    <div className="row justify-content-center mx-0 ">
                        <div className="col-md-10">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>No. Item</th>
                                        <th>Item Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item, index) => {
                                        return (
                                            <tr key={item}>
                                                <td>{item.quantity}</td>
                                                <td>{item.title}</td>
                                                <td>{item.price}</td>
                                                <td>
                                                    <button
                                                        className='btn  cartactionbutton'
                                                        onClick={() => { updateItemQuantity(item.id, item.quantity - 1) }}
                                                    ><FaMinus/>
                                                    </button>
                                                    <b className='cartquantity'>{item.quantity}</b>
                                                    <button
                                                        className='btn  cartactionbutton'
                                                        onClick={() => { updateItemQuantity(item.id, item.quantity + 1) }}
                                                    ><FaPlus/>
                                                    </button>
                                                </td>
                                                <td>
                                                    <button
                                                        className='btn cartactionbutton'
                                                        onClick={() => { removeItem(item.id) }}
                                                    ><FaTrash/>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Total No. Item ({totalItems})</th>
                                        <th>Unique Item ({totalUniqueItems})</th>
                                        <th>Total ₹.({cartTotal})</th>
                                        <th><button className='btn btn-primary '>Confirm Order</button></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cart;