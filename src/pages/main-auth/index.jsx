import AuthHeader from '../../components/header/auth/ui';
import PostBox from '../../components/signup/postbox';
import postbear from '../../assets/img/postbear.png';
import CreatePost from '../../components/signup/createpost';

export default function MainAuthPage() {
  return (
    <div>
      <AuthHeader />
      <img
        src={postbear}
        alt="곰탱이 이미지"
        className="w-[104px] fixed bottom-[50px] left-[50px] z-50"
      />
      <CreatePost className="fixed bottom-[50px] right-[50px] z-50" />

      <PostBox />
    </div>
  );
}
