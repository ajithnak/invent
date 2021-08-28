import React from 'react';
import './Food.css';
import Product from './Product';

class Searchbox extends React.Component {
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
    fetch('http://localhost:3001/Product')
      .then((res) => res.json())
      .then((i) => this.setState({ data: i }));
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    // console.log(this.state.data);
    return (
      <div style={{ marginTop: '5%' }} className='container'>
        <div class='row row-cols-1 row-cols-md-2 g-4'>
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

export default Searchbox;
