import { useParams } from "react-router-dom";
import jsonProducts from "../products.json";

export const ProductId = () => {
  const { idCategoria, idImg } = useParams();
  const idCategoriaINT = parseInt(idCategoria);
  const idImgINT = parseInt(idImg);

  const singleElement = jsonProducts.find((id) => id.id === idCategoriaINT);
  const getImg = singleElement.contenido.find(
    (imgId) => imgId.idImg === idImgINT
  );

  return (
    <div className="single-product-container">
      <div className="single-product-description">
        <h1>{singleElement.categoria}</h1>
        <img src={getImg.imagen} alt="" />
        <h3>descripcion</h3>
        <p>{getImg.descripcion}</p>
      </div>
    </div>
  );
};
