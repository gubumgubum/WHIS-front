import { Toaster } from 'sonner';

import { Routes, Route } from 'react-router-dom';
import SigninPage from './pages/signin';
import Step1Page from './pages/signup/step1';
import Step2Page from './pages/signup/step2';

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Routes>
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup-step1" element={<Step1Page />} />
        <Route path="/signup-step2" element={<Step2Page />} />
      </Routes>
    </>
  );
}

export default App;
