import React from 'react';

function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img
        className='w-16 h-16 rounded-full border p-[2px]'
        src='https://www.pinclipart.com/picdir/big/165-1653686_female-user-icon-png-download-user-colorful-icon.png'
        alt=''
      />
      <div className='flex-1 mx-4'>
        <h2 className='font-bold'>Pedro</h2>
        <h3 className='text-sm text-gray-400'>Instagram Clone!</h3>
      </div>
      <button className='text-blue-400 text-sm font-semibold'>
        Cerrar Sesión
      </button>
    </div>
  );
}

export default MiniProfile;
