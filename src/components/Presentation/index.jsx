import React from 'react';
import {Glyphicon, Image} from 'react-bootstrap';

import './index.scss';

const Presentation = React.createClass({
  render () {
    return (
      <div className="Presentation">
        <div className="bloc">
          <div className="title infobulle left">lorion alexandre</div>
          <div className="photo">
            <Image src="https://pbs.twimg.com/profile_images/482994245288988674/m4TrD6X__400x400.jpeg" circle />
          </div>
          <div className="summary">
            Développeur d'applications web depuis 2008, très curieux et dynamique.
            Spécialisé dans le développement Front End, mes compétences principales tournent autour du Javascript / HTML / CSS. Les préoccupations de l'expérience utilisateur sont au cœur de mes principes de développement.
            <br /><br />
            La veille technologique fait partie intégrante de mon quotidien afin de maintenir mes connaissances personnelles des nouvelles technologies et des solutions que je pourrais apporter à mes besoins de développement.
          </div>
          <div className="infos">
            <div className="info">
              <div className="prefix"><u>Né le</u> : </div> 10/12/1988
            </div>
            <div className="info">
              <div className="prefix"><u>Nationalité</u> : </div> Française
            </div>
            <div className="info">
              <div className="prefix"><u>Permis</u> : </div> A / B
            </div>
            <div className="info">
              <div className="prefix"><u>Loisirs</u> : </div> Roller Derby / Foot
            </div>
          </div>
        </div>
        <div className="bloc">
          <div className="title infobulle right">contacts</div>
          <div className="contacts">
            <div className="info"><Glyphicon glyph="home" /> : Marseille - France</div>
            <div className="info"><Glyphicon glyph="phone-alt" /> : (+33)6 42 98 93 69</div>
            <div className="info"><Glyphicon glyph="envelope" /> : alexandre.lorion@gmail.com</div>
            <div className="info">
              Viadeo / <a href="http://www.linkedin.com/in/alexandre-lorion"><img src="https://pbs.twimg.com/profile_images/614583061448036352/CBpFkPaz.png" width="20px" /></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Presentation
