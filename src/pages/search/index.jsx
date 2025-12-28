import { useState } from 'react';
import AuthHeader from '../../components/header/auth/ui';
import Dropdown from '../../components/main/dropdown';
import SearchBar from '../../components/search/searchbar';
import PostBox from '../../components/main/postbox';

export default function SearchPage() {
  const [selected, setSelected] = useState('전체');
  const categories = [
    '전체',
    '1학년',
    '2학년',
    '3학년',
    '공부',
    '전공',
    '코드 공유',
    '자격증',
    '취업',
    '연애',
    '잡담',
    '학교',
  ];

  return (
    <div className="min-h-screen">
      <AuthHeader />

      <div className="flex flex-col items-center my-[50px]">
        <div className="relative flex justify-center items-center mb-[50px]">
          <div className="w-full max-w-[600px]">
            <SearchBar />
          </div>
          <div className="absolute left-[580px]">
            <Dropdown
              options={categories}
              value={selected}
              onChange={setSelected}
            />
          </div>
        </div>
        <PostBox />
      </div>
    </div>
  );
}
