import { Link } from "react-router-dom";
import { useAos } from "../useAos";
import aos from "aos";

export const ShowProducts = ({ products }) => {
  const { aosSetting } = useAos();
  aos.init(aosSetting);
  return (
    <div className="flex">
      {products.map((product) => (
        <div className="single-section" key={product.id} data-aos="zoom-in">
          <div className="section-content">
            <h3>{product.categoria}</h3>
            <div className="content">
              {product.contenido.map((image) => (
                <div className="content-img" key={image.idImg}>
                  <img src={image.imagen} alt="" />
                  <div className="link">
                    <Link
                      to={`/nuestros-productos/${product.id}/${image.idImg}`}
                      className="link-to-single-product"
                    >
                      ver más
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
