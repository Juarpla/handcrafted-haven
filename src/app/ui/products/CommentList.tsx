import {StarRating} from "@/app/ui/products/StarRating";
import {Comment} from "@/lib/definitions";

interface CommentListProps {
  comments: Comment[];
}

export const CommentList = ({comments}: CommentListProps) => {
  return (
    <div className="space-y-4 py-8">
      {comments.map(comment => (
        <div key={comment.id} className="rounded-lg border p-4">
          <div className="mb-2 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{comment.user_name}</h3>
              <p className="text-sm text-gray-500">
                {new Date(comment.timestamp).toLocaleDateString()}
              </p>
            </div>
            <StarRating rating={comment.rating} readonly />
          </div>
          <p className="text-gray-700">{comment.content}</p>
        </div>
      ))}
    </div>
  );
};
