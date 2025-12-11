import { useState, useEffect } from "react";
function CategoryCard({ title, images }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 ">
            {products.map(item => (
                <div key={item.id} className="border p-4 flex flex-col items-center shadow-lg bg-white rounded-2lg ">
                    <img src={item.image} alt={item.title} className="mx-auto  h-32 object-cover rounded " />
                    <h2 className="font-medium text-sm mt-2 truncate w-full text-center">{item.title}</h2>
                    <p className="font-bold">${item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default CategoryCard;