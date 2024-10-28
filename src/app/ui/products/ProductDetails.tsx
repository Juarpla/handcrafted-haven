import {Product} from "@/lib/definitions";
import Image from "next/image";
import AddReview from "./AddReview";

type ProductDetailsProps = {
  productInfo: Product;
};

export default function ProductDetails({productInfo}: ProductDetailsProps) {
  return (
    <div className="border-grey-500 container mx-auto max-w-lg rounded-xl border p-4">
      <h1 className="mb-2 text-left text-2xl">{productInfo.productname}</h1>
      <Image
        src={productInfo.image_url}
        alt={productInfo.productname}
        width={500}
        height={500}
        className="mb-4 h-64 w-full object-cover"
      />
      <p className="text-left">{productInfo.description}</p>

      <AddReview productId={productInfo.id} />
    </div>
  );
}
