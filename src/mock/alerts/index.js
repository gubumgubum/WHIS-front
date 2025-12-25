import BigHeart from '../../assets/icon/bigheart';
import Comment from '../../assets/icon/comment';

export const mockNotifications = [
  {
    id: 6,
    type: 'like',
    icon: <BigHeart />, // 이모지
    title: '이하경님이 회원님의 게시글을 좋아합니다',
    content: '전공을 어떤걸로 선택해야 할지 막막해요...',
    link: '/post/9',
    createdAt: '1시간 전',
  },
  {
    id: 7,
    type: 'report',
    icon: '🚨', // SVG 컴포넌트
    title: '회원님의 게시글이 신고 받았습니다',
    content: '전공을 어떤걸로 선택해야 할지 막막해요...',
    link: '/post/6',
    createdAt: '1시간 전',
  },
  {
    id: 3,
    type: 'comment',
    icon: <Comment />, // SVG 컴포넌트
    title: '익명님이 회원님의 게시물에 댓글을 남겼습니다',
    content: '전공을 어떤걸로 선택해야 할지 막막해요...',
    link: '/post/8',
    createdAt: '1시간 전',
  },
  {
    id: 4,
    type: 'report',
    icon: '🚨', // SVG 컴포넌트
    title: '회원님의 신고가 정상적으로 접수되었습니다',
    content: '하 진짜 전세준 겁나 못생겼음! 말이 안되네 걍 나가라',
    link: '/post/3',
    createdAt: '4시간 전',
  },
  {
    id: 5,
    type: 'signup',
    icon: '🎉', // SVG 컴포넌트
    title: 'Whis 회원가입을 축하드립니다!',
    content: '김지유님 회원가입이 성공적으로 완료되었습니다',
    link: '/alerts',
    createdAt: '1일 전',
  },
];
