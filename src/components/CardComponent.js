import React from 'react';

const CardComponent = ({ dress }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img className="card-img-top" src={dress.image} alt={dress.name} />
        <div className="card-body">
          <h5 className="card-title">{dress.name}</h5>
          <p className="card-text">{dress.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
