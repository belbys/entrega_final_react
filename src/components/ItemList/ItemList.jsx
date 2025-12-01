import { Item } from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ list }) => {
    return (
        <section className="product-grid">
            {list.map((product) => (
                <Item key={product.id} {...product} />
            ))}
        </section>
    );
};

export default ItemList;
