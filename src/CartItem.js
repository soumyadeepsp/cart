import React from 'react';
import './CartItem.css';

function CartItem() {
    return (
        <div className="cart_item">
            <div className="left_block">
                <img className="image" />
            </div>
            <div className="right_block">
                <div className="name">Phone</div>
                <div className="price">Rs 999</div>
                <div className="quantity">Qty: 1</div>
                <div className="cart_item_actions"></div>
            </div>
        </div>
    )
}

export default CartItem
