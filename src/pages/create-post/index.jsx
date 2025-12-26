import ContentInput from '../../components/create-post/contentinput';
import TitleInput from '../../components/create-post/titleinput';
import AuthHeader from '../../components/header/auth/ui';

export default function CreatePostPage() {
  return (
    <div>
      <AuthHeader />
      <div>
        <p>게시글 작성</p>
        <div>
          <TitleInput />
          <ContentInput />
        </div>
      </div>
    </div>
  );
}
