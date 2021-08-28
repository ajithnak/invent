import React from 'react';
import './Nuts.css';
import Product from './Product';

class Nuts extends React.Component {
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
    fetch('http://localhost:3001/Product?type=nuts')
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
          <div class='card bg-light text-white'>
            <img
              style={{ width: '50%', height: 'auto', marginTop: '4%' }}
              src={this.state.data[0]?.image}
              class='card-img-top rounded mx-auto d-block'
              alt={`food_${1}`}
            />
            <div
              class='card-img-overlay'
              id='2'
              onMouseEnter={() => {
                document.getElementById('2').style.backgroundImage =
                  'linear-gradient(black, rgba(0,0,0,0))';
              }}
              onMouseLeave={() =>
                (document.getElementById('2').style.backgroundImage = '')
              }
            >
              <h5 class='card-title'>Card title</h5>
              <p class='card-text'>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class='card-text'>Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nuts;
