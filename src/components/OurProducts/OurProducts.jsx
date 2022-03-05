import aos from "aos";
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
      <div className="secciones">
        <SeccionProductos />
      </div>
    </div>
  );
};
