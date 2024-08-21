import React,{useEffect} from 'react'
import "./travail.css"
import img2 from "../../assets/programming.svg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importer le CSS de AOS

const Travail = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Durée des animations en millisecondes
        //   once: true,    // Pour que l'animation se joue une seule fois
        });
      }, []);
  return (
    <>
     
    <section className="travail" id="travail">
        <div className="travail-content">
            <h1  data-aos="flip-left">
                Comment nous travaillons
            </h1>
            <h3 className="text-animation"  data-aos="zoom-in">
                Rendre vos projets
                magnifiques
            </h3>
            <p  data-aos="slide-up">
                Compétences techniques, design, capacité à se mettre à
                la place du commerçant.
            </p>
            <div className="travail__check">
                <span className="check__circle"  data-aos="slide-right">
                    <i className="fa fa-check-circle icons_check"></i>
                    <div className="texte">
                        Gamme complète de services
                        incluant
                    </div>
                </span>
                <span className="check__circle" data-aos="slide-right">
                    <i className="fa fa-check-circle icons_check"></i>
                    <div className="texte">
                        Compétences développement web et mobile, design

                    </div>
                </span>
                <span className="check__circle" data-aos="slide-right">
                    <i className="fa fa-check-circle icons_check"></i>
                    <div className="texte">Se mettre à la place du commerçant
                    </div>
                </span>
            </div>
        </div>

        <div className="travail-img" data-aos="slide-left">
            <img src={img2} alt="" />
        </div>
    </section> 
    </>
  )
}

export default Travail
