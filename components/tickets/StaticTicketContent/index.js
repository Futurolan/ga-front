import React from 'react'

import ReactIframeResizer from 'react-iframe-resizer-super'

import config from 'config/config'

import './styles.scss'

function StaticTicketContent () {
  return (
    <div className='ga-static-ticket-content '>
      <h1 className='title title-line has-text-centered'><span>{config.staticTickets.title}</span></h1>
      <div className='columns is-multiline'>
        <div className='column is-12 is-12-desktop'>
          {config.tickets.notification && <div className='notification is-warning' dangerouslySetInnerHTML={{ __html: config.tickets.notification }} />}
          <div className='box '>
            <ReactIframeResizer
              iframeResizerOptions={{ checkOrigin: false, log: true }}
              src={config.staticTickets.iframeUrl}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaticTicketContent
