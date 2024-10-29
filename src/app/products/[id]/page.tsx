import {CommentList} from "@/app/ui/products/CommentList";
import ProductDetails from "@/app/ui/products/ProductDetails";
import {fetchCommentsByProductId, fetchProductById} from "@/lib/data";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductById({params: {id}}: Props) {
  const productPromise = fetchProductById(id);
  const commentPromise = fetchCommentsByProductId(id);

  const [productData, commentsData] = await Promise.all([
    productPromise,
    commentPromise,
  ]);

  return (
    <div className="grid min-h-screen items-center justify-center bg-gray-100">
      <ProductDetails productInfo={productData} />
      <CommentList comments={commentsData} />
    </div>
  );
}
