export const initialState={
    basket: [ ], 
    user: null,
    stock: 5,
    };
    export const getBasketTotal= (basket) => 
      basket?.reduce((amount, item) => item.price + amount, 0 );
    export const remain = (stock) =>{
        return stock-1 ;
    }
      //stock?.reduce((stock,basket) => stock - basket ) ;
       
    const reducer = ( state, action,state1,action1) =>{
        console.log(action);
        switch(action.type){
            case "ADD_TO_BASKET":
                let newstock = state.basket;
                const updatedItem = {...action.item, stock: action.item.stock -1 };
                console.log({
                    basket: [...state.basket, updatedItem],
                    ...updatedItem
                })
                return{
                    basket: [...state.basket, updatedItem],
                    ...updatedItem
                };
            case "REMOVE_FROM_BASKET":
                let newBasket=[...state.basket];
                const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id);
                if (index >= 0){
                    newBasket.splice(index, 1);
                }else{
                    console.warn(
                        `Cant remove product (id: ${action.id}) as its not in basket!` 
                    );
                }
    
                return{...state, basket: newBasket};
                default:
                    return state;    
        }
    };
    

export default (reducer);