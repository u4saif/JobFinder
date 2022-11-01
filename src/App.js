import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Error } from "./Pages/Error";
import { Landing } from "./Pages/Landing";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
