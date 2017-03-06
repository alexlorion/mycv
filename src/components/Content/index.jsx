import React from 'react';

import Skills from './Skills';
import School from './School'

import './index.scss';

const Content = React.createClass({
  render () {
    return (
      <div className="Content">
        <div className="title1 infobulle left">expériences</div>
        <Skills />
        <div className="title2 infobulle left">parcours scolaire</div>
        <School />
      </div>
    )
  }
})

export default Content
