import { fetchProducts } from "../lib/data";
import { Product } from "../lib/definitions";



export default function ProductsTable({productData,}:{productData:Product[]}) {
    return (
        <>
        <div>
            <p>{productData?.map((data)=> (
                <div key={data.id} className="display-block border-black-500">
                    <p className="text-black">{data.productname}</p>
                    <p className="text-black">${data.price}</p>
                    <p className="text-black">{data.description}</p>
                </div>
            ))}</p>
        </div>
        </>
    )
}