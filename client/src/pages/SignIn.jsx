import React, { useState } from 'react';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password){
      return setErrorMessage('Please fill out all fields.');
    }
    try{
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/home');
      }
    } catch (error){
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/*left */}
        <div className='flex-1'>
          <div className='flex flex-col gap-4'>
            <p className='text-5xl text-cyan-800 font-bold mt-5'>School's</p>
            <Link to="/" className='font-bold dark:text-white text-4xl'>
           
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
               via-purple-500 to-blue-950 rounded-lg text-white'>Notice Board</span>  
            </Link>
          </div>
          <p className='text-sm mt-5'>
            Sign in with your email and password
            or continue with Google.
          </p>
        </div>
        {/*right */}

        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label htmlFor='email'>Your email</Label>
              <TextInput type='email' placeholder='name@company.com' id= 'email' onChange={handleChange}/>
            </div>
            <div>
              <Label htmlFor='password'>Your password</Label>
              <TextInput type='password' placeholder='************' id= 'password' onChange={handleChange}/>
            </div>
            <Button className='bg-gradient-to-r from-green-300 to-blue-500 text-white' type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size='sm' />
                    <span className='pl-3'>Loading...</span>
                  </>
                ) : ('Sign In'
              )}
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an account?</span>
            <Link to='/sign-up' className='text-blue-500'>
              Sign Up
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}
