import React from 'react'
import CallToAction from '../components/CallToAction';

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About School's Noticeboard
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to our school's official notice board website. This project 
              was developed to create a dynamic and efficient way for our school 
              to share key information with the entire community. It was built with 
              the aim of replacing traditional bulletin boards and outdated 
              communication methods with a modern, digital solution.
            </p>

            <p>
              Here, you'll find real-time updates on school activities, club 
              meetings, and important deadlines. We're committed to making 
              information transparent and accessible, helping to build a more 
              connected and informed school environment.
            </p>

            <p>
              We encourage you to use this resource to stay on top of all the 
              great things happening at our school. Your feedback is valuable 
              as we continue to grow and enhance this platform for everyone.


            </p>
          </div>
        </div>
        <div className='mt-10'>
          <CallToAction />
        </div>
      </div>
    </div>
  );
}
