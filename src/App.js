import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/LogIn/LogIn';
import Coffees from './Pages/Coffees/Coffees';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import AllReviews from './Pages/AllReviews/AllReviews';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/coffees' element={<Coffees></Coffees>}></Route>
        <Route path='/reviews' element={<AllReviews></AllReviews>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
