import { products } from "../model";

const ProductService = {
  addToProduct(formData) {
    const newProduct = {
      id: products.length + 1,
      name: formData.get("name"),
      description: formData.get("description"),
      price: Number(formData.get("price")),
      stock: Number(formData.get("stock")),
      img: formData.get("img") || null,
    };
    products.push(newProduct);
    return newProduct;
  },
  editProduct(productId, updatedData) {
    const product = products.find((p) => p.id === productId);
    if (product) {
      Object.assign(product, updatedData);
      return product;
    }
    return null;
  },
  deleteProduct(productId) {
    const index = products.findIndex((p) => p.id === productId);
    if (index !== -1) {
      products.splice(index, 1);
      return true;
    }
    return false;
  },
  getProductList() {
    return products;
  },
  getProductDetail(productId) {
    const pid = parseInt(productId);
    const product = products.find((p) => p.id === pid) || null;
    console.log(product);
    return product;
  },
};

export default ProductService;
