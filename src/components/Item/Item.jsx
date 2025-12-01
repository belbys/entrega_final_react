import { Link } from "react-router-dom";
import "./item.css";

export const Item = ({ id, name, price, description, material, size, uso, imageUrl, children }) => {
    const firstImg = Array.isArray(imageUrl) ? imageUrl[0] : imageUrl;
    
    return (
        <article className="product-item">
            <div className="product-gallery one-by-one">
                {(Array.isArray(imageUrl) ? imageUrl : [firstImg]).map((src,i)=>(
                    <img key={i} src={src} alt={`${name} ${i + 1}`} className="product-slide"/> 
                ))}
            </div>
        

            <div className="product-info">
                <h2 className="product-title">{name}</h2>
                {price && <p className="product-price big">${price}</p>}
            </div>


            <div className="product-details">
                {description && <p><strong>Descripción:</strong> {description}</p>}
                {material && <p><strong>Material:</strong> {material}</p>}
                {size && <p><strong>Tamaño:</strong> {size}</p>}
                {uso && <p><strong>Uso:</strong> {uso}</p>}
            </div>

            <div className="product-actions">
                <Link className="btn" to={`/detail/${id}`}> Ver detalle</Link> {children}
            </div>
        </article >
    );
};