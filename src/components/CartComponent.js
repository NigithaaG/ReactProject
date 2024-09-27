import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store';

const CartComponent = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (dressId) => {
    dispatch(removeFromCart(dressId));
  };

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={item.image} className="img-fluid rounded-start" alt={item.name} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">Quantity: {item.quantity}</p>
                  <button className="btn btn-danger" onClick={() => handleRemoveFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartComponent;