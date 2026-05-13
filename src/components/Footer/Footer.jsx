import './Footer.css';
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        
        <div className="footer__col">
          <h3 className="footer__title">El Kultrun de Isa</h3>
          <p>Diseño con alma 💜</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Links</h4>
          <ul className="footer__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Seguime</h4>
          <div className="footer__social">

           <div className="footer__social">
  <a href="https://www.instagram.com/elkultrundeisataller" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>

  <a href="https://www.facebook.com/elkultrundeisa/" target="_blank" rel="noopener noreferrer">
    <FaFacebook />
  </a>

  <a href="https://www.tiktok.com/@isa.mesina" target="_blank" rel="noopener noreferrer">
    <FaTiktok />
  </a>
</div>
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        © 2026 - Todos los derechos reservados
      </div>
    </footer>
  );
}


