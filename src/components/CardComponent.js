import React from 'react';
import PropTypes from 'prop-types';

const CardComponent = ({ dress, onAddToCart }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '15px' }}>
      <img src={dress.image} className="card-img-top" alt={dress.name} />
      <div className="card-body">
        <h5 className="card-title">{dress.name}</h5>
        <p className="card-text">{dress.description}</p>
        <button className="btn btn-primary" onClick={() => onAddToCart(dress)}>
          Add to Cart
        </button>
        <button className="btn btn-secondary" style={{ marginLeft: '10px' }}>
          Order
        </button>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  dress: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default CardComponent;
