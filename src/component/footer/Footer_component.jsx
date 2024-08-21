import React, {useEffect} from 'react'
import "./footer.css"
import img4 from "../../assets/img4.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importer le CSS de AOS

const Footer_component = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Durée des animations en millisecondes
        //   once: true,    // Pour que l'animation se joue une seule fois
        });
      }, []);
    return (
        <>
            <footer className="footer">
                <div className="footer__container">
                    <div className="content__footer">
                        <div className="footer__item__img" data-aos="fade-down">
                            <img src={img4} alt="" />
                        </div>
                        <div className="footer___div" data-aos="flip-right">

                            <div className="footer__items">
                                <h5>M e n u</h5>
                                <p>Acceuil</p>
                                <p>À propos</p>
                                <p>Services</p>
                                <p>Blog</p>

                            </div>

                            <div className="footer__items">
                                <h5>S e r v i c e s</h5>
                                <p>Design</p>
                                <p>Development</p>
                                <p>Marketing</p>
                                <p>See More</p>
                            </div>
                        </div>

                        <div className="footer__item__icon" data-aos="slide-up" >
                            <a href="#" className="footer__round"><i className="fab fa-facebook" id="footer__icon"></i></a>
                            <a href="#" className="footer__round"><i className="fab fa-twitter" id="footer__icon"></i></a>
                            <a href="#" className="footer__round"><i className="fab fa-instagram" id="footer__icon"></i></a>
                        </div>
                    </div>
                    <div className="footer__footer__content">
                        <a href="#" className="footer__footer__items">
                            Copyright © 2023. Tous droits réservés
                        </a>
                        <nav className="footer__footer">
                            <a href="#">Conditions d'utilisation</a>
                            <a href="#">Politique de confidentialité</a>
                        </nav>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer_component
