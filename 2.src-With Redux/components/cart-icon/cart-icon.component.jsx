import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';

const CartIcon = ({toggleCartHidden, itemCount}) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

const mapDispatchToProps =dispatch => ({
  toggleCartHidden:()=>dispatch(toggleCartHidden())
})


// normal code
// const mapStateToProps =({cart:{cartItems}}) =>({
//   itemCount: cartItems.reduce((accumalatedQuantity, cartItem)=>
//     accumalatedQuantity + cartItem.quantity, 0
//   )
// })


// using selectors
// const mapStateToProps =(state) =>({
//   itemCount: selectCartItemsCount(state)
// })

//----------------(or)-----------------

const mapStateToProps =createStructuredSelector({
  itemCount: selectCartItemsCount
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
