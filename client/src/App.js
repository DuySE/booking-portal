import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/organisms';

function App() {
  return (
    <BrowserRouter >
      <AppRoutes />
    </BrowserRouter >
  );
}

export default App;
