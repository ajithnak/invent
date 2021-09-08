export const initialState = {
  basket: [],
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
export const remain = (stock) => {
  return stock - 1;
};
//stock?.reduce((stock,basket) => stock - basket ) ;

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      const updatedItem = { ...action.item, stock: action.item.stock - 1 };
      fetch('http://localhost:3001/Product/' + action.item.id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ stock: updatedItem.stock }),
      });
      return {
        basket: [...state.basket, updatedItem],
        ...updatedItem,
      };
    case 'REMOVE_FROM_BASKET':

      fetch('http://localhost:3001/Product/' + action.id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ stock: action.stock + 1 }),
      });
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
