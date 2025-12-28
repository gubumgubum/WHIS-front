import { Toaster } from 'sonner';

import { Routes, Route } from 'react-router-dom';
import SigninPage from './pages/signin';
import Step1Page from './pages/signup/step1';
import Step2Page from './pages/signup/step2';
import MainUnauthPage from './pages/main-unauth';
import MainAuthPage from './pages/main-auth';
import SettingPage from './pages/setting';
import Alerts from './pages/alerts';
import MyPage from './pages/mypage';
import ViewPostPage from './pages/view-post';
import SearchPage from './pages/search';
import NotFoundPage from './pages/404';
import CreatePostPage from './pages/create-post';

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
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/view-post" element={<ViewPostPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
      </Routes>
    </>
  );
}

export default App;
