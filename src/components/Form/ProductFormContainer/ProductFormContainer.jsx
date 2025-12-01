import { useState } from "react";
import { uploadToImgbb } from "../../../services/uploadImage";
import "./ProductFormContainer.css";

const ProductFormContainer = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState(null);

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);

        try {
            const imageUrl = await uploadToImgbb(imageFile);

            const newProduct = {
                name,
                price: Number(price),
                category,
                description,
                imageUrl,
            };

            const response = await fetch(
                "https://69253f6682b59600d722d985.mockapi.io/products",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newProduct),
                }
            );

            if (!response.ok) throw new Error("Error al guardar producto");

            setMessage("Producto creado con éxito 🎉");
            setName("");
            setPrice("");
            setCategory("");
            setDescription("");
            setImageFile(null);
        } catch (err) {
            console.error(err);
            setMessage("Hubo un error al crear el producto.");
        }

        setLoading(false);
    };

    return (
        <div className="admin-wrapper">
            <h2 className="admin-title">Alta de productos</h2>

            <form className="product-form" onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Precio:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Categoría:</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Descripción:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div>
                    <label>Imagen:</label>
                    <input
                        type="file"
                        onChange={(e) => setImageFile(e.target.files[0])}
                        required
                    />
                </div>

                <button className="btn" type="submit" disabled={loading}>
                    {loading ? "Cargando..." : "Crear producto"}
                </button>

                {message &&
                    <p className="success-message">
                        {message}
                    </p>}
            </form>
        </div>
    );
};

export default ProductFormContainer;
