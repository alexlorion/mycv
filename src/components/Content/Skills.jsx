import React from 'react';
import {Label, Well} from 'react-bootstrap';

import './Skills.scss';

const Skills = React.createClass({
  render () {
    return (
      <div className="Skills">
        <div id="1" className="skill">
          <div className="infos">
            <div className="society">
              <img src="https://pbs.twimg.com/profile_images/1551623337/wyplay-logo-2011_400x400.png" />
              <div className="name">Wyplay</div>
              <div className="job"> - Développeur d'applications numériques</div>
            </div>
            <div className="date">2016 - Aujourd'hui</div>
          </div>
          <div className="technos">
            <Label>Javascript</Label>
            <Label>Custom Framework</Label>
            <Label>Mocha</Label>
            <Label>Git</Label>
            <Label>Agile</Label>
          </div>
          <div className="details">
            <Well>
              <div className="title">Réalisation de solutions logicielles destinées à la télévision numérique</div>
              - Maîtrise des standards de développement HTML / CSS / Javascript
              <br />
              - Framework de développement "maison" similaire à ReactJS
              <br />
              - Analyses et gestion des performances
              <br />
              - Tests unitaires Javascript (Mocha)
              <br />
              - Gestion de versions avec Git
            </Well>
          </div>
        </div>
        <div id="2" className="skill">
          <div className="infos">
            <div className="society">
              <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/4/4b/Logo_lectra.jpg/382px-Logo_lectra.jpg" />
              <div className="name">Lectra</div>
              <div className="job"> - Développeur Front End</div>
            </div>
            <div className="date">2013 - 2016</div>
          </div>
          <div className="technos">
            <Label>ExtJS</Label>
            <Label>ReactJS</Label>
            <Label>Bootstrap</Label>
            <Label>NodeJS</Label>
            <Label>Jasmine</Label>
            <Label>SVN</Label>
            <Label>Git</Label>
            <Label>Agile</Label>
          </div>
          <div className="details">
            <Well>
              <div className="title">Développement d'applications Web assurant la gestion et le suivi de la chaîne de production destiné aux entreprises de mode, d'automobile, d'ameublement</div>
              - Mise en place de bonnes pratiques HTML / CSS / Javascript
              <br />
              - Utilisation de frameworks Javascript (ExtJS / ReactJS)
              <br />
              - Intégration des recommandations UX
              <br />
              - Mise en place des tests unitaires
              <br />
              - Utilisation d'outils de versionning (Git, SVN)
              <br />
              - Utilisation d'outils d'Intégration (Jenkins)
            </Well>
          </div>
        </div>
        <div id="3" className="skill">
          <div className="infos">
            <div className="society">
              <img src="https://pbs.twimg.com/profile_images/770587442600697856/8vq6s7Xs.jpg" />
              <div className="name">Armée de l'Air</div>
              <div className="job"> - Développeur Java / Java Web</div>
            </div>
            <div className="date">2008 - 2013</div>
          </div>
          <div className="technos">
            <Label>Java</Label>
            <Label>JSP</Label>
            <Label>PHP</Label>
            <Label>jQuery</Label>
            <Label>JUnit</Label>
            <Label>SVN</Label>
          </div>
          <div className="details">
            <Well>
              <div className="title">Réalisation d'applications embarquées, </div>
              - Développement d'un logiciel de gestion de tir assisté par radar (Java)
              <br />
              - Développement d'un site Intranet permettant la gestion de réservation d'un champs de tir (HTML / CSS / PHP / jQuery)
              <br />
              - Réalisation d'un logiciel de gestion de pannes d'un aéronef type Rafale (Java)
              <br />
              - Rédaction de la documentation fonctionnelle et technique
              <br />
              - Rédaction des tests associés (JUnit)
              <br />
              - Responsable des formations Javascript / jQuery.
            </Well>
          </div>
        </div>
      </div>
    )
  }
})

export default Skills
