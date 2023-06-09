import { Route, Routes } from 'react-router-dom';
import './App.css';
import Grandpa from './component/Grandpa/Grandpa';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import OrderReview from './component/OrdersReview/OrderReview';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/Orders' element={<OrderReview></OrderReview>}></Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
      </Routes>
    </div>
  );
}

export default App;
