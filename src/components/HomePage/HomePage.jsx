import '../HomePage/HomePage.css';
import whatsapp from '../../assets/icons/whatsapp.png'


const HomePage = () => {
  return (
    <div id="Home" className="home-page">
      <section className="costura-creativa">
        <h1 className="text-costura">Impresiones en 3D</h1>
        <ul>
          <li>Productos personalizados</li>
          <li>Excelente calidad</li>
          <li>Envíos a todo el país</li>

        </ul>

        <p className="parrafo">¡Lo pedis, lo tenés!</p>

        <a
        href="https://wa.me/3484365436"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsapp} alt="WhatsApp Icon" />
      </a>

      </section>
    </div>
  );
};

export default HomePage;