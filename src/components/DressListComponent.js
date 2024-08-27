import React, { Component } from 'react';
import CardComponent from './CardComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class DressListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dresses: [],
    };
  }

  componentDidMount() {
    this.fetchDresses();
  }

  fetchDresses() {
    const dresses = [
      { name: 'Blue Regular Maxi dress', description: 'Rs.699', image: '/images/n2.avif' },
      { name: 'Blue Floral print dress', description: 'Rs.549', image: '/images/n4.webp' },
      { name: 'Green Embroidered dress', description: 'Rs.650', image: '/images/n4.avif' },
      { name: 'Pink Floral Churidhar', description: 'Rs.750', image: '/images/n3.jpg' },
    ];
    this.setState({ dresses });
  }

  handleAddToCart = (dress) => {
    toast.success(`${dress.name} added to cart!`);
  };

  render() {
    return (
      <div className="container">
        <h2>Our Collection</h2>
        <div className="row">
          {this.state.dresses.map((dress, index) => (
            <CardComponent 
              key={index} 
              dress={dress} 
              onAddToCart={this.handleAddToCart} 
            />
          ))}
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default DressListComponent;
