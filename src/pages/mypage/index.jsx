import { useState } from 'react';
import ProfileCard from '../../components/mypage/profilecard';
import MyPageTabs from '../../components/mypage/mypagetaps';
import MyPosts from '../../components/mypage/myposts';
import MyComments from '../../components/mypage/mycomments';
import LikedPosts from '../../components/mypage/LikedPosts';
import ViewedPosts from '../../components/mypage/viewedposts';
import AuthHeader from '../../components/header/auth/ui';
import CreatePost from '../../components/main/createpost';

const TABS = {
  POSTS: 'posts',
  COMMENTS: 'comments',
  LIKES: 'likes',
  VIEWS: 'views',
};

export default function MyPage() {
  const [tab, setTab] = useState(TABS.POSTS);

  return (
    <div>
      <AuthHeader />
      <CreatePost className="fixed bottom-[50px] right-[50px] z-50" />
      <div className="flex flex-col mt-[180px] mb-[50px] gap-[10px] items-center justify-center">
        <ProfileCard />

        <MyPageTabs tab={tab} onChange={setTab} />

        {tab === TABS.POSTS && <MyPosts />}
        {tab === TABS.COMMENTS && <MyComments />}
        {tab === TABS.LIKES && <LikedPosts />}
        {tab === TABS.VIEWS && <ViewedPosts />}
      </div>
    </div>
  );
}
