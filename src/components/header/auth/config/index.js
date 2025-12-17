import Alerts from '../../../../assets/icon/alerts';
import People from '../../../../assets/icon/people';
import Search from '../../../../assets/icon/search';

export const AUTH_HEADER_NAV = [
  { label: '검색', path: '/search', icon: <Search />, className: 'mr-[342px]' },
  { label: '알람', path: '/alerts', icon: <Alerts />, className: 'mr-[30px]' },
  { label: '내 계정', path: '/mypage', icon: <People /> },
];
