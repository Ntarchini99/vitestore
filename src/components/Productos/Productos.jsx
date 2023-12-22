import React from 'react';
import './Productos.css';
import dinosaurio1 from "../../assets/img/01.png";
import dinosaurio2 from "../../assets/img/1.png";
import maceta02 from "../../assets/img/02.png";
import maceta2 from "../../assets/img/2.png";
import Aimg5 from "../../assets/img/03.png";
import Aimg6 from "../../assets/img/3.png";
import Aimg7 from "../../assets/img/04.png";
import Aimg8 from "../../assets/img/04.png";
import Aimg9 from "../../assets/img/05.png";
import Aimg10 from "../../assets/img/06.png";
import Aimg11 from "../../assets/img/6.png";
import Aimg12 from "../../assets/img/07.png";
import Aimg13 from "../../assets/img/8.png";
import Aimg14 from "../../assets/img/08.png";

const Productos = () => {
    return (
        <section id='productos'>
            <h1 className='productoss'>Algunos Productos</h1>
        <div className="productos-store-section">
            {/* Card 1 */}
            <div className="productos-card">
                <img className="productos-default-image" src={dinosaurio1} alt="Producto 1" />
                <img className="productos-hover-image" src={dinosaurio2} alt="Producto 1 (Hover)" />
            </div>

            <div className="productos-card">
                <img className="productos-default-image" src={maceta02} alt="Producto 2" />
                <img className="productos-hover-image" src={maceta2} alt="Producto 2 (Hover)" />
            </div>

            <div className="productos-card">
                <img className="productos-default-image" src={Aimg5} alt="Producto 3" />
                <img className="productos-hover-image" src={Aimg6} alt="Producto 3 (Hover)" />
            </div>

            <div className="productos-card">
                <img className="productos-default-image" src={Aimg7} alt="Producto 4" />
                <img className="productos-hover-image" src={Aimg8} alt="Producto 4 (Hover)" />
            </div>

            <div className="productos-card">
                <img className="productos-default-image" src={Aimg9} alt="Producto 5" />
                <img className="productos-hover-image" src={Aimg9} alt="Producto 5 (Hover)" />
            </div>

            <div className="productos-card">
                <img className="productos-default-image" src={Aimg10} alt="Producto 6" />
                <img className="productos-hover-image" src={Aimg11} alt="Producto 6 (Hover)" />
            </div>
            <div className="productos-card">
                <img className="productos-default-image" src={Aimg12} alt="Producto 6" />
                <img className="productos-hover-image" src={Aimg12} alt="Producto 6 (Hover)" />
            </div>
            <div className="productos-card">
                <img className="productos-default-image" src={Aimg13} alt="Producto 6" />
                <img className="productos-hover-image" src={Aimg14} alt="Producto 6 (Hover)" />
            </div>
        </div>
        </section>
    );
};

export default Productos;
