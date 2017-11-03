import React from 'react'

import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Maxime Morin`}
          style={{
            float: 'left',
            marginRight: rhythm(1 / 4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        Développeur web du <strong>Saguenay</strong>, je mange du{' '}
        <strong>javascript</strong> pour déjeuner, diner et souper!{' '}
        <a href="mailto:maxime.morin2@gmail.com">Écrivez moi</a>
      </p>
    )
  }
}

export default Bio
