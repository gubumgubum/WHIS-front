import { useEffect, useState } from 'react';
import AuthHeader from '../../components/header/auth/ui';
import PostBox from '../../components/main/postbox';
import CreatePost from '../../components/main/createpost';
import Dropdown from '../../components/main/dropdown';
import { getPosts } from '../../apis/main-auth/main';

import postbear from '../../assets/img/postbear.png';
import blueberrybear from '../../assets/img/blueberrybear.png';
import letter from '../../assets/img/letter.png';
import snack from '../../assets/img/snack.png';
import hearts from '../../assets/img/hearts.png';
import paper from '../../assets/img/paper.png';
import { Link } from 'react-router-dom';

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

const CATEGORY_MAP = {
  전체: null,
  '1학년': 'GRADE_1',
  '2학년': 'GRADE_2',
  '3학년': 'GRADE_3',
  공부: 'STUDY',
  전공: 'MAJOR',
  '코드 공유': 'CODE_SHARE',
  자격증: 'CERTIFICATE',
  취업: 'JOB',
  연애: 'LOVE',
  잡담: 'CHAT',
  학교: 'SCHOOL',
};

export default function MainAuthPage() {
  const [selected, setSelected] = useState('전체');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const category = CATEGORY_MAP[selected];
        const data = await getPosts(category);
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, [selected]);

  return (
    <div className="relative w-full">
      <AuthHeader />

      <img
        src={postbear}
        alt="곰탱이 이미지"
        className="w-[104px] fixed bottom-[50px] left-[50px] z-50"
      />

      <CreatePost className="fixed bottom-[50px] right-[50px] z-50" />

      <div className="flex pl-[474px] pt-[83px] pr-[386px] pb-[110px] gap-[60px]">
        <div className="flex flex-col gap-[20px]">
          <Dropdown
            options={categories}
            value={selected}
            onChange={setSelected}
          />
          <PostBox posts={posts} />
        </div>

        <div className="w-[60px]" />

        <div className="flex flex-col gap-[100px] mt-[83px]">
          <div className="flex flex-col gap-5">
            <p className="font-pretendard font-semibold">
              Whis에 대한 모든 것📸
            </p>

            <div className="grid grid-cols-2 gap-5">
              <Link
                to="/about"
                className="flex flex-col bg-[#FFEEE1] rounded-xl w-[188px] h-[199px] pt-10 px-5 pb-5"
              >
                <p className="font-pretendard font-extrabold">Whis?</p>
                <p className="font-pretendard text-[10px] mb-[21px]">
                  Whis 알아보러 가기
                </p>
                <div className="flex justify-end">
                  <img src={blueberrybear} alt="" className="w-[62px]" />
                </div>
              </Link>

              <Link
                to="/report-view"
                className="flex flex-col bg-[#FFE1E1] rounded-xl w-[188px] h-[199px] pt-10 px-5 pb-5"
              >
                <p className="font-pretendard font-semibold">신고 내역</p>
                <p className="font-pretendard text-[10px] mb-[21px]">
                  내가 신청한 신고에서
                  <br />
                  내가 받은 신고 내역까지
                </p>
                <div className="flex justify-end">
                  <img src={letter} alt="" className="w-[78px]" />
                </div>
              </Link>

              <Link
                to="/create-post"
                className="flex flex-col bg-[#D8EDFF] rounded-xl w-[188px] h-[199px] pt-10 px-5 pb-5"
              >
                <p className="font-pretendard font-semibold">글 작성</p>
                <p className="font-pretendard text-[10px] mb-[21px]">
                  카테고리를 설정하여
                  <br />
                  원하는 글 작성
                </p>
                <div className="flex justify-end">
                  <img src={snack} alt="" className="w-[55px]" />
                </div>
              </Link>

              <Link
                to="/like-post"
                className="flex flex-col bg-[#FFD9C9] rounded-xl w-[188px] h-[199px] pt-10 px-5 pb-5"
              >
                <p className="font-pretendard font-semibold">좋아요</p>
                <p className="font-pretendard text-[10px] mb-[21px]">
                  좋아요한 글 확인
                </p>
                <div className="flex justify-end">
                  <img src={hearts} alt="" className="w-[86px]" />
                </div>
              </Link>
            </div>
          </div>

          <div>
            <p className="font-pretendard font-semibold">문의하기</p>
            <Link
              to="/inquiry"
              className="flex flex-col bg-[#FFF6D0] rounded-xl w-[396px] h-[149px] pt-10 px-5"
            >
              <p className="font-pretendard text-[10px]">
                Whis에 대해 문의하실 내용이 있으신가요?
              </p>
              <p className="font-pretendard font-extrabold">
                문의하러 가기 &gt;
              </p>
              <div className="flex justify-end">
                <img src={paper} alt="" className="w-[110px]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
