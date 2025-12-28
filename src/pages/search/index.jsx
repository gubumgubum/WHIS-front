import { useState } from 'react';
import AuthHeader from '../../components/header/auth/ui';
import SearchBar from '../../components/search/searchbar';
import PostBox from '../../components/main/postbox';
import { searchPosts } from '../../apis/search/search';
import { toast } from 'sonner';

export default function SearchPage() {
  const [keyword, setKeyword] = useState('');
  const [posts, setPosts] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    if (!keyword.trim()) {
      toast.warning('검색어를 입력해주세요');
      return;
    }

    try {
      setHasSearched(true);
      const data = await searchPosts({ keyword });
      setPosts(data);
    } catch (error) {
      toast.error('검색을 실패했습니다.');
    }
  };

  const renderContent = () => {
    if (!hasSearched) {
      return (
        <p className="font-pretendard text-[#818181]">검색어를 입력하세요</p>
      );
    }

    if (hasSearched && posts.length === 0) {
      return (
        <p className="font-pretendard text-[#818181]">검색 결과가 없습니다</p>
      );
    }

    return <PostBox posts={posts} />;
  };

  return (
    <div className="min-h-screen">
      <AuthHeader />

      <div className="flex flex-col items-center my-[50px]">
        <div className="relative flex items-center mb-[50px]">
          <SearchBar
            value={keyword}
            onChange={setKeyword}
            onSubmit={handleSearch}
          />
        </div>

        {renderContent()}
      </div>
    </div>
  );
}
