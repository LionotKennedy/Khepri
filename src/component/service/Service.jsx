import React,{useEffect} from 'react'
import "./service.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importer le CSS de AOS

const Service = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Durée des animations en millisecondes
        //   once: true,    // Pour que l'animation se joue une seule fois
        });
      }, []);
    return (
        <>
            <section className="services" id="services">
                <h2 className="heading"  data-aos="fade-right">service</h2>
                <div className="bath" data-aos="flip-right">
                    <h3 className="text-animation">
                        Comment notre agence
                    </h3>
                    <h3 className="text-animation">
                        peut vous aider.
                    </h3>
                </div>
                <div className="service-box" data-aos="slide-down-right">
                    <div className="wrapper">
                        <div className="service-item" data-aos="slide-right">
                            <span className="service__round"><i className="fa fa-desktop" id="service__icon"></i></span>
                            <h5>Design</h5>
                            <p>Conception d'expérience utilisateur et
                                d'interface utilisateur</p>
                            <a href="#" className="see__more">
                                En savoir plus <i className="fa fa-arrow-right arrow"></i>
                            </a>
                        </div>

                        <div className="service-item" data-aos="flip-up">
                            <span className="service__round"><i className="fab fa-connectdevelop" id="service__icon"></i></span>
                            <h5>Development</h5>
                            <p>Développement site web, et application
                                mobile.</p>
                            <a href="#" className="see__more">
                                En savoir plus <i className="fa fa-arrow-right arrow"></i>
                            </a>
                        </div>

                        <div className="service-item" data-aos="slide-left">
                            <span className="service__round"><i className="fa fa-search-location" id="service__icon"></i></span>
                            <h5>SEO</h5>
                            <p>Amélioration de la visibilité de votre
                                site web.</p>
                            <a href="#" className="see__more">
                                En savoir plus <i className="fa fa-arrow-right arrow"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Service
