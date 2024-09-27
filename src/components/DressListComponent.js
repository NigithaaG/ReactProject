import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardComponent from './CardComponent';
import { fetchDresses, addToCart } from '../store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DressListComponent = () => {
  const dispatch = useDispatch();
  const dresses = useSelector(state => state.dresses.list);

  useEffect(() => {
    dispatch(fetchDresses());
  }, [dispatch]);

  const handleAddToCart = (dress) => {
    dispatch(addToCart(dress));
    toast.success(`${dress.name} added to cart!`);
  };

  return (
    <div className="container">
      <h2>Our Collection</h2>
      <div className="row">
        {dresses.map((dress) => (
          <CardComponent key={dress.id} dress={dress} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default DressListComponent;
