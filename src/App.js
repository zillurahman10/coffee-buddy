import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/LogIn/LogIn';
import Coffees from './Pages/Coffees/Coffees';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import AllReviews from './Pages/AllReviews/AllReviews';
import CoffeeDetail from './Pages/Coffees/CoffeeDetail';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/coffees' element={<Coffees></Coffees>}></Route>
        <Route path='/coffees/:id' element={<CoffeeDetail></CoffeeDetail>}></Route>
        <Route path='/reviews' element={<AllReviews></AllReviews>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
