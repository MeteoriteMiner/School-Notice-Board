import React from 'react'
import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex border border-teal-500 p-3 justify-center items-center rounded-tl-3xl rounded-br-3xl flex-col sm:flex-row text-center'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>
          Want to learn more about the school of Data Science, BRAC University?
        </h2>
        <p className='text-gray-500 my-2'>
          Check out the website to learn more about the faculty members, courses offered and everything!!
        </p>
        <a
          href='https://cse.sds.bracu.ac.bd/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button
            className='bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-gray-900 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400 rounded-tl-xl rounded-bl-none rounded-br-xl w-full'
          >
            BRACU CSE
          </Button>
        </a>
      </div>
      <div className='flex-1 p-7'>
        <img src='https://www.bracu.ac.bd/sites/default/files/uploads/2025/07/01/sun_drance.jpg' />
      </div>
    </div>
  );
}