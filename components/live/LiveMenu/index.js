import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import getConfig from 'next/config'

import ActiveLink from 'components/common/ActiveLink'

import config from 'config/config'

const { publicRuntimeConfig } = getConfig()

function LiveMenu ({ className, color, backgroundColor, data: { loading, error, node } }) {
  if (error) {
    console.log(error)
    return null
  }

  if (node && node.livemode) {
    return <ActiveLink label={config.live.navTitle || config.live.title} color={color} backgroundColor={backgroundColor} className={`ga-live-menu ${className}`} as={config.live.link} path='/live' />
  } else { return null }
}

export const edition = gql`
query{
  node:nodeById(id:"${publicRuntimeConfig.EDITION_ID}") {
    ... on NodeEdition {
      livemode:fieldEditionLiveModeActive
    }
  }
}
`

LiveMenu.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string
}

export default graphql(edition)(LiveMenu)
