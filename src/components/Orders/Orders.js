import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const handleDeleteItem = (id) => {
        const remainignItems = cart.filter(product => product.id !== id);
        setCart(remainignItems);
        removeFromDb(id);
    }

    // clear the cart
    const clearTheCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div>
            <div className='shop-container'>
                <div className="orders-container">
                    {
                        cart.map(product => <ReviewItem
                            key={product.id}
                            product={product}
                            handleDeleteItem={handleDeleteItem}
                            clearTheCart={clearTheCart}
                        ></ReviewItem>)
                    }
                    {
                        cart.length === 0 && <h2>No Items for review.Please <Link to='/shop'>shop now</Link></h2>
                    }
                </div>
                <div className="cart-container">
                    <Cart clearTheCart={clearTheCart} cart={cart}>
                        <Link to='/shipping'>
                            <button className='btn btn-success p-1 mx-2'>procced shipping</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;