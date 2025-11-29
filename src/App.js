import { Routes, Route } from 'react-router-dom';
import SigninPage from './pages/signin';

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SigninPage />} />
    </Routes>
  );
}

export default App;
