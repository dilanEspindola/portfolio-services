import { Link } from "react-router-dom";
import { useAos } from "../useAos";
import aos from "aos";

import "../css/aboutUs.css";
export const AboutUs = () => {
  const { aosSetting } = useAos();
  aos.init(aosSetting);

  return (
    <div className="about-us">
      <div className="nuestra-historia">
        <div className="contenido-historia">
          <h3>nuestra historia</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            repudiandae beatae. Dolor consequuntur impedit quia sint voluptatum
            illo asperiores, enim molestias recusandae porro ut ducimus,
            exercitationem quae earum officia pariatur quas tempora nemo quo
            nobis veniam, adipisci reiciendis. At pariatur neque quibusdam
            labore modi? Obcaecati aspernatur quidem eum fugiat doloremque.
            Dolor consequuntur impedit quia sint voluptatum illo asperiores,
            enim molestias recusandae porro ut ducimus, exercitationem quae
            earum officia pariatur quas tempora nemo quo nobis veniam, adipisci
            reiciendis
          </p>
          <div className="images-historia">
            <img
              src={require(`../../images/presentacion3.jpg`)}
              data-aos="fade-up-right"
            />
            <img
              src={require(`../../images/image1.jpg`)}
              data-aos="fade-up-left"
            />
          </div>
        </div>
      </div>

      <div className="sobre-nosotros">
        <div className="contenido-sobre-nosotros">
          <h3>sobre nosotros</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            repudiandae beatae. Dolor consequuntur impedit quia sint voluptatum
            illo asperiores, enim molestias recusandae porro ut ducimus,
            exercitationem quae earum officia pariatur quas tempora nemo quo
            nobis veniam, adipisci reiciendis. At pariatur neque quibusdam
            labore modi? Obcaecati aspernatur quidem eum fugiat doloremque.
            Dolor consequuntur impedit quia sint voluptatum illo asperiores,
            enim molestias recusandae porro ut ducimus, exercitationem quae
            earum officia pariatur quas tempora nemo quo nobis veniam, adipisci
            reiciendis
          </p>
        </div>
      </div>
      <div className="nuestra-mision">
        <div className="contenido-nuestra-mision">
          <h3>lo que ofrecemos</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            repudiandae beatae. Dolor consequuntur impedit quia sint voluptatum
            illo asperiores, enim molestias recusandae porro ut ducimus,
            exercitationem quae earum officia pariatur quas tempora nemo quo
            nobis veniam, adipisci reiciendis. At pariatur neque quibusdam
            labore modi? Obcaecati aspernatur quidem eum fugiat doloremque.
            Dolor consequuntur impedit quia sint voluptatum illo asperiores,
            enim molestias recusandae porro ut ducimus, exercitationem quae
            earum officia pariatur quas tempora nemo quo nobis veniam, adipisci
            reiciendis
          </p>
        </div>
      </div>
      <div className="btn-contact">
        <Link to="/contactanos" className="link-contact">
          Contactanos
        </Link>
      </div>
    </div>
  );
};
