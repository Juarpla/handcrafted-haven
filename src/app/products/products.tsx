
import { Product } from "@/lib/definitions"


export default function ProductsTable({productData,}:{productData:Product[]}) {
    return (
        <>
        <div className="flex flex-col">
            <p>{productData?.map((data)=> (
                <div key={data.id} className="block rounded-md gap-4 border border-black-1000 p-4 m-2 ">
                    <p className="text-black">{data.productname}</p>
                    <p className="text-black">$ {data.price}</p>
                    <p className="text-black">Description: {data.description}</p>
                </div>
            ))}</p>
        </div>
        </>
    )
}
