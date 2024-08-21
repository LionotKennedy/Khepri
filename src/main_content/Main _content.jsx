import React from 'react'
import Accueil from '../component/accueil/Accueil'
import Service from '../component/service/Service'
import Travail from '../component/travail/Travail'
import Propos from '../component/propos/Propos'

const Main_content = () => {
  return (
    <div>

      {/* ACCUEIL */}
      <Accueil />
      {/* ENDING */}


      {/* SERVICE */}
      <Service />
      {/* ENDING */}


      {/* TRAVAIL */}
      <Travail />
      {/* ENDING */}


      {/* A PROPOS */}
      <Propos />
      {/* ENDING */}


      {/* BLOG */}
      {/* ENDING */}


      {/* CONTACT */}
      {/* ENDING */}
      
    </div>
  )
}

export default Main_content
