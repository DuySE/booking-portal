import { Routes, Route } from 'react-router-dom';
import Login from './FormLogin';
import Booking from './Booking';

const AppRoutes = () => {
  const token = localStorage.getItem('token');
  return (
    <Routes>
      <Route path='/' element={token ? <Booking /> : <Login />} />
      <Route path='bookings' element={token ? <Booking /> : <Login />} />
    </Routes>
  )
}

export default AppRoutes;
