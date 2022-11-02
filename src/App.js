import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Error } from "./pages/Error";
import { Landing } from "./pages/Landing";
import { Register } from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='register' element={<Register />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
