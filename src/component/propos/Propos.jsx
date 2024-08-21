import React, {useEffect} from 'react'
import "./propos.css"
import img3 from "../../assets/Illustration.svg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importer le CSS de AOS

const Propos = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Durée des animations en millisecondes
        //   once: true,    // Pour que l'animation se joue une seule fois
        });
      }, []);
    return (
        <>
            <section className="apropos" id="apropos">
                <div data-aos="slide-right" className="apropos-img">
                    <img src={img3} alt="" />
                </div>
                <div  className="apropos-content">
                    <h1 data-aos="slide-left">
                        À p r o p o s
                    </h1>
                    <h3 className="text-animation" data-aos="slide-left">
                        Innovation Agile pour
                        Solutions Web et
                        Mobile
                    </h3>
                    <p data-aos="slide-left">
                        Offrant une Palette Complète de Services
                    </p>
                    <div className="min__texte" data-aos="slide-left">
                        Collaboration Profonde avec les Commerçants, pour un
                        Partenariat à Long Terme et un Travail en Équipe.
                    </div>

                    <div className="btns-group__apropos" data-aos="flip-left">
                        <a href="#travail" className="btns__apropos">À propos de nous</a>
                    </div>

                </div>


            </section>
        </>
    )
}

export default Propos
