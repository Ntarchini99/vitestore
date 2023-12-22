import React, { useEffect } from 'react';
import NosotrosImage from '../../assets/img/impresora.png';
import '../Nosotros/Nosotros.css';

const Nosotros = () => {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('Nosotros');
      const sectionPosition = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionPosition < windowHeight / 2) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="Nosotros" className="Nosotros">
      <div className='container-textt'>
        <h1>NOSOTROS</h1>
        <p>Somos un emprendimiento creado para la venta de productos realizados con impresión 3D.
          Creamos diseños a pedido del cliente, o también puedes comprar productos ya realizados
          que verás en nuestro catálogo online. Para hacer un pedido, deberás comunicarte
          vía WhatsApp o Instagram, encargar tu diseño y luego procederemos a la compra.</p>

      </div>
      <div className='img-nosotros'>
        <img src={NosotrosImage} alt="Nosotros Imagen" />
      </div>
    </div>
  );
};

export default Nosotros;