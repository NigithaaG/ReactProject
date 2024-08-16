import React, { Component } from 'react';
import CardComponent from './CardComponent';

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
      { name: 'Green Shirt', description: 'Rs.699', image: 'https://img.freepik.com/free-photo/concentrated-young-man-sitting-isolated-grey_171337-10555.jpg?t=st=1723804909~exp=1723808509~hmac=0f18d35ceb67ab12cc23cf30420741d17ba75f3aba8b6fc5e4e59f639eee8c25&w=740' },
      { name: 'Blue Shirt', description: 'Rs.549', image: 'https://img.freepik.com/free-photo/young-handsome-businessman-model-man-casual-cloth-sunglasses-street_158538-8343.jpg?t=st=1723804942~exp=1723808542~hmac=af8d213ab483503e649acec11eb85646ac3eae00ddb842d17ea8a52312f54b35&w=740' },
      { name: 'Yellow Top', description: 'Rs.650', image: 'https://img.freepik.com/free-photo/young-woman-with-shopping-bags-beautiful-dress_1303-17549.jpg?t=st=1723805015~exp=1723808615~hmac=11190d341571f0080a19b81f9afac146ac94a69afbb8a049dff1146be70ef1a5&w=740' },
    ];
    this.setState({ dresses });
  }

  render() {
    return (
      <div className="container">
        <h2>Our Collection</h2>
        <div className="row">
          {this.state.dresses.map((dress, index) => (
            <CardComponent key={index} dress={dress} />
          ))}
        </div>
      </div>
    );
  }
}

export default DressListComponent;
