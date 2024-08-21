import React, {useEffect} from 'react'
import "./accueil.css"
import img1 from "../../assets/Frame.svg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importer le CSS de AOS

const Accueil = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Durée des animations en millisecondes
        //   once: true,    // Pour que l'animation se joue une seule fois
        });
      }, []);

    return (
        <>
            <section className="accueil" id="accueil">
                <div className="accueil-content">
                    <h1 data-aos="slide-right">
                        A c c u e i l
                    </h1>
                    <h3 className="text-animation" data-aos="flip-right">
                        Nous sommes là pour
                        concrétiser votre projet
                        de rêve. <span></span>
                    </h3>
                    <p data-aos="slide-up">
                        L'agence propose une gamme complète de services
                        comprenant des compétences techniques, du design et
                        une compréhension du monde des affaires
                    </p>

                    <div className="btns-group" data-aos="slide-right">
                        <a href="#travail" className="btns">Comment nous travaillons</a>
                        <a href="#contact" className="btns">Contactez-nous <i className="fa fa-phone-flip" id="contact-icon"></i></a>
                    </div> 

                </div>

                <div data-aos="slide-left" className="accueil-img">
                    <img src={img1} alt="" />
                </div>
            </section>
        </>
    )
}

export default Accueil
