import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/products";

import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getProductById(id)
            .then((product) => {
                if (product) {
                    setDetail(product);
                } else {
                    throw new Error("Producto no encontrado");
                }
            })
            .catch((err) => {
                console.log("Error al obtener producto:", err);
            });
    }, [id]);

    return (
        <main className="detail-container">
            {Object.keys(detail).length ? (
                <ItemDetail detail={detail} />
            ) : (
                <p>Cargando...</p>
            )}
        </main>
    );
};

export default ItemDetailContainer;
