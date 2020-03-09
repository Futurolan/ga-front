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
          {config.staticTickets.notification && <div className='notification is-warning' dangerouslySetInnerHTML={{ __html: config.staticTickets.notification }} />}
          <div className='box '>
            <ReactIframeResizer
              iframeResizerOptions={{ checkOrigin: false, log: true }}
              src={config.staticTickets.iframeUrl}
              style={{ width: '100%', height: 1100, minHeight: 20 }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaticTicketContent
