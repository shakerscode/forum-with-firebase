import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
 
import Dashbord from './component/Dashbord/Dashbord';
import Forum from './component/Forum/Forum';
import Header from './component/Header/Header';
import Home from './component/Home/Home';



 

function App() {
  return (
    <div className='main-section'>
       <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Dashbord></Dashbord>}></Route>
        <Route path='/login' element={<Forum></Forum>}></Route>
      </Routes>
    </div>
  );
}

export default App;
