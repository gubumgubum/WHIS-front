import { Toaster } from 'sonner';

import { Routes, Route } from 'react-router-dom';
import SigninPage from './pages/signin';
import Step1Page from './pages/signup/step1';
import Step2Page from './pages/signup/step2';
import MainUnauthPage from './pages/main-unauth';
import MainAuthPage from './pages/main-auth';
import SettingPage from './pages/setting';
import MyPage from './pages/mypage';

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Routes>
        <Route path="/" element={<MainUnauthPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup-step1" element={<Step1Page />} />
        <Route path="/signup-step2" element={<Step2Page />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/main-auth" element={<MainAuthPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </>
  );
}

export default App;
