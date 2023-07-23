import React, { useState } from 'react';
import axios from 'axios';

function Registration() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
       
        axios.post('/register', { name, email, password })
          .then((response) => {
            console.log(response.data);
           
            setName('');
            setEmail('');
            setPassword('');
          })
          .catch((error) => {
            console.error('Registration not sucessfull', error);
          });
      };
    return (
        <div className='d-flex w-100 vh-100 bg-primary justify-content-center align-items-center'>
            <div className='bg-white p-4 rounded w-30'>
                <h1>User Registration</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Name: </strong></label>
                        <input type='text' placeholder='Please Enter Name' value={name} className='form-control' onChange={(e) => setName(e.target.value)}></input>

                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email: </strong></label>
                        <input type='email' placeholder='Please Enter Email' value={email} className='form-control' onChange={(e) => setEmail(e.target.value)}></input>

                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password: </strong></label>
                        <input type='password' placeholder='Please Enter Password' value={password} className='form-control' onChange={(e) => setPassword(e.target.value)}></input>

                    </div>
                    <button type='submit' className='btn btn-success'>Submit</button>

                </form>
                
            </div>
            
        </div>
    )
}

export default Registration