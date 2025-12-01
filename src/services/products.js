const BASE_URL = "https://69253f6682b59600d722d985.mockapi.io/products";

export const createProduct = async (product) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(product),
    });

    if (!res.ok) {
        throw new Error("No se pudo crear el producto");
    }

    return await res.json();
};

export const getProducts = async () => {
    const res = await fetch(BASE_URL);
    return await res.json();
};

export const getProductById = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`);

    if (!res.ok) {
        throw new Error("Error al traer el producto");
    }

    const data = await res.json();
    return data;
};
