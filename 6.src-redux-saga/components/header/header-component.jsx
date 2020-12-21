import React from 'react'
import './header.styles.scss';
// import {Link} from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import {connect} from 'react-redux';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';
import { HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer } from './header.styles';


const Header = ({currentUser, hidden}) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/' className="logo-container">
        <Logo className='logo'/>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink to='/shop'>
          CONTACT
        </OptionLink>
        {
          currentUser ?(
          <OptionDiv onClick={()=>auth.signOut()}>SIGN OUT</OptionDiv>
          ):(
          <OptionLink to='/signin'>
            SIGN IN
          </OptionLink>
        )}
       
        <CartIcon/>

      </OptionsContainer>
      { hidden? null :
        <CartDropDown/>
      }
    </HeaderContainer>
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
