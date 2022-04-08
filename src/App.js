import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import './App.css';
import Login from './component/Login/Login';
import Register from './component/Register/Register';

function App() {
  const [forum, setFourm] = useState(false)

  const handleLogin = () => {
    console.log('clicked login')
    setFourm(false)
  }
  const handleRegister = () => {
    console.log('clicked Register')
    setFourm(true)
  }

  return (
    <div className='main-section'>   
      <div className='w-50 mx-auto shadow border p-4 mt-5 rounded-3'>
      <h1 className='text-center  mb-5'>This is main section</h1>
        <div className='d-flex justify-content-around'>
          <h3 onClick={handleLogin} className='text-info bg-light cursor-class px-5 py-2'>LogIn</h3>
          <p>or</p>
          <h3 onClick={handleRegister} className='text-info bg-light cursor-class px-5 py-2'>Register</h3>
        </div>
        {forum ?
          <Register></Register> : <Login></Login>
        }
      </div>
    </div>
  );
}

export default App;
