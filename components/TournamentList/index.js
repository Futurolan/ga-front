import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import TournamentCard from '../TournamentCard'

function TournamentList ({
  data: { loading, error, nodeQuery }
}) {
  if (error) {
    return <div className='notification is-danger'>Une erreur est survenue pendant le chargement des tournois !!!</div>
  }

  if (nodeQuery && nodeQuery.entities && nodeQuery.entities.length > 0) {
    return <div className='ga-tournament-list'>
      <div className='columns is-multiline is-6  is-variable'>
        {nodeQuery.entities.map((tournament, index) => (
          <div className='column is-one-third' key={tournament.nid}>
            <TournamentCard
              nid={tournament.nid}
              title={tournament.title}
              imgMobileUrl={tournament.image ? tournament.image.mobile.url : tournament.game.node.image.mobile.url}
              imgDesktopUrl={tournament.image ? tournament.image.desktop.url : tournament.game.node.image.desktop.url}
              imgWidescreenUrl={tournament.image ? tournament.image.widescreen.url : tournament.game.node.image.widescreen.url}
              imgFullhdUrl={tournament.image ? tournament.image.fullhd.url : tournament.game.node.image.fullhd.url}
              current={tournament.reservedSlot}
              size={tournament.size}
              platform={tournament.platform}
              pegi={tournament.game.node.pegi} />
          </div>
        ))}
      </div>
    </div>
  }
  return <div className='notification'>Chargement des tournois en cours.</div>
}

export const tournaments = gql`
{
  nodeQuery(
  filter:{
    conditions:[
      {field:"type",value:["tournament"],operator:EQUAL},
      {field:"field_tournament_edition",value:["${process.env.EDITION_ID}"]},
      {field:"status",value:["1"]}
    ]},
  sort:[{field:"field_weight",direction:DESC}],
  limit:9999) {
    count,
    entities {
      ... on NodeTournament{
        nid
        title
        reservedSlot:fieldTournamentReservedSlot
        size:fieldTournamentSize
        platform:fieldTournamentPlatform
        image:fieldTournamentImage{
          mobile:derivative(style:CROP_2_1_720X360){
            url
          }
          desktop:derivative(style:CROP_2_1_288X144){
            url
          }
          widescreen:derivative(style:CROP_2_1_352X176){
            url
          }
          fullhd:derivative(style:CROP_2_1_416X208){
            url
          }
        }
        game:fieldTournamentGame{
          node:entity{
            pegi:fieldGamePegi
            image:fieldGameImage{
              mobile:derivative(style:CROP_2_1_720X360){
                url
              }
              desktop:derivative(style:CROP_2_1_288X144){
                url
              }
              widescreen:derivative(style:CROP_2_1_352X176){
                url
              }
              fullhd:derivative(style:CROP_2_1_416X208){
                url
              }
            }
          }
        }
      }
    }
  }
}
`

TournamentList.propTypes = {
  data: PropTypes.object
}

export default graphql(tournaments)(TournamentList)