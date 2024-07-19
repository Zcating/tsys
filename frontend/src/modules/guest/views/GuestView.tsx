import React from 'react';

export function GuestView() {
  return (
    <div className='bg-gray-100 flex flex-col items-center w-screen h-screen'>
      <header className='h-16'></header>
      <section className="pt-2 pb-16">
        <div className="w-[552px] p-14 bg-white">
          <div>
            Welcome to TSYS-CMS
          </div>
        </div>
      </section>
    </div>
  );  
}