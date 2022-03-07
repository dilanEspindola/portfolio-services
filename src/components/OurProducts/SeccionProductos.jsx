import { ShowProducts, showProducts } from "./ShowProducts";
import products from "../products.json";

export const SeccionProductos = () => {
  return (
    <div>
      <h3 className="our-products-title">Nuestros productos</h3>
      <div className="seccion-productos">
        <ShowProducts products={products} />
      </div>
    </div>
  );
};
