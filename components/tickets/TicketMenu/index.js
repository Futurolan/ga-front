import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import getConfig from 'next/config'

import ActiveLink from 'components/common/ActiveLink'

import config from 'config/config'

const { publicRuntimeConfig } = getConfig()

function TicketMenu ({ className, color, backgroundColor, data: { loading, error, node } }) {
  if (error) {
    console.log(error)
    return null
  }

  if (node && node.url) {
    return <ActiveLink label={config.tickets.title} color={color} backgroundColor={backgroundColor} className={`ga-ticket-menu ${className}`} as={config.tickets.link} path='/tickets' />
  } else { return null }
}

export const edition = gql`
query{
  node:nodeById(id:"${publicRuntimeConfig.EDITION_ID}") {
    ... on NodeEdition {
      url:fieldEditionWeezeventUrl
    }
  }
}
`

TicketMenu.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string
}

export default graphql(edition)(TicketMenu)
