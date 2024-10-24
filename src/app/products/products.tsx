import { Product } from "../lib/definitions";



export default function ProductsTable({productData,}:{productData:Product[]}) {
    return (
        <>
        <div className="border-black-200">
            <p>{productData?.map((data)=> (
                <div>
                    <p>{data.productname}</p>
                    <p>{data.price}</p>
                    <p>{data.description}</p>
                </div>
            ))}</p>
        </div>
        </>
    )
}