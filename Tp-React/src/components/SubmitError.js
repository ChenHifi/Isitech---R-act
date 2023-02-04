import React from 'react';

export const SubmitError = ({ error, children }) => {
  return (
    <>
      {error && <div className='error-message'>Please enter all fields</div>}
      {children}
    </>
  );
};