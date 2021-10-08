import React from 'react';
import Product from '../Product/Product';

class SearchProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.addToBasket = this.addToBasket.bind(this);
    this.getData = this.getData.bind(this);
  }
  addToBasket = (dispatch, item) => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item,
      id: item.id,
    });
  };
  getData = () => {
    fetch('http://localhost:3001/Product/'+ window.location.hash.split("/")[2])
      .then((res) => res.json())
      .then((i) => this.setState({ data: [i] }));
  };
  componentDidMount() {
    this.getData();
  }
  render() 
  {
    return (
      <div style={{ marginTop: '5%' }} className='container'>
        <div className='row row-cols-1 row-cols-md-2 g-4'>
          {this.state.data.map((i, index) => {
            return (
              <Product
                id={i.id}
                title={i.title}
                image={i.image}
                price={i.price}
                rating={5}
                stock={i.stock}
                addToBasket={this.addToBasket}
              />
            );
          })}
          
            </div>
          </div>
    
    );
  }
}

export default SearchProduct;
