import React from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function signup() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/*left */}
        <div className='flex-1'>
          <Link to="/" className='font-bold dark:text-white text-4xl'>
           
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
            via-purple-500 to-blue-950 rounded-lg text-white'>Notice Board</span>  
        </Link>
        <p className='text-sm mt-5'>
          Sign up with your email and password
          or continue with Google.
        </p>
        </div>
        {/*right */}

        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label htmlFor='username'>Your username</Label>
              <TextInput type='text' placeholder='Username' id= 'username' />
            </div>
            <div>
              <Label htmlFor='email'>Your email</Label>
              <TextInput type='text' placeholder='name@company.com' id= 'email' />
            </div>
            <div>
              <Label htmlFor='password'>Your password</Label>
              <TextInput type='text' placeholder='Password' id= 'password' />
            </div>
            <Button className='bg-gradient-to-r from-green-300 to-blue-500 text-white' type='submit'>
              Sign Up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
