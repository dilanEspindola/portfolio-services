import { ShowProduct } from "./ShowProduct";
import imagenes from "../imagenes.json";
import "animate.css";

export const SectionOne = () => {
  return (
    <div className="section1-container">
      <h1>Algunos productos de lo que ofrecemos</h1>

      <div className="products">
        <ShowProduct product={imagenes} />
      </div>
    </div>
  );
};
