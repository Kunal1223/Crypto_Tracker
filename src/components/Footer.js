import React from 'react';

const Footer = () => {
  return (
    <div className='mt-24 mb-4 items-center text-center'>
      <p className='text-sm text-gray-600'>&copy; {new Date().getFullYear()} KunalCrypto. All rights reserved.</p>
    </div>
  );
}

export default Footer;
