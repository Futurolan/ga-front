import React from 'react'

import Layout from 'components/common/Layout'
import StaticTicketContent from 'components/tickets/StaticTicketContent'
import Meta from 'components/common/Meta'

import config from 'config/config'

class StaticBilletteriePage extends React.Component {
  render () {
    return (
      <Layout name='billetterie-page has-bg-star'>
        <section className='section has-bg-star'>
          <Meta title={config.staticTickets.title} description={config.staticTickets.description} />
          <div className='container'>
            <StaticTicketContent />
          </div>
        </section>
      </Layout>
    )
  }
}

export default StaticBilletteriePage
