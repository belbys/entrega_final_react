import { useCartContext } from "../../context/CartContext/UseCartContext";
import "./ItemDetail.css"

export const ItemDetail = ({ detail }) => {
    const { addItem } = useCartContext();

    const handleAdd = () => {
        addItem(detail, 1);
        alert(`${detail.name} Agregando al carrito`);
    };
    const images = Array.isArray(detail.imageUrl) ? detail.imageUrl : [detail.imageUrl];

    return (
        <article className="item-detail">
            <div className="detail-gallery">
                {images.map((src, i) => (
                    <img key={i} src={src} alt={`${detail.name} ${i + 1}`} className="detail-slide" />
                ))}
            </div>


            <div className="detail-info">
                <h2 className="detail-title">{detail.name}</h2>
                <p className="detail-price">${detail.price}</p>
                {detail.description && <p><strong>Descripción:</strong> {detail.description}</p>}
                {detail.material && <p><strong>Material:</strong> {detail.material}</p>}
                {detail.size && <p><strong>Tamaño:</strong> {detail.size}</p>}
                {detail.uso && <p><strong>Uso:</strong> {detail.uso}</p>}
                <button onClick={handleAdd} className="btn-add">Agregar al carrito</button>
            </div>
        </article>

    );
};