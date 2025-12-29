import { useEffect, useState } from 'react';
import { getMyComments } from '../../apis/mypage/comment';
import { Link } from 'react-router-dom';

export default function MyComments({ userId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    setLoading(true);
    getMyComments(userId)
      .then(setComments)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [userId]);

  // 로딩
  if (loading) {
    return (
      <p className="text-[#818181] text-sm mt-10 text-center">
        댓글 불러오는 중…
      </p>
    );
  }

  // 댓글 없음
  if (comments.length === 0) {
    return (
      <p className="text-[#818181] text-sm mt-10 text-center">
        작성한 댓글이 없습니다
      </p>
    );
  }

  return (
    <div className="w-[600px] flex flex-col gap-4 mt-6">
      {comments.map((comment) => (
        <Link
          key={comment.commentId}
          to={`/post/${comment.postId}`}
          className="border border-[#e0e0e0] rounded-lg p-4 hover:bg-[#f9f9f9]"
        >
          <p className="text-sm text-[#555] mb-1">{comment.postTitle}</p>

          <p className="text-base">{comment.content}</p>

          <p className="text-xs text-[#999] mt-2">
            {new Date(comment.createdAt).toLocaleString()}
          </p>
        </Link>
      ))}
    </div>
  );
}
