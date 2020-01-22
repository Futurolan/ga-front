import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const Hero = (props) => (
  <section className='ga-hero'>
    <div className='hero is-fullheight-with-navbar has-text-centered' style={{ background: `url('${props.imgUrl}') no-repeat center center` }}>
      <video autoPlay loop muted poster={props.imgUrl} className='video-background is-fullheight-with-navbar'>
        <source src={props.videoUrl} />
      </video>
      <div className='hero-body'>
        <div className='container'>
          <img src={props.logoUrl} />
          <h1 className='title is-size-1 has-text-white is-uppercase'>{props.title}</h1>
          {props.subtitle && <h2 className='subtitle is-size-2 has-text-white-bis'>{props.subtitle}</h2>}
        </div>
      </div>
    </div>
  </section>
)

Hero.propTypes = {
  logoUrl: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imgUrl: PropTypes.string,
  videoUrl: PropTypes.string
}

export default Hero
