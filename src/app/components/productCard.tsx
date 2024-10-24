

export default function ProductCard({
    name,
    image,
    price, 
    description,
    craftType,
}: {
    name: string;
    image: img;
    price: number;
    description: string;
    craftType: string;
}) {
    return (
        <div className="rounded bg[var(--background)] p-2">
            <h3 className="m-2 text-lg">{name}</h3>
            <img src="{image}" alt="{name}"></img>
            <p>{description}</p>
            <p>{craftType}</p>
            <p>${price}</p>
        </div>
    );
}