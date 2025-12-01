import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../services/products";

import "./ItemListContainer.css";

export const ItemListContainer = ({ titulo }) => {
    const [products, setProducts] = useState([]);
    const { categoryId: category } = useParams(); 

    useEffect(() => {
        getProducts()
            .then((data) => {
                if (category) {
                    const filtered = data.filter(
                        (prod) => prod.category.toLowerCase() === category.toLowerCase()  
                    );
                    setProducts(filtered);
                } else {
                    setProducts(data);
                }
            })
            .catch((err) => {
                console.log("Hubo un error al buscar productos:", err);
            });
    }, [category]);

    return (
        <section className="container">
            <h1>{titulo}</h1>
            <ItemList list={products} />
        </section>
    );
};

export default ItemListContainer;
