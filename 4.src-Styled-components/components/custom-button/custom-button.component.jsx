// import React from 'react';

// import './custom-button.styles.scss';

// const CustomButton = ({ children, isGoogleSignIn,inverted, ...otherProps }) => (
//   <button
//     className={`${inverted ? 'inverted' : ''}${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
//     {...otherProps}
//   >
//     {children}
//   </button>
// );

// export default CustomButton;

import React from 'react';
import { CustomButtonContainer } from './custom-button.styles';

import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;