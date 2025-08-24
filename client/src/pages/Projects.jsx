import React from 'react'
import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-4xl mx-auto flex justify-center gap-8 items-center flex-col p-6'>
      <h1 className='text-4xl font-bold text-center'>Explore Our Projects</h1>
      <p className='text-lg text-gray-600 text-center max-w-3xl'>
        Warning: this page is a work in progress, just like my coffee intake. 
        My first project is a great start, but I'm brewing up some new ideas. 
        Check back soon for more exciting things!
      </p>
      <div className='w-full flex flex-col gap-6'>
        <section className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold dark:text-gray-900'>
            Why Coffee?
          </h2>
          <p className='text-gray-700 mt-2'>
            They say 'time is money.' I say 'coffee is time.' My productivity timeline looks something like this:

            <li>8:00 AM: Human-level functionality.</li>
            <li>8:01 AM: Coffee.</li>
            <li>8:05 AM: Unstoppable coding machine.</li>
             <li>1:00 PM: Decaf-induced existential crisis.</li>

             So, you see, coffee isn't just a drink. 
             It's a non-negotiable part of my project 
             management strategy. Without it, my project 
             deadlines would be more of a suggestion than an actual goal."
          </p>
        </section>
        <section className='bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center'>
          <h2 className='text-2xl font-semibold dark:text-gray-900'>
            Like this cat:
          </h2>
          <ul className='list-disc list-inside text-gray-700 mt-2 '>
            <img src="https://i.pinimg.com/474x/38/36/53/383653ffec08e9ed8282e3ea87bb8b16.jpg" />
          </ul>
        </section>
      </div>
      <CallToAction />
    </div>
  );
}