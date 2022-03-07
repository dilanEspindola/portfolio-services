import aos from "aos";
import { Link } from "react-scroll";
import { useAos } from "../useAos";
import { SeccionProductos } from "./SeccionProductos";

import "../css/ourProducts.css";

export const OurProducts = () => {
  const { aosSetting } = useAos();
  aos.init(aosSetting);
  return (
    <div className="nuestros-productos">
      <div
        className="info-nuestros-poductos"
        data-aos="fade-down-right"
        data-aos-easing="ease-out-back"
        data-aos-offset="400"
        data-aos-duration="1600"
      >
        <h1>
          Ofrecemos diferentes productos para tu oficina, comercio, centro
          educativo, etc...
        </h1>
        <h3>
          Dispones de lockers, puestos de trabajo, sillas, gabinenetes, mesas
          para juntas y más que puedes encontrar en esta sección
        </h3>
      </div>
      <Link
        className="icon-arrow"
        to="secciones-productos"
        smooth={true}
        duration={500}
      >
        <i className="fa-solid fa-arrow-down-long animate__animated animate__fadeInLeftBig"></i>
      </Link>
      <div className="secciones" id="secciones-productos">
        <SeccionProductos />
      </div>
    </div>
  );
};
