import React from 'react'
import './header.styles.scss';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import {connect} from 'react-redux';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';
const Header = ({currentUser, hidden}) => {
  return (
    <div className="header">
      <Link to='/' className="logo-container">
        <Logo className='logo'/>
      </Link>
      <div className='options'>
        <Link to='/shop' className="option">
          SHOP
        </Link>
        <Link to='/shop' className="option">
          CONTACT
        </Link>
        {
          currentUser ?(
          <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
          ):(
          <Link className="option" to='/signin'>
            SIGN IN
          </Link>
        )}
       
        <CartIcon/>

      </div>
      { hidden? null :
        <CartDropDown/>
      }
    </div>
  )
}

//normal code
// const mapStateToProps =({user:{currentUser}, cart:{hidden}}) => ({
//   // currentUser: state.user.currentUser
//   currentUser,
//   hidden
// })

// // Using selector
// const mapStateToProps =(state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// })
//------------(or) -------------------
// Using selector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})
export default connect(mapStateToProps, null)(Header);
