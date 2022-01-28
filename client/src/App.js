import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import pages
import Display from './Pages/display_board'
import Admin from './Pages/admin_board'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path='/display' exact element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
