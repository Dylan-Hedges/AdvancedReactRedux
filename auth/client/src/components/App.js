import React from 'react';
import Header from './Header';

//Main App component - {children} is used to display the Welcome component, it is passed in in the index.js file using <Route />, it can then be accessed under the {children} prop which is passed into this component
export default ({children}) => {
  return(
    <div>
      <Header />
      {children}
    </div>
  );
};
