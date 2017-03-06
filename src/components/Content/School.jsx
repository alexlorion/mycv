import React from 'react';

import './School.scss';

const School = React.createClass({
  render () {
    return (
      <div className="School">
        <div id="1" className="bloc">
          <div className="infos">
            <div className="name">
              Formation Militaire et Informatique
              <span className="at">@</span>
              <span className="location">Rochefort / Rennes</span>
              </div>
            <div className="date">2008 - 2009</div>
          </div>
        </div>
        <div id="2" className="bloc">
          <div className="infos">
            <div className="name">
              D.U.T Réseaux et Télécommunications
              <span className="at">@</span>
              <span className="location">Mont de Marsan</span>
            </div>
            <div className="date">2005 - 2007</div>
          </div>
        </div>
        <div id="3" className="bloc">
          <div className="infos">
            <div className="name">
              Baccalauréat Sciences et Technologies de l'Industrie
              <span className="at">@</span>
              <span className="location">Dax</span>
            </div>
            <div className="date">2005</div>
          </div>
        </div>
      </div>
    )
  }
})

export default School
